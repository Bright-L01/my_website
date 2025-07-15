# Custom Domain Setup Guide for brightliu.com

## Current Status
- ✅ GitHub Pages deployment is working
- ✅ Site is accessible at: https://bright-l01.github.io/my_website/
- ❌ Custom domain (brightliu.com) DNS is not configured

## To Fix the Custom Domain

### Option 1: Remove Custom Domain (Immediate Fix)
1. Go to: https://github.com/Bright-L01/my_website/settings/pages
2. Clear the "Custom domain" field
3. Save changes
4. Your site will be immediately accessible at: https://bright-l01.github.io/my_website/

### Option 2: Configure DNS for brightliu.com
If you own brightliu.com and want to use it:

1. **Add DNS A Records** at your domain registrar:
   ```
   Type: A    Name: @    Value: 185.199.108.153
   Type: A    Name: @    Value: 185.199.109.153
   Type: A    Name: @    Value: 185.199.110.153
   Type: A    Name: @    Value: 185.199.111.153
   ```

2. **Add CNAME Record** (optional, for www subdomain):
   ```
   Type: CNAME    Name: www    Value: bright-l01.github.io
   ```

3. **Wait for DNS Propagation** (24-48 hours)

4. **Verify and Enable HTTPS**:
   - Return to GitHub Pages settings
   - DNS check should pass
   - Enable "Enforce HTTPS"

## Troubleshooting

### If DNS Check Still Fails:
1. Verify records with: `dig brightliu.com` or `nslookup brightliu.com`
2. Ensure no conflicting records exist
3. Check with your domain registrar's support

### Alternative: Use a Subdomain
Instead of brightliu.com, you could use:
- portfolio.brightliu.com
- Add CNAME record: `portfolio` → `bright-l01.github.io`

## Important Notes
- GitHub Pages sites are always public, even from private repos
- HTTPS is required for custom domains
- Changes may take up to 10 minutes to propagate on GitHub's side