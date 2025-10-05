# KoiCareLanka - Sri Lanka's Premier Koi Community

A modern web platform connecting koi enthusiasts, breeders, and collectors across Sri Lanka. Built with Next.js 15, TypeScript, MongoDB, and NextAuth.js.

![KoiCareLanka](https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg)

## 🌟 Features

### For Users
- Browse premium koi varieties from verified breeders
- Search and filter koi by breed, size, price, and breeder
- Connect with Sri Lanka's koi community
- Access expert care guides and resources
- User authentication and profiles

### For Breeders
- Create and manage koi listings
- Build breeder profiles
- Connect with potential buyers
- Track inventory and sales

### For Admins
- Dashboard for content management
- User and breeder verification
- Community moderation
- Analytics and reporting

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js v5
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons, Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- MongoDB database (MongoDB Atlas or local instance)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dinna21/KoiLanka.git
   cd KoiLanka
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

   Update the following variables:
   ```env
   # MongoDB Connection String
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/koilanka?retryWrites=true&w=majority

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here

   # Optional: Admin Email
   ADMIN_EMAIL=admin@koilanka.com
   ```

   Generate a secure `NEXTAUTH_SECRET`:
   ```bash
   openssl rand -base64 32
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
KoiLanka/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # NextAuth endpoints
│   │   │   ├── koi/           # Koi CRUD operations
│   │   │   └── users/         # User management
│   │   ├── auth/              # Authentication pages
│   │   ├── shop/              # Shop page
│   │   ├── breeders/          # Breeders directory
│   │   ├── services/          # Services page
│   │   ├── community/         # Community features
│   │   ├── guides/            # Care guides
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── KoiVarieties.tsx
│   │   ├── WhyChooseUs.tsx
│   │   └── HomeServices.tsx
│   ├── data/                  # Static data
│   │   └── koiData.ts
│   ├── lib/                   # Utilities
│   │   ├── auth/              # Authentication config
│   │   └── mongodb.ts         # Database connection
│   └── models/                # Mongoose models
│       ├── User.ts
│       ├── Koi.ts
│       └── Post.ts
├── public/                    # Static assets
├── .env.local.example         # Environment variables template
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Project dependencies
```

## 🗄️ Database Schema

### User Model
```typescript
{
  name: string
  email: string (unique)
  password: string (hashed)
  role: 'user' | 'breeder' | 'admin'
  createdAt: Date
  updatedAt: Date
}
```

### Koi Model
```typescript
{
  name: string
  breed: string
  variety: string
  price: number
  size: string
  age: string
  breeder: ObjectId (ref: User)
  breederName: string
  image: string
  description: string
  available: boolean
  createdAt: Date
  updatedAt: Date
}
```

### Post Model
```typescript
{
  title: string
  content: string
  author: ObjectId (ref: User)
  authorName: string
  category: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js endpoints
- `POST /api/users` - User registration

### Koi Management
- `GET /api/koi` - List all koi (with filtering)
- `POST /api/koi` - Create new koi (requires breeder/admin role)

Query parameters for GET /api/koi:
- `breed` - Filter by breed
- `breeder` - Filter by breeder name
- `available` - Filter by availability (true/false)

## 🚢 Deployment

### Deploy to Vercel

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure environment variables

3. **Set Environment Variables**
   Add the following in Vercel dashboard:
   - `MONGODB_URI`
   - `NEXTAUTH_URL` (your production URL)
   - `NEXTAUTH_SECRET`

4. **Deploy**
   Vercel will automatically deploy on push to main branch

### Manual Build

```bash
npm run build
npm run start
```

## 🧪 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔧 Configuration

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Add a database user
4. Whitelist your IP address
5. Get your connection string
6. Replace `<username>`, `<password>`, and `<cluster>` in the connection string

### NextAuth Setup

NextAuth.js is configured for credential-based authentication. To add OAuth providers:

1. Install provider packages
2. Configure in `src/lib/auth/auth.config.ts`
3. Add provider credentials to `.env.local`

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Authentication Issues
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies and try again

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Koi imagery from [Pexels](https://www.pexels.com/)

## 📧 Contact

For questions or support, please contact:
- Email: info@koicarelanka.lk
- GitHub: [@dinna21](https://github.com/dinna21)

---

**Made with ❤️ for Sri Lanka's Koi Community**
