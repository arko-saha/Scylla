# Google OAuth Setup Guide

## Overview
The Google Sign-In functionality has been implemented but requires configuration to work properly. Currently, the buttons will show but won't function until you complete the setup below.

## Setup Steps

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (or Google Identity API)

### 2. Configure OAuth Consent Screen
1. In the Google Cloud Console, go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name: "Scylla Talent Platform"
   - User support email: your email
   - Developer contact: your email
4. Add scopes: `email`, `profile`, `openid`
5. Add test users (your email addresses)

### 3. Create OAuth 2.0 Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:3000` (for local development)
   - `https://your-vercel-domain.vercel.app` (for production)
5. Copy the Client ID

### 4. Update the Code
Replace `YOUR_GOOGLE_CLIENT_ID` in both `login.html` and `signup.html` with your actual Client ID.

### 5. Test the Integration
1. Open the login or signup page
2. Click the "Sign in with Google" or "Sign up with Google" button
3. Complete the OAuth flow
4. You should be redirected back to the main page

## Current Implementation Features

### Login Page (`login.html`)
- ✅ Google OAuth integration
- ✅ Form validation
- ✅ Success/error messages
- ✅ User data storage in localStorage
- ✅ Automatic redirect after successful login

### Signup Page (`signup.html`)
- ✅ Google OAuth integration
- ✅ Role selection (Player, Scout, Admin)
- ✅ Form validation
- ✅ Success/error messages
- ✅ User data storage in localStorage
- ✅ Automatic redirect after successful signup

## Demo Mode
Currently, the regular email/password forms work in demo mode:
- They simulate successful authentication
- Store user data in localStorage
- Redirect to the main page
- Show appropriate success messages

## Security Notes
- This is a demo implementation using localStorage
- In production, implement proper backend authentication
- Use secure session management
- Validate tokens on the server side
- Implement proper user database storage

## Troubleshooting
- Check browser console for any JavaScript errors
- Ensure the Google Client ID is correctly configured
- Verify authorized domains in Google Cloud Console
- Check that the Google Identity API is enabled
