import { getSiteMeta, getProducts, getOrthoPageContent, getTestimonials, getVideoTestimonials, getLandingPages } from "@/lib/content";
import { SiteNav } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Container } from "@/components/atoms";
import { ProductGridList } from "@/components/ProductGridList";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Leaf,
  Sprout,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<number, React.ElementType> = { 0: Sprout, 1: Leaf, 2: Zap, 3: ShieldCheck };
const missionIconMap: Record<number, React.ElementType> = { 0: CheckCircle2, 1: FlaskConical, 2: Sprout };
const approachColors = ["bg-[#0073aa]", "bg-[#007fb9]", "bg-[#72b3d9]", "bg-[#abd0e5]"];

export default async function OrthoPage() {
  const [site, products, page, allTestimonials, allVideos, solutionPages] = await Promise.all([
    getSiteMeta(), getProducts(), getOrthoPageContent(), getTestimonials(), getVideoTestimonials(), getLandingPages()
  ]);
  
  // Filter ortho products by slugs from CMS, or fallback to category
  const productSlugs: string[] = page?.productSection?.productSlugs || [];
  const orthoProducts = productSlugs.length > 0
    ? products.filter(p => productSlugs.includes(p.slug))
    : products.filter(p => p.category.toLowerCase().includes("ortho"));

  // Filter testimonials and videos by slugs from CMS
  const testimonialSlugs: string[] = page?.testimonials?.testimonialSlugs || [];
  const videoSlugs: string[] = page?.testimonials?.videoSlugs || [];
  const testimonials = testimonialSlugs.length > 0
    ? allTestimonials.filter(t => testimonialSlugs.includes(t.slug))
    : allTestimonials.slice(0, 3);
  const videos = videoSlugs.length > 0
    ? allVideos.filter(v => videoSlugs.includes(v.slug))
    : allVideos.slice(0, 3);

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} solutionPages={solutionPages} activeHref="/ortho" floating />
      
      <main className="relative overflow-hidden">
        {/* SECTION 1: Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-white">

          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-500/80 mb-4">
                  <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
                  <span className="font-sans text-slate-300">&gt;</span>
                  <span>SOLUTIONS</span>
                  <span className="font-sans text-slate-300">&gt;</span>
                  <span className="text-slate-400 uppercase">Orthopedic Care Range</span>
                </nav>

                <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6b8a25] text-[9px] font-bold uppercase tracking-[0.15em] text-[#6b8a25] mb-4">
                  {page?.hero?.badge || "CONDITION-SPECIFIC • STEROID-FREE • TARGETED RELIEF"}
                </div>

                <h1 className="font-heading font-normal text-[3.5rem] md:text-[5.5rem] leading-[0.9] text-[#0077b1] mb-4">
                  {page?.hero?.title || "SaSneh™"}
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-500 tracking-wide">
                  {page?.hero?.subtitle || "Advanced topical herbal solutions for comprehensive musculoskeletal care"}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 w-full max-w-[200px] aspect-square flex items-center justify-center overflow-hidden">
                  <img 
                    src={page?.hero?.logoImage || "/images/sasneh-logo.jpg"} 
                    alt="SaSneh Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: The SaSneh Approach */}
        <section className="py-24 bg-white text-center">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] leading-tight text-slate-900 mb-6">
                {page?.approach?.title || "The SaSneh™ Approach"}
              </h2>
              <p className="text-[#009bd6] text-[13px] font-bold uppercase tracking-[0.2em] mb-10">
                {page?.approach?.subtitle || "ADDRESSING ORTHOPEDIC PAIN & ITS CHALLENGES"}
              </p>
              <div className="text-[17px] leading-[1.8] text-slate-600 max-w-3xl mx-auto font-medium space-y-3">
                <p>{page?.approach?.intro || "Musculoskeletal disorders are among the leading causes of pain and disability across all age groups."}</p>
                <div className="flex flex-col items-center justify-center gap-1 text-slate-700 font-semibold">
                  {(page?.approach?.stats || []).map((stat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">• {stat}</div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: Features Grid */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-4 block">
                {page?.features?.eyebrow || "OUR ORTHOPEDIC CARE"}
              </span>
              <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-[1.15] text-slate-800 max-w-3xl">
                {page?.features?.heading || "We offer advanced topical herbal solutions for comprehensive musculoskeletal care."}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {(page?.features?.items || []).map((item: any, i: number) => (
                <div key={i} className="space-y-3">
                  <div className="font-serif text-[2rem] md:text-[2.5rem] leading-tight text-[#6b8a25] font-medium">{item.stat}</div>
                  <div className="text-[15px] font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4: Challenge vs Approach */}
        <section className="py-28 bg-white">
          <Container>
            <div className="text-center mb-20">
              <h2 className="font-heading text-[2.2rem] md:text-[3rem] text-slate-800 relative inline-block">
                {page?.challenge?.title || "Challenge vs. Approach"}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#007db8]"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-serif italic text-[22px] text-[#007db8] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Challenge:</span>
                  {page?.challenge?.challengeIntro || "Rising prevalence of orthopedic conditions, with growing concerns around side effects of existing treatments."}
                </p>
                <div className="space-y-10 mt-12">
                  {(page?.challenge?.challenges || []).map((item: string, i: number) => (
                    <div key={i} className="text-[13px] font-bold tracking-[0.15em] text-slate-600 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#007db8] rounded-full shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif italic text-[22px] text-[#007db8] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">Our Approach:</span>
                  {page?.challenge?.approachIntro || "Safe and efficacious phytotherapeutics for musculoskeletal care."}
                </p>
                <div className="space-y-4">
                  {(page?.challenge?.approaches || []).map((text: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-stretch bg-white rounded-sm overflow-hidden group">
                      <div className={`w-14 ${approachColors[idx % approachColors.length]} text-white flex items-center justify-center text-xl font-bold`}>
                        {idx + 1}
                      </div>
                      <div className="py-5 px-6 flex items-center flex-1 border border-slate-100 border-l-[3px] border-l-[#007db8] text-[15px] font-medium text-slate-700 bg-white shadow-sm">
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Vision / Mission */}
        <section className="py-32 bg-[#f7f9f5] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
             <svg width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="#6b8a25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 22C17.5228 22 22 17.5228 22 12C22 4.91421 12 1 12 1C12 1 2 4.91421 2 12C2 17.5228 6.47715 22 12 22Z"/>
             </svg>
          </div>
          
          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6 text-[#6b8a25]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">OUR VISION</span>
                  <div className="h-px w-12 bg-[#6b8a25]/40" />
                </div>
                <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-[#6b8a25] max-w-xl">
                  {page?.vision?.title || "SaSneh™- Because Every Pain Is Different And Deserves Different Care"}
                </h2>
              </div>

              <div className="lg:pl-20">
                <div className="flex items-center gap-3 mb-8 text-[#6b8a25]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">OUR MISSION</span>
                  <div className="h-px w-12 bg-[#6b8a25]/40" />
                </div>
                <div className="space-y-6">
                  {(page?.mission?.items || []).map((mission: string, i: number) => {
                    const Icon = missionIconMap[i] || Sprout;
                    return (
                      <div key={i} className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#6b8a25] stroke-[1.5]" />
                        </div>
                        <p className="text-slate-600 font-medium text-[15px]">{mission}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Product Carousel Strip */}
        <section className="py-28 bg-white">
          <Container>
            <div className="mb-16">
              <span className="text-[#007db8] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">{page?.productSection?.eyebrow || "OUR SOLUTIONS"}</span>
              <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] text-slate-900">{page?.productSection?.heading || "Introducing SaSneh™ Orthopedic Care Range"}</h2>
            </div>

            <ProductGridList products={orthoProducts} variant="ortho" />
          </Container>
        </section>

        {/* SECTION 7: Why We Are Different */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">
                {page?.whyDifferent?.eyebrow || "WHY SASNEH™?"}
              </span>
              <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-tight text-slate-900">
                {page?.whyDifferent?.heading || "Four Reasons We Are Different"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-10 relative">
              <div className="hidden md:block absolute inset-y-0 left-1/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-2/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-3/4 w-px bg-slate-200/60"></div>

              {(page?.whyDifferent?.cards || []).map((item: any, i: number) => {
                const Icon = iconMap[i] || ShieldCheck;
                return (
                  <div key={i} className="space-y-4 pt-4">
                    <Icon className="w-6 h-6 text-[#6b8a25]" />
                    <h4 className="text-[17px] font-bold text-slate-900 leading-tight pt-2">{item.title}</h4>
                    <p className="text-[14px] text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION 8: Clinical Validation */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] text-center mb-16">
              {page?.testimonials?.heading || "Clinical Validation & People Stories"}
            </h2>

            {testimonials.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {testimonials.map((t) => (
                  <div key={t.slug} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                    <div className="flex text-yellow-400 gap-1 mb-6">
                      {[...Array(t.rating || 5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed font-medium italic mb-8">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                      <div className="w-10 h-10 bg-[#dbebf7] rounded-md flex items-center justify-center">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-md" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-[#007db8]" />
                        )}
                      </div>
                      <div>
                        <div className="text-[13px] font-bold text-slate-800">{t.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {videos.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8">
                {videos.map((v) => (
                  <div key={v.slug} className="relative group aspect-video rounded-2xl overflow-hidden shadow-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img src={v.coverImage} alt={v.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 bg-[#009bd6] rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 z-20 text-white">
                      <div className="font-bold text-[15px]">{v.name}</div>
                      <div className="text-[11px] opacity-80">{v.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer {...site.footer} id="footer" />
    </>
  );
}
