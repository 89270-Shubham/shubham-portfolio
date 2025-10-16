# Quick Start Guide

## 🚀 Get Your Portfolio Running in 3 Steps

### Step 1: Install Dependencies (if not already done)
```bash
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### Step 3: Configure Contact Form with EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Connect your Gmail account (shubh05nagargoje@gmail.com)
3. Create an email template and get your IDs
4. Open `src/hooks/useContactForm.ts`
5. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` on lines 52-55

**Detailed instructions:** See `SETUP_GUIDE.md` for complete EmailJS setup steps

## ✨ Key Features

✅ **Fully Responsive** - Works on all devices
✅ **Modern Design** - Professional color scheme with deep blues, emerald teals, and gold accents
✅ **Smooth Animations** - Engaging scroll effects and transitions
✅ **Easy to Update** - Simple configuration for adding projects
✅ **Contact Form** - Direct email integration
✅ **SEO Optimized** - Meta tags included for search engines

## 📝 Quick Edits

### Add a New Project
Edit `src/data/projects.ts` and add your project following the existing format.

### Update Your Information
- **Contact Details**: `src/components/sections/Hero.tsx`
- **About Text**: `src/components/sections/About.tsx`
- **Work Experience**: `src/components/sections/Experience.tsx`

### Change Images
Replace the image URLs in `src/data/projects.ts` with your own:
- Use [Unsplash](https://unsplash.com) for free stock photos
- Upload screenshots to [Imgur](https://imgur.com)
- Use direct URLs from your hosted images

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Fonts
Fonts are loaded in `src/index.css`. Current fonts:
- **Inter** - Body text
- **Space Grotesk** - Headings

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx
│   │   └── SectionTitle.tsx
│   └── sections/        # Page sections
│       ├── Header.tsx   # Navigation
│       ├── Hero.tsx     # Landing section
│       ├── About.tsx    # About section
│       ├── Skills.tsx   # Skills showcase
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/
│   └── projects.ts      # ⭐ Edit this to add projects
├── hooks/
│   ├── useContactForm.ts  # ⭐ Configure contact form here
│   └── useScrollAnimation.ts
└── App.tsx              # Main app component
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

## 🔗 Update Project URLs

Once deployed, update the dummy URLs in `src/data/projects.ts`:
- Replace `https://your-published-site.com/lifestyle-wellness` with your actual URL
- Replace `https://your-published-site.com/airbnb-clone` with your actual URL

## 📧 Contact Form Setup with EmailJS

The contact form uses **EmailJS** to send emails directly to **shubh05nagargoje@gmail.com**.

### Quick Setup:

1. **Sign up**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Add Gmail Service**: Connect your Gmail account
3. **Create Template**: Use variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. **Get Your IDs**: Service ID, Template ID, and Public Key
5. **Update code**: `src/hooks/useContactForm.ts` lines 52-55

### What you need to replace:
```typescript
'YOUR_SERVICE_ID'    → Your EmailJS Service ID (e.g., 'service_abc123')
'YOUR_TEMPLATE_ID'   → Your EmailJS Template ID (e.g., 'template_xyz456')
'YOUR_PUBLIC_KEY'    → Your EmailJS Public Key (e.g., 'abc123xyz')
```

**Full step-by-step guide:** See `SETUP_GUIDE.md` for detailed instructions with screenshots

## 🎯 Next Steps

1. ✅ Test the website locally
2. ✅ Configure the contact form with EmailJS
3. ✅ Add your own project images
4. ✅ Update any dummy URLs
5. ✅ Deploy to Vercel or Netlify
6. ✅ Share your portfolio!

## 💡 Tips

- Keep project descriptions concise and impactful
- Use high-quality images (but optimize file size)
- Test the contact form before sharing
- Update your resume and LinkedIn with the portfolio link

## 🆘 Troubleshooting

### Build Errors
```bash
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Contact Form Not Working
- Verify all three EmailJS IDs are correct (Service ID, Template ID, Public Key)
- Check that Gmail is connected in your EmailJS dashboard
- Ensure recipient email is set to `shubh05nagargoje@gmail.com` in the template
- Check browser console for errors
- Verify you're using the Public Key, not Private Key

---

**Ready to impress?** Your portfolio is production-ready! 🎉
