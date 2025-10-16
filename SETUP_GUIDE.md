# Portfolio Website Setup Guide

Welcome to your modern portfolio website! This guide will help you configure the contact form and manage your projects.

## 🎨 Design

Your portfolio features a professional color scheme with:
- **Deep blues** (primary colors) - Conveying trust and professionalism
- **Emerald teals** (accent colors) - Adding vibrancy and freshness
- **Gold accents** - Highlighting important elements and achievements
- **Clean whites and grays** - Ensuring readability and sophistication

## 📧 Setting Up the Contact Form

The contact form uses **EmailJS** to send emails directly to **shubh05nagargoje@gmail.com**. EmailJS is already installed in the project.

### Complete Setup Steps:

#### Step 1: Create EmailJS Account

1. **Sign Up**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Click "Sign Up" and create a free account
   - Verify your email address

#### Step 2: Add Email Service

1. **Go to Email Services**
   - In your EmailJS dashboard, click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Click "Connect Account"

2. **For Gmail:**
   - Click "Connect Gmail"
   - Sign in with your Google account (shubh05nagargoje@gmail.com)
   - Allow EmailJS to send emails on your behalf
   - Copy the **Service ID** (looks like `service_xyz123`)

#### Step 3: Create Email Template

1. **Go to Email Templates**
   - Click "Create New Template"
   - Use this template structure:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

2. **Configure Template Variables**
   - Make sure these variables are in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content

3. **Set To Email**
   - In the "To email" field, enter: `shubh05nagargoje@gmail.com`

4. **Save and Copy Template ID**
   - Click "Save"
   - Copy the **Template ID** (looks like `template_xyz123`)

#### Step 4: Get Your Public Key

1. **Go to Account Settings**
   - Click on your profile/account in the top right
   - Navigate to "General" or "API Keys"
   - Find your **Public Key** (looks like `xyz123abc456`)

#### Step 5: Update Your Code

1. **Open the file**: `src/hooks/useContactForm.ts`

2. **Find lines 51-56** and replace the placeholder values:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

**Example with real values:**
```typescript
await emailjs.send(
  'service_abc123',
  'template_xyz456',
  templateParams,
  'abc123xyz456'
);
```

#### Step 6: Test the Contact Form

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Navigate to the Contact section**
   - Fill out the form with test data
   - Click "Send Message"

3. **Check your email**
   - You should receive the message at shubh05nagargoje@gmail.com
   - Check spam folder if you don't see it

### Troubleshooting

**Issue: Emails not arriving**
- Verify all three IDs are correct (Service ID, Template ID, Public Key)
- Check that your Gmail account is connected in EmailJS
- Make sure the recipient email is set to `shubh05nagargoje@gmail.com` in the template
- Check the browser console for error messages

**Issue: "User ID not found" error**
- Make sure you're using the Public Key, not the Private Key
- Verify the Public Key is copied correctly without extra spaces

**Issue: Rate limit exceeded**
- Free EmailJS plan allows 200 emails/month
- Upgrade if you need more capacity

### EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 1 email template
- Perfect for a portfolio website!

## 📂 Adding New Projects

Projects are managed through a simple configuration file, making it easy to add, edit, or remove projects.

### How to Add a New Project:

1. **Open the Projects File**
   - Navigate to `src/data/projects.ts`

2. **Add Your Project**
   - Copy the structure below and add it to the `projects` array:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Name',
  description: 'A brief one-line description for the card view',
  longDescription: 'A detailed description that appears in the modal. Explain what the project does, what technologies you used, and what problems it solves.',
  image: 'https://your-image-url.com/image.jpg',
  technologies: ['React', 'Node.js', 'MongoDB'],
  features: [
    'Feature 1 description',
    'Feature 2 description',
    'Feature 3 description',
  ],
  liveUrl: 'https://your-live-site.com',
  githubUrl: 'https://github.com/yourusername/repo',
  category: 'fullstack',
}
```

3. **Image Options**
   - Use Unsplash for free stock images: `https://unsplash.com`
   - Upload your own screenshots to a service like [Imgur](https://imgur.com)
   - Use direct URLs from your deployed projects

4. **Update URLs**
   - Replace `liveUrl` with your actual deployed project URL
   - Replace `githubUrl` with your repository URL
   - Remove `liveUrl` or `githubUrl` if not available (optional fields)

### Project Categories

Available categories:
- `fullstack` - Full stack applications
- `frontend` - Frontend-only projects
- `backend` - Backend/API projects
- `data` - Data analysis or visualization projects

## 🖼️ Finding Good Project Images

### Free Stock Photo Sites:
- **Unsplash** - [https://unsplash.com](https://unsplash.com)
- **Pexels** - [https://pexels.com](https://pexels.com)
- **Pixabay** - [https://pixabay.com](https://pixabay.com)

### Tips for Choosing Images:
1. Use landscape images (800x500 works well)
2. Choose images that relate to your project theme
3. Ensure images are high quality but not too large (< 500KB)
4. Consider using screenshots of your actual application

### Taking Screenshots:
- Use your browser's developer tools to set responsive sizes
- Consider using tools like [Screely](https://screely.com) for beautiful mockups
- For MacOS: `Cmd + Shift + 4` to take screenshots
- For Windows: `Windows + Shift + S` for Snip & Sketch

## 🚀 Updating Content

### Personal Information
All your personal details are in the respective component files:
- **Hero Section**: `src/components/sections/Hero.tsx`
- **About Section**: `src/components/sections/About.tsx`
- **Experience**: `src/components/sections/Experience.tsx`
- **Education**: `src/components/sections/Education.tsx`

### Social Links
Update social media URLs in:
- `src/components/sections/Hero.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Footer.tsx`

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Type check
npm run typecheck
```

## 📱 Responsive Design

Your portfolio is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Laptops (1024px and up)
- Desktop screens (1280px and up)

## 🎯 SEO Optimization

Update meta tags in `index.html`:
- Title
- Description
- Open Graph tags (for social media sharing)

## 🎨 Customizing Colors

To change the color scheme, edit `tailwind.config.js`:
- `primary` - Main brand color
- `accent` - Secondary/accent color
- `gold` - Highlight color

## 📄 License

This portfolio is yours to customize and deploy!

## 🤝 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed: `npm install`
3. Clear the cache: `rm -rf node_modules dist && npm install`

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite**
