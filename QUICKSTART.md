# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Vercel account (optional for deployment)

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32
```

### 3. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000

## Production Deployment (Vercel)

### 1. Push to GitHub
```bash
git push origin main
```

### 2. Import to Vercel
1. Go to vercel.com
2. Import your repository
3. Add environment variables:
   - MONGODB_URI
   - NEXTAUTH_URL (your domain)
   - NEXTAUTH_SECRET

### 3. Deploy
Click "Deploy" - Done! 🎉

## MongoDB Atlas Setup

1. Create free account at mongodb.com/atlas
2. Create new cluster (FREE M0)
3. Create database user
4. Whitelist IP (0.0.0.0/0 for dev)
5. Get connection string
6. Add to .env.local

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/              # Pages & API routes
├── components/       # React components
├── data/            # Static data
├── lib/             # Utilities
└── models/          # Database models
```

## Key Features

✅ Next.js 15 with App Router
✅ TypeScript
✅ MongoDB + Mongoose
✅ NextAuth.js authentication
✅ Tailwind CSS styling
✅ Responsive design
✅ API routes

## Documentation

- 📖 [README.md](README.md) - Full documentation
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guide
- 📊 [MIGRATION_SUMMARY.md](MIGRATION_SUMMARY.md) - Technical details

## Troubleshooting

**MongoDB Connection Error?**
- Check MONGODB_URI is correct
- Verify IP whitelist in Atlas
- Ensure database user exists

**Build Errors?**
- Run `npm install` again
- Delete `.next` folder
- Check TypeScript errors

**Auth Not Working?**
- Verify NEXTAUTH_URL matches domain
- Check NEXTAUTH_SECRET is set
- Clear browser cookies

## Support

📧 Email: info@koicarelanka.lk
🐛 Issues: [GitHub Issues](https://github.com/dinna21/KoiLanka/issues)
💬 Discussions: [GitHub Discussions](https://github.com/dinna21/KoiLanka/discussions)

---

**Status:** ✅ Production Ready
**Version:** 1.0.0
**Made with ❤️ for Sri Lanka's Koi Community** 🐟
