# Deployment Checklist

Use this checklist to ensure your portfolio is ready for deployment.

## ✅ Pre-Deployment Checklist

### 1. Contact Form Configuration (EmailJS)
- [ ] Signed up for EmailJS account at [emailjs.com](https://www.emailjs.com/)
- [ ] Connected Gmail account (shubh05nagargoje@gmail.com) as email service
- [ ] Created email template with required variables
- [ ] Copied Service ID, Template ID, and Public Key
- [ ] Updated `src/hooks/useContactForm.ts` with all three IDs (lines 52-55)
- [ ] Tested the contact form locally
- [ ] Verified email delivery to shubh05nagargoje@gmail.com

### 2. Content Updates
- [ ] Verified all personal information is correct
- [ ] Updated all email addresses and phone numbers
- [ ] Checked all social media links work
- [ ] Reviewed about section text
- [ ] Confirmed work experience details are accurate
- [ ] Verified education information

### 3. Projects
- [ ] Added real project images (or verified stock images look good)
- [ ] Updated project descriptions
- [ ] Added GitHub repository links
- [ ] Noted dummy URLs that need updating after deployment
- [ ] Checked that project cards display correctly
- [ ] Tested project modal views

### 4. Images and Assets
- [ ] All images load correctly
- [ ] Images are optimized (reasonable file sizes)
- [ ] Images look good on mobile devices
- [ ] Stock photos are appropriate and professional

### 5. Testing
- [ ] Tested on desktop browser
- [ ] Tested on tablet (or responsive view)
- [ ] Tested on mobile phone
- [ ] Checked all navigation links
- [ ] Verified smooth scrolling works
- [ ] Tested contact form submission
- [ ] Checked all external links open in new tabs
- [ ] Verified animations work smoothly
- [ ] Tested with slow internet connection

### 6. SEO and Meta Tags
- [ ] Updated page title in `index.html`
- [ ] Added proper meta description
- [ ] Verified Open Graph tags for social media
- [ ] Checked favicon is set

### 7. Build and Deploy
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Tested production build locally with `npm run preview`

## 🚀 Deployment Steps

### Option A: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set up Production**
   ```bash
   vercel --prod
   ```

### Option B: Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Option C: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.ts**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 Post-Deployment Tasks

### Immediately After Deployment

- [ ] Visit your deployed URL and test thoroughly
- [ ] Test contact form on live site
- [ ] Check all links work
- [ ] Verify mobile responsiveness on real devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### Update URLs

- [ ] Copy your live portfolio URL
- [ ] Update project `liveUrl` fields in `src/data/projects.ts`
- [ ] Commit and redeploy

### Share Your Portfolio

- [ ] Update LinkedIn profile with portfolio URL
- [ ] Update GitHub profile README
- [ ] Add to resume
- [ ] Share on social media
- [ ] Add to email signature

## 🔄 Continuous Updates

### When Adding New Projects

1. Update `src/data/projects.ts`
2. Add project images
3. Test locally
4. Deploy updated version

### When Updating Content

1. Edit the relevant component files
2. Test changes locally
3. Commit changes
4. Deploy updated version

## 🎯 Performance Optimization (Optional)

- [ ] Enable Gzip compression on your host
- [ ] Set up CDN for images
- [ ] Add Google Analytics (if desired)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (usually automatic)
- [ ] Enable caching headers

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create Google Analytics account
2. Get tracking ID
3. Add to your site (in `index.html` or using a package)

### Vercel Analytics

1. Enable in Vercel dashboard
2. Automatically tracks page views and performance

## 🔒 Security

- [ ] No sensitive data in code
- [ ] API keys are not exposed
- [ ] Form submissions are validated
- [ ] HTTPS is enabled
- [ ] Dependencies are up to date

## ✨ Final Checks

- [ ] Portfolio URL works
- [ ] Site loads quickly
- [ ] No broken links
- [ ] Contact form delivers emails
- [ ] Mobile experience is smooth
- [ ] Looks professional
- [ ] Content is error-free
- [ ] Social links work

---

## 🎉 Congratulations!

Once you've completed this checklist, your portfolio is ready to help you land your next opportunity!

## 📞 Quick Links

- **EmailJS Dashboard**: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **Netlify Dashboard**: [https://app.netlify.com](https://app.netlify.com)

## 🆘 Having Issues?

1. Check browser console for errors
2. Review the `QUICK_START.md` guide
3. Ensure all dependencies are installed
4. Try clearing cache and rebuilding

---

**Remember**: Your portfolio is a living document. Update it regularly with new projects and achievements!
