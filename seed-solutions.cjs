const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'content', 'solutions');
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

const data = [
  {
    slug: "psoriasis-ringworm",
    label: "Psoriasis & Ringworm",
    title: "Skincare & Herbal Cosmetic",
    summary: "Regenerative microbial structures for soil synthesis and carbon capture.",
    description: "Detailed topical solution for specific conditions.",
    bullets: [
      "Metabolic Rhizosphere Optimization",
      "Micro-vascular Nutrient Delivery",
      "Bio-potentiated Carbon Sequestration"
    ],
    featured: true
  },
  {
    slug: "dermatitis",
    label: "Dermatitis",
    title: "Dermatitis Care",
    summary: "Herbal support systems for dermatitis and chronic skin comfort.",
    description: "Targeted therapeutic protocols.",
    bullets: [
      "Steroid-free care",
      "Plant-based support",
      "CMS-managed routing"
    ],
    featured: true
  },
  {
    slug: "geriatric-care",
    label: "Geriatric Care",
    title: "Geriatric Care",
    summary: "Condition-specific herbal care for older adults.",
    description: "Focus on sensitive and aged epidermal layer management.",
    bullets: [
      "Gentle topical use",
      "Long-term suitability",
      "Reusable landing page content"
    ],
    featured: true
  },
  {
    slug: "orthopedic",
    label: "Orthopedic",
    title: "Orthopedic Care",
    summary: "Safe and scalable orthopedic support built into the content system.",
    description: "Advanced formulation for musculoskeletal relief.",
    bullets: [
      "Back and knee care",
      "Neck and cervical support",
      "New routes without dev work"
    ],
    featured: true
  },
  {
    slug: "persons-with-disability",
    label: "Persons with Disability",
    title: "Accessibility-led Support",
    summary: "Page structures and products that can expand to accessibility-focused care.",
    description: "Scalable, convenient systems for patient daily routines.",
    bullets: [
      "Supportive routes",
      "Editorially reusable content",
      "Template-based scaling"
    ],
    featured: true
  },
  {
    slug: "sports-related",
    label: "Sports-related",
    title: "Sports Related Care",
    summary: "Recovery and motion support for athletes and active users.",
    description: "Optimized for high performance rehabilitation cycles.",
    bullets: [
      "Reusability across campaigns",
      "Condition-specific messaging",
      "Non-steroidal positioning"
    ],
    featured: true
  }
];

data.forEach(item => {
  const target = path.join(baseDir, `${item.slug}.json`);
  fs.writeFileSync(target, JSON.stringify(item, null, 2), 'utf8');
});
console.log("Successfully generated 6 solution items!");
