# Deployment Guide for Prajna Foundation Website

This document provides instructions for deploying the Prajna Foundation website to various hosting platforms.

## Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm
- Git

## Building for Production

To create a production build locally:

\`\`\`bash
# Install dependencies
npm install

# Build the project
npm run build

# Optional: Test the production build locally
npm start
\`\`\`

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is optimized for Next.js applications and provides the simplest deployment experience.

1. **Create a Vercel account** at [vercel.com](https://vercel.com) if you don't have one
2. **Install the Vercel CLI** (optional):
   \`\`\`bash
   npm install -g vercel
   \`\`\`
3. **Deploy using the Vercel dashboard**:
   - Connect your GitHub/GitLab/Bitbucket repository
   - Select the Prajna Foundation repository
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

4. **Or deploy using the CLI**:
   \`\`\`bash
   vercel
   \`\`\`

### Option 2: Netlify

1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Deploy using the Netlify dashboard**:
   - Connect your GitHub/GitLab/Bitbucket repository
   - Select the Prajna Foundation repository
   - Set build command to `npm run build`
   - Set publish directory to `.next` (or `out` if using static export)
   - Add environment variables if needed
   - Click "Deploy"

3. **Important**: For client-side routing to work properly, create a `_redirects` file in the `public` folder with:
   \`\`\`
   /*    /index.html   200
   \`\`\`

### Option 3: AWS Amplify

1. **Log in to AWS Management Console** and navigate to AWS Amplify
2. **Create a new app** and connect your repository
3. **Configure build settings**:
   - Build command: `npm run build`
   - Output directory: `.next` (or `out` if using static export)
4. **Add environment variables** if needed
5. **Click "Save and deploy"**

## Environment Variables

Set the following environment variables in your hosting platform:

- `NEXT_PUBLIC_SITE_URL`: The URL of your deployed site
- Add any other environment variables your application needs

## Post-Deployment Checks

After deployment, verify:

1. All pages load correctly
2. Images and assets are displayed properly
3. Forms and interactive elements work as expected
4. The site is responsive on different devices
5. Check for any console errors

## Troubleshooting

- **Missing images**: Ensure image domains are added to `next.config.mjs`
- **Routing issues**: Check that redirects are properly configured
- **API errors**: Verify environment variables are set correctly

## Maintenance

- Set up automatic deployments from your main branch
- Consider implementing a staging environment for testing changes before production
- Regularly update dependencies to maintain security and performance
