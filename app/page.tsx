import { getSiteMeta } from "@/lib/content";
import { SiteNav } from "@/components/molecules";
import {
  Footer,
  HomeHero,
  WhatWeDoSection,
  VisionMissionSection,
  ChallengeApproachSection,
  WhyUsSection,
  SolutionsTabsSection,
  InnovationSection,
  FoundersSection,
  FinalCtaSection,
} from "@/components/organisms";

export default async function HomePage() {
  const site = await getSiteMeta();

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} activeHref="/" floating />
      
      <main>
        {/* 1. HERO */}
        <HomeHero
          title={`From Soil\nto Skin`}
          description="Steroid-free herbal topical solutions for skin and orthopedic care, developed through R&D at Biologic Products Pvt.Ltd."
          primaryCta={{ label: "Explore Solutions", href: "/#solutions" }}
        />

        {/* 2. WHAT WE DO */}
        <WhatWeDoSection
          eyebrow="What We Do"
          title="We support healing and pain relief for a broad range of skin and orthopedic conditions through our nonsteroidal phytomedicines."
          cards={[
            { title: "Sustainable Agriculture", summary: "Soil regeneration, crop resilience, and plant conservation." },
            { title: "Environmental Bioremediation", summary: "Restoring ecosystems through biodegradable biological systems." },
            { title: "Herbal Therapeutics & Skin Care", summary: "Topical, steroid-free, herbal medicines for chronic conditions." },
            { title: "Plant Conservation & Tissue Culture", summary: "Endangered species preservation via proprietary tissue culture." },
            { title: "Nutraceuticals & Food Technology", summary: "Nutraceuticals and clean-label functional foods." },
            { title: "Orthopedic Support", summary: "Condition-specific product systems for orthopedic care." }
          ]}
        />

        {/* 3. VISION & MISSION */}
        <VisionMissionSection
          visionEyebrow="Our Vision"
          visionTitle="We visualise a world where safe,effective, steroid-free herbal topical care supports relief and healing in skin and orthopedic conditions."
          missionEyebrow="Our Mission"
          missions={[
            "Develop scalable biologic solutions.",
            "Replace chemical-based systems with eco-safe alternatives.",
            "Translate research into real-world applications.",
            "Promote long-term ecological and human well-being."
          ]}
        />

        {/* 4. CHALLENGE vs APPROACH */}
        <ChallengeApproachSection
          title="Challenge vs. Approach"
          challengeIntro="The Challenge: Rising prevalence of chronic skin and musculoskeletal conditions, with growing concerns around side effects of existing treatments."
          challenges={[
            { number: "1", title: "Soil Degradation", summary: "Soil degradation from chemical agriculture." },
            { number: "2", title: "Chronic Skin Diseases", summary: "Rising chronic skin diseases and disorders." },
            { number: "3", title: "Pollution", summary: "Environmental pollution and ecosystem imbalance." },
            { number: "4", title: "Chemical Dependency", summary: "Chemical dependency in food and healthcare." }
          ]}
          approachIntro="Our Approach: Safe and efficacious phytotherapeutics for skin care"
          approaches={[
            { number: "1", title: "Plant Based Formulations", summary: "Plant based, biodegradable formulation." },
            { number: "2", title: "Ecosystem Compatible Technologies", summary: "Non-toxic, ecosystem-compatible technologies." },
            { number: "3", title: "Herbal Skincare", summary: "Topical, Herbal, Steroid-free formulations for skincare." },
            { number: "4", title: "Biotechnology Integration", summary: "Cross-domain biotechnology integration." }
          ]}
        />

        {/* 5. WHY US */}
        <WhyUsSection
          eyebrow="Why BioLogic Products Pvt. Ltd."
          title="Six Reasons We Are Different"
          cards={[
            { title: "Steroid-free skincare products", summary: "Ayurveda-inspired steroid-free skin care formulations." },
            { title: "Plant-based Technology", summary: "100% Plant based technology platform." },
            { title: "Beliefs & Values", summary: "Rooted in a zero-synthetic philosophy." },
            { title: "R&D Foundation", summary: "Strong R&D foundation of 20+ years." },
            { title: "Sustainable & Scalable", summary: "Built for sustainability & scalabilty." },
            { title: "Multi sector integration", summary: "Integrated multi-domain innovation platform." }
          ]}
        />

        {/* 6. SOLUTIONS PORTFOLIO */}
        <SolutionsTabsSection
          eyebrow="OUR SOLUTIONS"
          title="A glimpse into our comprehensive biological portfolio for healthcare solutions."
          description="From skincare to orthopedic care, the CMS can grow each route without changing the section system."
          tabs={[
            {
              label: "Psoriasis & Ringworm",
              title: "Skincare & Herbal Cosmetic",
              summary: "Regenerative microbial structures for soil synthesis and carbon capture.",
              bullets: ["Metabolic Rhizosphere Optimization", "Micro-vascular Nutrient Delivery", "Bio-potentiated Carbon Sequestration"]
            },
            {
              label: "Dermatitis",
              title: "Dermatitis Care",
              summary: "Herbal support systems for dermatitis and chronic skin comfort.",
              bullets: ["Steroid-free care", "Plant-based support", "CMS-managed routing"]
            },
            {
              label: "Geriatric Care",
              title: "Geriatric Care",
              summary: "Condition-specific herbal care for older adults.",
              bullets: ["Gentle topical use", "Long-term suitability", "Reusable landing page content"]
            },
            {
              label: "Orthopedic",
              title: "Orthopedic Care",
              summary: "Safe and scalable orthopedic support built into the content system.",
              bullets: ["Back and knee care", "Neck and cervical support", "New routes without dev work"]
            },
            {
              label: "Persons with Disability",
              title: "Accessibility-led Support",
              summary: "Page structures and products that can expand to accessibility-focused care.",
              bullets: ["Supportive routes", "Editorially reusable content", "Template-based scaling"]
            },
            {
              label: "Sports-related",
              title: "Sports Related Care",
              summary: "Recovery and motion support for athletes and active users.",
              bullets: ["Reusability across campaigns", "Condition-specific messaging", "Non-steroidal positioning"]
            }
          ]}
        />

        {/* 7. INNOVATION */}
        <InnovationSection
          eyebrow="INNOVATION & PIPELINE"
          title="A glimpse into our comprehensive biological innovation and pipeline."
          cards={[
            { title: "Patented Technologies", summary: "Patented and patent-filed technologies across multiple domains." },
            { title: "Scalable Domains", summary: "Scalable multi-domain product platforms." },
            { title: "R&D Implementation", summary: "Strong R&D-to-implementation pipeline." }
          ]}
        />

        {/* 8. FOUNDERS */}
        <FoundersSection
          eyebrow="OUR FOUNDERS"
          title="Meet our founders with science driven leadership and strong execution capabilities."
          members={[
            { initials: "SB", name: "Dr. Sonali Bhawsar", role: "PhD Microbiology", summary: "Scientific leadership for the biologic care system." },
            { initials: "DB", name: "Mr. Devdatta Bhawsar", role: "Mechanical Engineer & Technologist", summary: "Execution leadership and scalable systems." },
            { initials: "SiB", name: "Mr. Siddharth Bhawsar", role: "Biotech Engineer & Investment banking specialist", summary: "Bridging biotech execution and growth strategy." }
          ]}
        />

        {/* 9. FINAL CTA */}
        <FinalCtaSection
          title={`Building Tomorrow's Biologic\nSystems Together.`}
          description="We invite collaborations and partnerships across:"
          tags={[
            "Strategic Partnerships",
            "CLINICAL COLLABORATIONS",
            "DISTRIBUTION ALLIANCES",
            "GROWTH CAPITAL"
          ]}
          primaryCta={{ label: "Partner With Us", href: "/#footer" }}
        />
      </main>

      <Footer {...site.footer} id="footer" />
    </>
  );
}
