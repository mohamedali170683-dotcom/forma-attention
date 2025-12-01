# 🚀 Quick Start Guide

## Forma & Attention - Behavioral Science Optimization Platform

---

## ⚡ Fastest Way to Deploy (5 minutes)

### Option A: Deploy to Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit - Forma & Attention platform"
git push origin main

# 2. Go to vercel.com/new and import your repo
# 3. Add Vercel Postgres database in dashboard
# 4. Redeploy - Done! 🎉
```

Your app will be live at: `https://your-project.vercel.app/forma`

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env and add your PostgreSQL URL

# 3. Setup database
npx prisma migrate deploy
npx prisma generate

# 4. Start dev server
npm run dev

# 5. Open http://localhost:3000/forma
```

---

## 📋 What You Get

### 🌐 Three Main Pages

1. **Landing Page** (`/forma`)
   - Explains BSOS scoring system
   - Shows how it works
   - CTA to start assessment

2. **Assessment** (`/forma/assessment`)
   - 4-step wizard
   - 33 behavioral science questions
   - Takes 5-10 minutes

3. **Results** (`/forma/results/[id]`)
   - BSOS score (0-100)
   - Channel breakdowns
   - Personalized recommendations

---

## 🎯 User Journey

```
Landing Page → Start Assessment → Step 1 (Info) → 
Step 2 (Website) → Step 3 (Social) → Step 4 (Ads) → 
Submit → View Results
```

---

## 🔧 Environment Variables

**Required:**
```env
POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/forma"
```

For Vercel: This is automatically set when you add Vercel Postgres.

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `app/forma/page.tsx` | Landing page |
| `app/forma/assessment/page.tsx` | Assessment wizard |
| `app/forma/results/[id]/page.tsx` | Results display |
| `app/api/assessment/route.ts` | API endpoints |
| `lib/assessment-data.ts` | 33 questions |
| `lib/scoring.ts` | Scoring engine |
| `prisma/schema.prisma` | Database schema |

---

## 🧪 Test It Works

1. Visit landing page
2. Click "Start Free Assessment"
3. Fill in company info (optional)
4. Answer all questions in 3 steps
5. Submit and view results
6. Check that:
   - Score displays correctly (0-100)
   - Channel breakdowns show
   - Recommendations appear
   - URL is shareable

---

## 🐛 Troubleshooting

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: Prisma Client not generated**
```bash
npx prisma generate
```

**Error: Database connection failed**
- Check `POSTGRES_PRISMA_URL` in `.env`
- Ensure PostgreSQL is running
- Verify database credentials

---

## 📖 Full Documentation

- **README.md** - Project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **PROJECT_SUMMARY.md** - Complete feature list
- **COMPLETION_REPORT.md** - Implementation details

---

## ✅ Pre-Launch Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Database URL configured
- [ ] Migrations applied (`npx prisma migrate deploy`)
- [ ] Prisma client generated (`npx prisma generate`)
- [ ] Dev server starts (`npm run dev`)
- [ ] Landing page loads
- [ ] Assessment flow works
- [ ] Results page displays
- [ ] Mobile responsive tested

---

## 🎉 You're Ready!

The platform is production-ready. Just deploy and start collecting BSOS assessments!

**Next Steps:**
1. Customize branding if needed
2. Deploy to Vercel
3. Share the `/forma` URL
4. Start getting assessments

---

**Need help?** Check the detailed guides in:
- `DEPLOYMENT.md` for deployment issues
- `PROJECT_SUMMARY.md` for features
- `README.md` for overview

Built with Next.js, TypeScript, Prisma, and Tailwind CSS ⚡
