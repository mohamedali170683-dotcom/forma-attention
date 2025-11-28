# Forma & Attention

![Forma & Attention](https://img.shields.io/badge/BSOS-0--100-purple) ![Next.js](https://img.shields.io/badge/Next.js-16.0-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)

## 🧠 Behavioral Science Optimization Platform

**Want to improve conversions without doubling your ad spend?**  
We engineer persuasion, using proven behavioral science.

---

## 🚀 Quick Deploy (5 Minutes)

### Step 1: Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import this repository
3. Click "Deploy" (auto-detects Next.js)

### Step 2: Add Database
1. In Vercel dashboard → "Storage" tab
2. Click "Create Database" → "Postgres"
3. Vercel auto-adds `POSTGRES_PRISMA_URL`

### Step 3: Redeploy
1. Go to "Deployments" tab
2. Click "Redeploy" on latest deployment
3. Migrations run automatically

### Step 4: Launch! 🎉
Visit: `https://your-project.vercel.app/forma`

---

## ✨ Features

### 📊 BSOS Scoring System (0-100)
Quantifies behavioral science application across three channels:
- **Website/Blog** (0-33): Bias implementation, choice architecture, journey optimization
- **Social Media** (0-33): Content engagement, behavioral triggers, visual psychology
- **Paid Advertising** (0-34): Creative effectiveness, persuasion architecture, landing page alignment

### 📋 Interactive Assessment
- 4-step wizard interface
- 33 behavioral science metrics
- Slider-based input (0-3 points each)
- Contextual descriptions

### 📈 Beautiful Results Dashboard
- Overall BSOS score with visual gauge
- Component breakdowns with progress bars
- Color-coded performance indicators
- Up to 6 personalized recommendations
- Impact estimates and timelines

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS 3.4
- **UI**: Radix UI + Lucide Icons
- **Deployment**: Vercel (recommended)

---

## 🎯 What It Does

1. **Landing Page** (`/forma`)
   - Learn about behavioral science optimization
   - Understand the BSOS framework

2. **Assessment** (`/forma/assessment`)
   - Complete 4-step evaluation (5-10 minutes)
   - Rate 33 behavioral science metrics

3. **Results** (`/forma/results/[id]`)
   - View BSOS score (0-100)
   - Get personalized recommendations
   - Plan optimization strategy

---

## 🏃 Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your database URL
# POSTGRES_PRISMA_URL="postgresql://user:password@localhost:5432/forma"

# Run migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
Open http://localhost:3000/forma

🎓 Behavioral Science Framework
Based on proven psychological principles:

Core Principles
Social Proof (Cialdini): Testimonials, reviews, user counts
Choice Architecture (Thaler & Sunstein): Option design, defaults
Loss Aversion (Kahneman & Tversky): Risk and reward framing
Visual Psychology: Color, attention, hierarchy
Cognitive Biases: Systematic patterns in decision-making
Score Interpretation
75-100: Sophisticated behavioral design
50-74: Moderate application with opportunities
25-49: Limited behavioral science application
0-24: Minimal application with high potential
🔮 Future Enhancements
User authentication and dashboards
PDF export functionality
Historical tracking
Competitor benchmarking
AI-powered website analysis
A/B testing integration
🤝 Contributing
Contributions welcome! Please open an issue or submit a pull request.

📄 License
MIT License - see LICENSE file for details

🙏 Credits
Built with behavioral science principles from:

Robert Cialdini - Influence
Daniel Kahneman - Thinking, Fast and Slow
Richard Thaler & Cass Sunstein - Nudge
Ready to engineer persuasion? 🚀

Visit /forma to start optimizing your conversions with behavioral science.

Built with ❤️ using behavioral science and modern web technologies

