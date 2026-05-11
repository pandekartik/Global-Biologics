import { getHomePage, getSiteMeta, getSolutions, getTeam } from "@/lib/content";
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
  const [site, homeData, solutions, team] = await Promise.all([
    getSiteMeta(),
    getHomePage(),
    getSolutions(),
    getTeam()
  ]);

  // Find sections efficiently by type from home.json layout if we want fine-grained fallback,
  // or keep existing fine-grained template rendering but pull variables from them.
  const sections: any = {};
  homeData.sections.forEach((s: any) => {
    sections[s.type] = s;
  });

  // Map Solutions collection to valid Tab structure
  const solutionTabs = solutions.map(s => ({
    label: s.label || s.title,
    title: s.title,
    summary: s.summary,
    bullets: s.bullets || [s.description] // Fallback to description if bullets empty
  }));

  // Map Team to founder model
  const founders = team.map(member => {
    const nameParts = member.name.split(" ");
    const initials = nameParts.map(n => n[0]).join("").toUpperCase().substring(0, 3);
    return {
      initials,
      name: member.name,
      role: member.role,
      summary: member.summary
    };
  });

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} activeHref="/" floating />
      
      <main>
        {/* 1. HERO */}
        <HomeHero
          title={sections["hero"]?.title || `From Soil\nto Skin`}
          description={sections["hero"]?.description || "Steroid-free herbal topical solutions for skin and orthopedic care, developed through R&D at Biologic Products Pvt.Ltd."}
          primaryCta={sections["hero"]?.primaryCta || { label: "Explore Solutions", href: "/#solutions" }}
        />

        {/* 2. WHAT WE DO */}
        <WhatWeDoSection
          eyebrow={sections["what-we-do"]?.eyebrow || "What We Do"}
          title={sections["what-we-do"]?.title || "We support healing and pain relief for a broad range of skin and orthopedic conditions through our nonsteroidal phytomedicines."}
          cards={sections["what-we-do"]?.cards || []}
        />

        {/* 3. VISION & MISSION */}
        <VisionMissionSection
          visionEyebrow={sections["vision-mission"]?.visionEyebrow || "Our Vision"}
          visionTitle={sections["vision-mission"]?.visionTitle || "We visualise a world where safe,effective, steroid-free herbal topical care supports relief and healing in skin and orthopedic conditions."}
          missionEyebrow={sections["vision-mission"]?.missionEyebrow || "Our Mission"}
          missions={sections["vision-mission"]?.missions || []}
        />

        {/* 4. CHALLENGE vs APPROACH */}
        <ChallengeApproachSection
          title={sections["challenge-approach"]?.title || "Challenge vs. Approach"}
          challengeIntro={sections["challenge-approach"]?.challengeIntro || "The Challenge: ..."}
          challenges={sections["challenge-approach"]?.challenges || []}
          approachIntro={sections["challenge-approach"]?.approachIntro || "Our Approach: ..."}
          approaches={sections["challenge-approach"]?.approaches || []}
        />

        {/* 5. WHY US */}
        <WhyUsSection
          eyebrow={sections["why-us"]?.eyebrow || "Why BioLogic Products Pvt. Ltd."}
          title={sections["why-us"]?.title || "Six Reasons We Are Different"}
          cards={sections["why-us"]?.cards || []}
        />

        {/* 6. SOLUTIONS PORTFOLIO (DRIVEN DIRECTLY BY CMS SOLUTIONS COLLECTION) */}
        <SolutionsTabsSection
          eyebrow={sections["solutions-tabs"]?.eyebrow || "OUR SOLUTIONS"}
          title={sections["solutions-tabs"]?.title || "A glimpse into our comprehensive biological portfolio for healthcare solutions."}
          description={sections["solutions-tabs"]?.description || "From skincare to orthopedic care, the CMS can grow each route without changing the section system."}
          tabs={solutionTabs.length > 0 ? solutionTabs : (sections["solutions-tabs"]?.tabs || [])}
        />

        {/* 7. INNOVATION */}
        <InnovationSection
          eyebrow={sections["innovation"]?.eyebrow || "INNOVATION & PIPELINE"}
          title={sections["innovation"]?.title || "A glimpse into our comprehensive biological innovation and pipeline."}
          cards={sections["innovation"]?.cards || []}
        />

        {/* 8. FOUNDERS (DRIVEN DIRECTLY BY CMS TEAM COLLECTION) */}
        <FoundersSection
          eyebrow={sections["founders"]?.eyebrow || "OUR FOUNDERS"}
          title={sections["founders"]?.title || "Meet our founders with science driven leadership and strong execution capabilities."}
          members={founders.length > 0 ? founders : (sections["founders"]?.members || [])}
        />

        {/* 9. FINAL CTA */}
        <FinalCtaSection
          title={sections["final-cta"]?.title || `Building Tomorrow's Biologic\nSystems Together.`}
          description={sections["final-cta"]?.description || "We invite collaborations and partnerships across:"}
          tags={sections["final-cta"]?.tags || []}
          primaryCta={sections["final-cta"]?.primaryCta || { label: "Partner With Us", href: "/#footer" }}
        />
      </main>

      <Footer {...site.footer} id="footer" />
    </>
  );
}
