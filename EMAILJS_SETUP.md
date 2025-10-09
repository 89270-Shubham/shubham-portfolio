# EmailJS Contact Form Setup

Your portfolio now uses **EmailJS** to send contact form submissions directly to **shubh05nagargoje@gmail.com**.

## What Changed?

The contact form has been updated to use EmailJS instead of Formspree:
- ✅ EmailJS package installed (`@emailjs/browser`)
- ✅ Contact form hook updated to use EmailJS
- ✅ All documentation updated with EmailJS instructions

## Why EmailJS?

- **Direct Email Delivery**: Emails are sent directly to your Gmail
- **Free Tier**: 200 emails/month (perfect for a portfolio)
- **No Form Verification**: No need to verify forms on third-party sites
- **Better Control**: Customize email templates directly in EmailJS dashboard
- **Reliable**: Industry-standard email service integration

## Quick Setup (5 Minutes)

### Step 1: Create Account
Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up.

### Step 2: Connect Gmail
1. Click "Add New Service"
2. Select "Gmail"
3. Connect your Gmail account: **shubh05nagargoje@gmail.com**
4. Copy your **Service ID**

### Step 3: Create Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Set "To email" to: **shubh05nagargoje@gmail.com**
5. Copy your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key" section
3. Copy your **Public Key**

### Step 5: Update Code
Open `src/hooks/useContactForm.ts` and replace these three values on lines 52-55:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // ← Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // ← Replace with your Public Key
);
```

### Step 6: Test
```bash
npm run dev
```

Go to your portfolio, fill out the contact form, and check your email!

## Example Configuration

Here's what it looks like with real values:

```typescript
await emailjs.send(
  'service_abc123',
  'template_xyz456',
  templateParams,
  'abc123xyz456'
);
```

## Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Troubleshooting

### Emails Not Arriving?
- ✓ Check all three IDs are correct
- ✓ Verify Gmail is connected in EmailJS
- ✓ Confirm recipient email is set to shubh05nagargoje@gmail.com
- ✓ Check spam folder
- ✓ Look at browser console for errors

### "User ID not found" Error?
- You're likely using the Private Key instead of Public Key
- Go to Account → General and copy the **Public Key**

### Rate Limit Exceeded?
- Free plan: 200 emails/month
- Consider upgrading if needed

## Security Notes

- ✅ Public Key is safe to expose in client-side code
- ✅ Never use the Private Key in frontend code
- ✅ EmailJS handles all authentication securely

## Testing Email Delivery

Send yourself a test message:
1. Fill out the form with your details
2. Submit the form
3. Check shubh05nagargoje@gmail.com inbox
4. Verify the email arrived with all the details

## Need More Help?

- **Full Setup Guide**: See `SETUP_GUIDE.md`
- **Quick Reference**: See `QUICK_START.md`
- **EmailJS Docs**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Your contact form is now configured to send emails directly to your Gmail!** 📧
