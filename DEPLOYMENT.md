# Forma & Attention - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Complete Forma & Attention BSOS Platform"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js configuration
4. Click "Deploy"

### Step 3: Add PostgreSQL Database
1. In your Vercel project dashboard, go to the "Storage" tab
2. Click "Create Database" → Select "Postgres"
3. Follow the prompts to create the database
4. Vercel automatically adds `POSTGRES_PRISMA_URL` to your environment variables

### Step 4: Redeploy
1. Go to the "Deployments" tab
2. Click "Redeploy" on your latest deployment
3. Database migrations will run automatically via the build script
4. Your app will be live at `https://your-project.vercel.app/forma`

---

## 🏗️ Local Development Setup

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or remote)

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your database URL:
   ```
   POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/forma"
   ```

3. **Run database migrations**
   ```bash
   npx prisma migrate deploy
   ```

4. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000/forma](http://localhost:3000/forma)

---

## 📁 Project Structure

```
/workspace
├── app/
│   ├── api/
│   │   └── assessment/
│   │       └── route.ts              # API endpoints for saving/retrieving assessments
│   ├── forma/
│   │   ├── assessment/
│   │   │   └── page.tsx              # 4-step assessment wizard
│   │   ├── results/
│   │   │   └── [id]/
│   │   │       ├── page.tsx          # Results display page
│   │   │       └── not-found.tsx     # 404 page
│   │   └── page.tsx                  # Landing page
│   ├── globals.css                   # Global styles & Tailwind
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Root redirect to /forma
├── components/
│   └── ui/
│       ├── button.tsx                # Button component
│       ├── card.tsx                  # Card components
│       ├── progress.tsx              # Progress bar
│       └── slider.tsx                # Slider input
├── lib/
│   ├── assessment-data.ts            # 33 assessment questions
│   ├── prisma.ts                     # Prisma client setup
│   ├── scoring.ts                    # Scoring & recommendation logic
│   └── utils.ts                      # Utility functions
├── prisma/
│   ├── schema.prisma                 # Database schema
│   └── migrations/                   # Database migrations
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies & scripts
├── postcss.config.mjs                # PostCSS configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation
```

---

## 🧪 Testing the Application

### Test Flow
1. Visit landing page: `/forma`
2. Click "Start Free Assessment"
3. Complete 4-step wizard:
   - Step 1: Company info (optional)
   - Step 2: Website/Blog questions (11 questions)
   - Step 3: Social Media questions (11 questions)
   - Step 4: Paid Advertising questions (11 questions)
4. Submit and view results
5. Results page shows:
   - Overall BSOS score (0-100)
   - Channel breakdowns (Website, Social, Ads)
   - Score interpretation
   - Up to 6 personalized recommendations

---

## 🔧 Troubleshooting

### Build Errors

**Error: Prisma Client not generated**
```bash
npx prisma generate
```

**Error: Database connection failed**
- Check your `POSTGRES_PRISMA_URL` in `.env`
- Ensure PostgreSQL is running
- Verify database credentials

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vercel Deployment Issues

**Database migrations not running**
- Check build logs in Vercel dashboard
- Ensure `POSTGRES_PRISMA_URL` is set in Vercel environment variables
- Try manual redeploy

**Build fails on Vercel**
- Check that all dependencies are in `package.json`
- Verify `next.config.mjs` is properly configured
- Review build logs for specific errors

---

## 📊 Database Schema

```prisma
model Assessment {
  id            String   @id @default(cuid())
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  totalScore    Int      // 0-100
  websiteScore  Int      // 0-33
  socialScore   Int      // 0-33
  adScore       Int      // 0-34
  responses     Json     // Raw question responses
  companyName   String?
  email         String?
  industry      String?
}
```

---

## 🎯 Key Features Implemented

✅ Landing page with BSOS explanation
✅ 4-step assessment wizard with 33 questions
✅ Real-time slider input with visual feedback
✅ PostgreSQL database with Prisma ORM
✅ Score calculation (0-100 scale)
✅ Channel breakdowns (Website, Social, Ads)
✅ Personalized recommendations (up to 6)
✅ Results page with detailed insights
✅ Responsive design with Tailwind CSS
✅ Beautiful UI with Radix components
✅ TypeScript for type safety
✅ Next.js 16 App Router architecture

---

## 🔐 Environment Variables

Required:
- `POSTGRES_PRISMA_URL` - PostgreSQL connection string

Optional:
- `NODE_ENV` - Set to "production" for production builds

---

## 📈 Future Enhancements

Ideas for extending the platform:
- [ ] User authentication (NextAuth.js)
- [ ] PDF export of results
- [ ] Email delivery of results
- [ ] Historical tracking dashboard
- [ ] Competitor benchmarking
- [ ] AI-powered website analysis
- [ ] A/B testing integration
- [ ] Team collaboration features
- [ ] Custom branding for agencies

---

## 🤝 Support

For issues or questions:
1. Check this deployment guide
2. Review the README.md
3. Check Vercel deployment logs
4. Verify database connection
5. Ensure all environment variables are set

---

## ✅ Deployment Checklist

Before going live:
- [ ] All code committed to git
- [ ] Environment variables configured
- [ ] Database created and migrated
- [ ] Build succeeds locally
- [ ] All pages load correctly
- [ ] Assessment flow works end-to-end
- [ ] Results page displays properly
- [ ] Mobile responsive design verified
- [ ] Performance optimized (Lighthouse score)
- [ ] Error handling tested

---

Built with ❤️ using Next.js, TypeScript, Prisma, and Tailwind CSS
