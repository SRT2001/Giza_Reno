# Decap CMS Setup Guide

## ✅ What Was Installed

Decap CMS has been successfully integrated into your Giza Renovation project using the **CDN approach** (no npm dependencies needed).

## 📁 Files Created

### CMS Core Files
- `/public/admin/index.html` - CMS interface
- `/public/admin/config.yml` - CMS configuration

### Content Directories
- `/content/projects/` - Project portfolio items
- `/content/testimonials/` - Client testimonials
- `/content/services/` - Service offerings
- `/content/pages/` - Static pages (About, etc.)
- `/content/settings/` - Site-wide settings
- `/public/images/uploads/` - Media uploads

### Sample Content
- `/content/pages/about.md` - Sample about page
- `/content/settings/general.yml` - Site settings

### Application Files
- `/client/pages/Admin.tsx` - Admin page component
- Updated `/client/App.tsx` - Added /admin route

## 🚀 How to Use

### Option 1: Local Development (Recommended)
```bash
# Terminal 1: Start the dev server
pnpm dev

# Terminal 2: Start the CMS proxy server
npx decap-server
```

Then visit: **http://localhost:8080/admin**

### Option 2: Combined Command
```bash
pnpm run dev:cms
```
This runs both servers simultaneously.

## 📝 CMS Features

### Collections Available:
1. **Projects** - Showcase your renovation work
   - Title, Description, Image, Category, Date, Body
   
2. **Testimonials** - Client feedback
   - Client Name, Project, Rating, Testimonial, Date
   
3. **Services** - Services you offer
   - Service Name, Icon, Description, Details
   
4. **Pages** - Static content pages
   - Title, Body (Markdown)
   
5. **Site Settings** - Global configuration
   - Site Title, Description, Email, Phone

## 🔧 Configuration

The CMS is configured for **local development** with:
- Backend: `test-repo` (for local testing)
- Local backend: Enabled
- Media folder: `public/images/uploads`

### To Deploy to Production:
1. Update `public/admin/config.yml`
2. Change `backend` from `test-repo` to `git-gateway`
3. Set up Netlify Identity or GitHub OAuth

## 📖 Documentation

- Official Docs: https://decapcms.org/docs/
- Configuration: https://decapcms.org/docs/configuration-options/

## ⚠️ Important Notes

- **Use pnpm** for package management (not npm)
- The CMS runs via CDN (no npm package needed)
- Content is stored in markdown/YAML files in `/content/`
- Media uploads go to `/public/images/uploads/`

## 🎯 Next Steps

1. Visit http://localhost:8080/admin to access the CMS
2. Create your first project, testimonial, or service
3. Customize the CMS configuration in `public/admin/config.yml`
4. Build out your content!
