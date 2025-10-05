# Deployment Guide for KoiCareLanka

This guide will walk you through deploying KoiCareLanka to Vercel with MongoDB Atlas.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- MongoDB Atlas account (free tier is sufficient)

## Step 1: Set Up MongoDB Atlas

### 1.1 Create a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project called "KoiCareLanka"

### 1.2 Create a Database Cluster

1. Click "Build a Database"
2. Choose the **FREE** tier (M0 Sandbox)
3. Select a cloud provider and region (choose closest to your target users)
4. Name your cluster (e.g., "koilanka-cluster")
5. Click "Create"

### 1.3 Configure Database Access

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and strong password (save these!)
5. Select "Read and write to any database"
6. Click "Add User"

### 1.4 Configure Network Access

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
   - For production, you can restrict this later
4. Click "Confirm"

### 1.5 Get Your Connection String

1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your database user credentials
6. Replace `<dbname>` with `koilanka`

Example:
```
mongodb+srv://koiuser:yourpassword@koilanka-cluster.xxxxx.mongodb.net/koilanka?retryWrites=true&w=majority
```

## Step 2: Deploy to Vercel

### 2.1 Push Code to GitHub

Ensure your code is pushed to GitHub:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2.2 Import Project to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your KoiLanka repository
5. Click "Import"

### 2.3 Configure Project

Vercel will auto-detect Next.js. Configure:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)

### 2.4 Add Environment Variables

Click "Environment Variables" and add:

1. **MONGODB_URI**
   - Value: Your MongoDB Atlas connection string
   - Environment: Production, Preview, Development

2. **NEXTAUTH_URL**
   - Value: `https://your-project-name.vercel.app`
   - Environment: Production
   
   For Preview:
   - Value: `https://your-project-name-git-branch.vercel.app`
   - Environment: Preview

3. **NEXTAUTH_SECRET**
   - Generate a secure secret:
     ```bash
     openssl rand -base64 32
     ```
   - Value: The generated secret
   - Environment: Production, Preview, Development

4. **ADMIN_EMAIL** (optional)
   - Value: Your admin email
   - Environment: Production, Preview, Development

### 2.5 Deploy

1. Click "Deploy"
2. Wait for the build to complete (2-5 minutes)
3. Once deployed, you'll see a success message
4. Click "Visit" to see your live site!

## Step 3: Set Up Custom Domain (Optional)

### 3.1 Add Domain in Vercel

1. Go to your project settings in Vercel
2. Click "Domains"
3. Enter your custom domain (e.g., `koicarelanka.lk`)
4. Click "Add"

### 3.2 Configure DNS

Vercel will provide DNS records. Add these to your domain registrar:

For a root domain:
```
Type: A
Name: @
Value: 76.76.21.21
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3.3 Update NEXTAUTH_URL

Update your `NEXTAUTH_URL` environment variable to use your custom domain:
```
https://www.koicarelanka.lk
```

## Step 4: Post-Deployment

### 4.1 Test Your Deployment

1. Visit your deployed site
2. Test all pages and features
3. Try creating an account
4. Test authentication
5. Browse the shop page

### 4.2 Monitor Performance

In Vercel dashboard:
- Check Analytics tab for visitor stats
- Monitor build times
- Review deployment logs
- Set up error tracking

### 4.3 Set Up Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

No additional configuration needed!

## Troubleshooting

### Issue: "MongoDB connection failed"

**Solution:**
- Verify your connection string is correct
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure database user has correct permissions

### Issue: "NextAuth configuration error"

**Solution:**
- Verify `NEXTAUTH_URL` matches your deployment URL
- Ensure `NEXTAUTH_SECRET` is set
- Check if all environment variables are in the correct environment (Production/Preview)

### Issue: "Build failed"

**Solution:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`
- Check for TypeScript errors

### Issue: "Images not loading"

**Solution:**
- Verify external image domains are configured in `next.config.ts`
- Check if images exist and are accessible
- Review Next.js Image optimization settings

### Issue: "Slow page loads"

**Solution:**
- Enable Vercel Analytics to identify bottlenecks
- Optimize images with next/image
- Review MongoDB queries for efficiency
- Consider adding caching

## Environment-Specific Tips

### Development
```env
NEXTAUTH_URL=http://localhost:3000
```

### Staging/Preview
```env
NEXTAUTH_URL=https://koilanka-git-staging.vercel.app
```

### Production
```env
NEXTAUTH_URL=https://www.koicarelanka.lk
```

## Security Best Practices

1. **Never commit `.env.local`** to git
2. **Rotate secrets** periodically
3. **Use strong passwords** for MongoDB
4. **Enable 2FA** on Vercel and MongoDB Atlas
5. **Review MongoDB access logs** regularly
6. **Keep dependencies updated**: `npm update`

## Updating Your Deployment

To deploy updates:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will automatically rebuild and deploy!

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find a previous working deployment
4. Click "⋯" menu
5. Select "Promote to Production"

## Support

If you need help:
- Check Vercel documentation: https://vercel.com/docs
- MongoDB Atlas docs: https://docs.atlas.mongodb.com/
- Open an issue on GitHub
- Contact: info@koicarelanka.lk

---

**Congratulations!** 🎉 Your KoiCareLanka site is now live and serving Sri Lanka's koi community!
