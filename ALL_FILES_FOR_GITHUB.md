# 📋 Complete File Contents for GitHub

Copy each file below into your GitHub repository using "Add file" → "Create new file"

Total files: 28

---

## 📁 ROOT CONFIGURATION FILES

### File 1: `package.json`

```json
{
  "name": "forma-attention",
  "version": "1.0.0",
  "description": "Behavioral Science Optimization Platform - BSOS Scoring System",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && prisma migrate deploy && next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "postinstall": "prisma generate"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mohamedali170683-dotcom/forma-attention.git"
  },
  "keywords": [
    "behavioral-science",
    "conversion-optimization",
    "bsos",
    "nextjs",
    "typescript",
    "prisma"
  ],
  "author": "mohamedali170683-dotcom",
  "license": "MIT",
  "dependencies": {
    "@prisma/client": "^6.19.0",
    "@radix-ui/react-slot": "^1.2.4",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.22",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.553.0",
    "next": "^16.0.3",
    "postcss": "^8.5.6",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "tailwind-merge": "^3.4.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.9.3"
  },
  "devDependencies": {
    "@types/node": "^24.10.1",
    "eslint": "^9.39.1",
    "eslint-config-next": "^16.0.3",
    "prisma": "^6.19.0"
  }
}
```

---

### File 2: `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;
```

---

### File 3: `tsconfig.json`

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

### File 4: `tailwind.config.ts`

(See above in the chat for this file's contents)

### File 5: `postcss.config.mjs`

(See above in the chat for this file's contents)

### File 6: `.gitignore`

(See above in the chat for this file's contents)

### File 7: `.env.example`

(See above in the chat for this file's contents)

### File 8: `README.md`

Use the README.md file already in your repository

---

## 📁 PRISMA FILES (Create these first!)

### File 9: `prisma/schema.prisma`

Create this file by pasting the content below...

---

