// Assessment questions and categories for BSOS scoring

export interface Question {
  id: string;
  category: string;
  channel: "website" | "social" | "ads";
  text: string;
  description: string;
  maxScore: number;
}

export const assessmentQuestions: Question[] = [
  // Website/Blog Questions (11 questions, 3 points each = 33 points max)
  {
    id: "web_social_proof",
    category: "Social Proof",
    channel: "website",
    text: "Social Proof Implementation",
    description: "Do you display customer testimonials, reviews, case studies, or user counts prominently?",
    maxScore: 3,
  },
  {
    id: "web_trust_signals",
    category: "Trust Signals",
    channel: "website",
    text: "Trust & Authority Signals",
    description: "Do you showcase certifications, awards, press mentions, or expert endorsements?",
    maxScore: 3,
  },
  {
    id: "web_urgency",
    category: "Urgency & Scarcity",
    channel: "website",
    text: "Urgency and Scarcity",
    description: "Do you use limited-time offers, stock indicators, or countdown timers effectively?",
    maxScore: 3,
  },
  {
    id: "web_choice_architecture",
    category: "Choice Architecture",
    channel: "website",
    text: "Choice Architecture",
    description: "Are your pricing tiers, product options, and CTAs strategically designed with clear defaults?",
    maxScore: 3,
  },
  {
    id: "web_loss_aversion",
    category: "Loss Aversion",
    channel: "website",
    text: "Loss Aversion Framing",
    description: "Do you frame benefits in terms of what customers might lose rather than gain?",
    maxScore: 3,
  },
  {
    id: "web_visual_hierarchy",
    category: "Visual Psychology",
    channel: "website",
    text: "Visual Hierarchy",
    description: "Is your design using color, contrast, and whitespace to guide attention effectively?",
    maxScore: 3,
  },
  {
    id: "web_reciprocity",
    category: "Reciprocity",
    channel: "website",
    text: "Reciprocity Triggers",
    description: "Do you offer free value (guides, tools, trials) before asking for commitment?",
    maxScore: 3,
  },
  {
    id: "web_consistency",
    category: "Consistency",
    channel: "website",
    text: "Consistency & Commitment",
    description: "Do you use micro-commitments (email signup, quiz, preferences) before the main ask?",
    maxScore: 3,
  },
  {
    id: "web_anchoring",
    category: "Anchoring",
    channel: "website",
    text: "Price Anchoring",
    description: "Do you strategically display higher prices first or show original vs. discounted prices?",
    maxScore: 3,
  },
  {
    id: "web_friction_reduction",
    category: "Friction Reduction",
    channel: "website",
    text: "Friction Reduction",
    description: "Have you minimized form fields, steps, and cognitive load in your conversion funnel?",
    maxScore: 3,
  },
  {
    id: "web_progress_indicators",
    category: "Progress Tracking",
    channel: "website",
    text: "Progress Indicators",
    description: "Do you show progress bars, step numbers, or completion percentages in multi-step processes?",
    maxScore: 3,
  },

  // Social Media Questions (11 questions, 3 points each = 33 points max)
  {
    id: "social_engagement_triggers",
    category: "Engagement",
    channel: "social",
    text: "Engagement Triggers",
    description: "Do you use questions, polls, and interactive content to boost engagement?",
    maxScore: 3,
  },
  {
    id: "social_storytelling",
    category: "Storytelling",
    channel: "social",
    text: "Narrative & Storytelling",
    description: "Do you use compelling stories, customer journeys, and emotional narratives?",
    maxScore: 3,
  },
  {
    id: "social_social_proof",
    category: "Social Proof",
    channel: "social",
    text: "User-Generated Content",
    description: "Do you showcase customer photos, reviews, testimonials, and success stories?",
    maxScore: 3,
  },
  {
    id: "social_authority",
    category: "Authority",
    channel: "social",
    text: "Authority Positioning",
    description: "Do you share expertise, insights, and thought leadership content?",
    maxScore: 3,
  },
  {
    id: "social_consistency",
    category: "Consistency",
    channel: "social",
    text: "Posting Consistency",
    description: "Do you maintain a consistent posting schedule and brand voice?",
    maxScore: 3,
  },
  {
    id: "social_visual_appeal",
    category: "Visual Psychology",
    channel: "social",
    text: "Visual Appeal",
    description: "Are your visuals attention-grabbing, on-brand, and optimized for each platform?",
    maxScore: 3,
  },
  {
    id: "social_fomo",
    category: "FOMO",
    channel: "social",
    text: "FOMO Creation",
    description: "Do you create fear of missing out through exclusive offers, limited spots, or trending content?",
    maxScore: 3,
  },
  {
    id: "social_community",
    category: "Community",
    channel: "social",
    text: "Community Building",
    description: "Do you foster a sense of belonging and encourage user interaction and community?",
    maxScore: 3,
  },
  {
    id: "social_cta_clarity",
    category: "Calls to Action",
    channel: "social",
    text: "Clear CTAs",
    description: "Are your calls-to-action clear, compelling, and easy to act on?",
    maxScore: 3,
  },
  {
    id: "social_timing",
    category: "Timing",
    channel: "social",
    text: "Strategic Timing",
    description: "Do you post at optimal times based on audience analytics and platform algorithms?",
    maxScore: 3,
  },
  {
    id: "social_emotional_triggers",
    category: "Emotional Triggers",
    channel: "social",
    text: "Emotional Resonance",
    description: "Do your posts trigger strong emotions (joy, curiosity, inspiration, urgency)?",
    maxScore: 3,
  },

  // Paid Advertising Questions (11 questions, ~3.09 points each ≈ 34 points max)
  {
    id: "ads_headline_hooks",
    category: "Ad Creative",
    channel: "ads",
    text: "Headline Hooks",
    description: "Do your ad headlines use proven psychological triggers (curiosity, benefit, urgency)?",
    maxScore: 3,
  },
  {
    id: "ads_visual_attention",
    category: "Visual Design",
    channel: "ads",
    text: "Attention-Grabbing Visuals",
    description: "Do your ad visuals stop the scroll and direct attention to key elements?",
    maxScore: 3,
  },
  {
    id: "ads_social_proof",
    category: "Social Proof",
    channel: "ads",
    text: "Social Proof in Ads",
    description: "Do you include testimonials, ratings, user counts, or endorsements in ads?",
    maxScore: 3,
  },
  {
    id: "ads_benefit_clarity",
    category: "Value Proposition",
    channel: "ads",
    text: "Benefit Clarity",
    description: "Is your unique value proposition instantly clear and compelling?",
    maxScore: 3,
  },
  {
    id: "ads_urgency_scarcity",
    category: "Urgency",
    channel: "ads",
    text: "Urgency & Scarcity",
    description: "Do you use time-limited offers, exclusive access, or limited availability?",
    maxScore: 3,
  },
  {
    id: "ads_cta_strength",
    category: "Call to Action",
    channel: "ads",
    text: "CTA Effectiveness",
    description: "Are your CTAs action-oriented, specific, and create urgency?",
    maxScore: 3,
  },
  {
    id: "ads_targeting",
    category: "Targeting",
    channel: "ads",
    text: "Audience Targeting",
    description: "Are you using behavioral and psychographic targeting (not just demographics)?",
    maxScore: 3,
  },
  {
    id: "ads_landing_congruence",
    category: "Message Match",
    channel: "ads",
    text: "Ad-to-Landing Page Congruence",
    description: "Does your landing page match the ad's promise, visuals, and messaging?",
    maxScore: 3,
  },
  {
    id: "ads_landing_friction",
    category: "Landing Page",
    channel: "ads",
    text: "Landing Page Optimization",
    description: "Is your landing page optimized with minimal friction, clear path to conversion?",
    maxScore: 4,
  },
  {
    id: "ads_testing",
    category: "Testing",
    channel: "ads",
    text: "A/B Testing",
    description: "Do you systematically test headlines, visuals, and CTAs based on behavioral principles?",
    maxScore: 3,
  },
  {
    id: "ads_retargeting",
    category: "Retargeting",
    channel: "ads",
    text: "Behavioral Retargeting",
    description: "Do you use strategic retargeting with different messages for different behavior segments?",
    maxScore: 3,
  },
];

// Calculate total possible scores
export const maxScores = {
  website: assessmentQuestions
    .filter((q) => q.channel === "website")
    .reduce((sum, q) => sum + q.maxScore, 0),
  social: assessmentQuestions
    .filter((q) => q.channel === "social")
    .reduce((sum, q) => sum + q.maxScore, 0),
  ads: assessmentQuestions
    .filter((q) => q.channel === "ads")
    .reduce((sum, q) => sum + q.maxScore, 0),
};

export const totalMaxScore = maxScores.website + maxScores.social + maxScores.ads;
