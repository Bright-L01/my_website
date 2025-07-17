<script lang="ts">
  import { onMount } from 'svelte';

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }

  let formData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  let errors: FormErrors = {};
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let submitMessage = '';

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  function clearError(field: keyof FormErrors) {
    if (errors[field]) {
      errors = { ...errors, [field]: undefined };
    }
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    submitStatus = 'idle';

    try {
      // Create mailto link as fallback
      const mailtoLink = `mailto:brightliu@college.harvard.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // For now, we'll use mailto since we don't have a backend
      // In production, you'd want to integrate with a service like Netlify Forms, Formspree, etc.
      window.location.href = mailtoLink;
      
      submitStatus = 'success';
      submitMessage = 'Thank you for your message! Your email client should open with a pre-filled message.';
      
      // Track successful form submission
      import('./utils/analytics').then(({ default: analytics }) => {
        analytics.trackContactFormSubmit(true);
      });
      
      // Reset form
      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
    } catch (error) {
      console.error('Error submitting form:', error);
      submitStatus = 'error';
      submitMessage = 'There was an error submitting your message. Please try again or contact me directly at brightliu@college.harvard.edu';
      
      // Track failed form submission
      import('./utils/analytics').then(({ default: analytics }) => {
        analytics.trackContactFormSubmit(false);
      });
    } finally {
      isSubmitting = false;
    }
  }

  function getCharacterCount(text: string, maxLength: number): string {
    return `${text.length}/${maxLength}`;
  }
</script>

<div class="contact-form">
  <h3>Get in Touch</h3>
  <p>Interested in collaboration or have questions about my work? I'd love to hear from you!</p>
  
  <form on:submit={handleSubmit} novalidate>
    <div class="form-group">
      <label for="name" class="form-label">
        Name <span class="required">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-input"
        class:error={errors.name}
        bind:value={formData.name}
        on:input={() => clearError('name')}
        placeholder="Your full name"
        required
        aria-describedby={errors.name ? 'name-error' : undefined}
      >
      {#if errors.name}
        <div id="name-error" class="error-message" role="alert">
          {errors.name}
        </div>
      {/if}
    </div>

    <div class="form-group">
      <label for="email" class="form-label">
        Email <span class="required">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-input"
        class:error={errors.email}
        bind:value={formData.email}
        on:input={() => clearError('email')}
        placeholder="your.email@example.com"
        required
        aria-describedby={errors.email ? 'email-error' : undefined}
      >
      {#if errors.email}
        <div id="email-error" class="error-message" role="alert">
          {errors.email}
        </div>
      {/if}
    </div>

    <div class="form-group">
      <label for="subject" class="form-label">
        Subject <span class="required">*</span>
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        class="form-input"
        class:error={errors.subject}
        bind:value={formData.subject}
        on:input={() => clearError('subject')}
        placeholder="Brief description of your inquiry"
        required
        maxlength="100"
        aria-describedby={errors.subject ? 'subject-error' : undefined}
      >
      <div class="character-count">
        {getCharacterCount(formData.subject, 100)}
      </div>
      {#if errors.subject}
        <div id="subject-error" class="error-message" role="alert">
          {errors.subject}
        </div>
      {/if}
    </div>

    <div class="form-group">
      <label for="message" class="form-label">
        Message <span class="required">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        class="form-textarea"
        class:error={errors.message}
        bind:value={formData.message}
        on:input={() => clearError('message')}
        placeholder="Your message here..."
        required
        maxlength="1000"
        rows="6"
        aria-describedby={errors.message ? 'message-error' : undefined}
      ></textarea>
      <div class="character-count">
        {getCharacterCount(formData.message, 1000)}
      </div>
      {#if errors.message}
        <div id="message-error" class="error-message" role="alert">
          {errors.message}
        </div>
      {/if}
    </div>

    <button 
      type="submit" 
      class="submit-btn"
      disabled={isSubmitting}
      aria-label="Send message"
    >
      {#if isSubmitting}
        <span class="spinner"></span>
        Sending...
      {:else}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        Send Message
      {/if}
    </button>
  </form>

  {#if submitStatus === 'success'}
    <div class="status-message success" role="alert">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.34 0 2.61.29 3.76.82"/>
      </svg>
      {submitMessage}
    </div>
  {:else if submitStatus === 'error'}
    <div class="status-message error" role="alert">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      {submitMessage}
    </div>
  {/if}
</div>

<style>
  .contact-form {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    margin: 2rem 0;
  }

  .contact-form h3 {
    margin-top: 0;
    color: var(--text-primary);
    font-size: 1.25rem;
    font-weight: 600;
  }

  .contact-form p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  .required {
    color: #e74c3c;
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  .form-input.error,
  .form-textarea.error {
    border-color: #e74c3c;
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .character-count {
    font-size: 0.8rem;
    color: var(--text-tertiary);
    text-align: right;
    margin-top: 0.25rem;
  }

  .error-message {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 2rem;
    background: var(--accent-primary);
    color: var(--bg-primary);
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--accent-secondary);
    transform: translateY(-1px);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .status-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 6px;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  .status-message.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .status-message.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  @media (max-width: 768px) {
    .contact-form {
      padding: 1.5rem;
    }
    
    .submit-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>