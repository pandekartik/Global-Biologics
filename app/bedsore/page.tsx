import { getSiteMeta, getProducts, getBedsorePageContent, getTestimonials, getVideoTestimonials } from "@/lib/content";
import { SiteNav } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Container } from "@/components/atoms";
import {
  CheckCircle2,
  Droplet,
  ShieldCheck,
  Leaf,
  Zap,
  Star,
  Play,
  FileText,
  Sprout,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<number, React.ElementType> = { 0: Sprout, 1: Leaf, 2: Zap, 3: ShieldCheck };
const needColors = ["bg-[#3b6b04]", "bg-[#2e5403]", "bg-[#7ea453]", "bg-[#a5c28c]"];

export default async function BedsorePage() {
  const [site, products, page, allTestimonials, allVideos] = await Promise.all([
    getSiteMeta(), getProducts(), getBedsorePageContent(), getTestimonials(), getVideoTestimonials(),
  ]);

  // Filter bedsore products by slugs from CMS
  const productSlugs: string[] = page?.productSection?.productSlugs || [];
  const bedsoreProducts = productSlugs.length > 0
    ? products.filter(p => productSlugs.includes(p.slug))
    : products.filter(p => p.category.toLowerCase().includes("bedsore"));

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
      <SiteNav brand={site.title} links={site.nav} floating />
      
      <main className="relative overflow-hidden">
        {/* SECTION 1: Hero */}
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden pt-32">
          <div className="absolute inset-0 -z-10">
            <img
              src={page?.hero?.heroImage || "/images/bedsore-hero.png"}
              alt="Lab environment"
              className="h-full w-full object-cover object-right lg:object-[center_right]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:via-white/80" />
          </div>

          <Container>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-blue-500/80 mb-4">
                  <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
                  <span className="font-sans text-slate-300">&gt;</span>
                  <span>SOLUTIONS</span>
                  <span className="font-sans text-slate-300">&gt;</span>
                  <span className="text-slate-400">BED SORES</span>
                </nav>

                <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6b8a25] text-[9px] font-bold uppercase tracking-[0.15em] text-[#6b8a25] mb-4">
                  {page?.hero?.badge || "COMPLETE CARE FOR PRESSURE-PRONE SKIN"}
                </div>

                <h1 className="font-heading font-normal text-[5.5rem] leading-[0.9] text-[#0077b1] mb-4">
                  {page?.hero?.title || "TWARABiO™"}
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-500 tracking-wide">
                  {page?.hero?.subtitle || "Advanced Herbal Care for Pressure-Prone Skin"}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 w-full max-w-[200px] aspect-square flex items-center justify-center">
                  <img 
                    src={page?.hero?.logoImage || "/images/twarabio-logo.jpg"} 
                    alt="TwaraBio Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: Problem Introduction */}
        <section className="py-24 bg-white text-center">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-[3.5rem] leading-tight text-slate-900 mb-6">
                {page?.intro?.title || "The Growing burden of bed sores"}
              </h2>
              <p className="text-[#009bd6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
                {page?.intro?.subtitle || "A SILENT & SERIOUS HEALTHCARE CHALLENGE"}
              </p>
              <p className="text-[17px] leading-[1.8] text-slate-600 max-w-3xl mx-auto font-medium">
                {page?.intro?.text || "Bed sores (pressure ulcers) are major yet under-recognized healthcare problem affecting millions worldwide."}
              </p>
            </div>
          </Container>
        </section>

        {/* SECTION 3: The Scenario (Stats) */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#8fb339] text-[12px] font-bold uppercase tracking-[0.25em] mb-4 block">
                THE SCENARIO
              </span>
              <h2 className="font-heading text-[2.8rem] leading-[1.15] text-slate-800 max-w-3xl">
                We support healing and pain relief for bed sores through our nonsteroidal phytomedicines.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {(page?.scenarios || []).map((scenario: any, si: number) => (
                <div key={si}>
                  <h3 className="font-serif italic text-2xl text-[#6b8a25] mb-8 pb-2 border-b border-[#6b8a25]/10">
                    {scenario.heading}
                  </h3>
                  <div className="space-y-8">
                    {(scenario.items || []).map((item: any, ii: number) => (
                      <div key={ii}>
                        <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">{item.stat}</div>
                        <p className="text-[15px] text-slate-600 font-medium mt-2 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4: Who is at risk */}
        <section className="py-24 bg-white">
          <Container>
            <div className="mb-12">
              <span className="text-[#0077b1] text-[12px] font-bold uppercase tracking-[0.25em] mb-4 block">
                {page?.atRisk?.eyebrow || "WHO IS AT RISK?"}
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-800 max-w-2xl">
                {page?.atRisk?.heading || "Designed for patients at risk of prolonged immobility and skin breakdown."}
              </h2>
            </div>

            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 mb-6">
              <div className="hidden md:block md:col-span-4"></div>
              <div className="md:col-span-8">
                <h3 className="font-serif italic text-[22px] text-[#0077b1]">{page?.atRisk?.subheading || "Why special care is needed?"}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                {(page?.atRisk?.patients || []).map((label: string, i: number) => (
                  <div
                    key={i}
                    className="bg-[#f1f8fb] text-[#0077b1] px-6 flex items-center flex-1 rounded-md text-[11px] font-bold tracking-wider"
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  {(page?.atRisk?.reasons || []).map((text: string, i: number) => (
                    <div 
                      key={i} 
                      className="aspect-[4/3] lg:aspect-[1.3/1] bg-[#007db8] rounded-lg px-8 py-6 flex items-center justify-start shadow-sm"
                    >
                      <p className="text-white text-[13px] md:text-[14px] font-medium leading-relaxed text-left max-w-[220px]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Gap vs Need */}
        <section className="py-24 bg-[#f5faf2]">
          <Container>
            <div className="text-center mb-20">
              <h2 className="font-heading text-[3rem] text-slate-800 relative inline-block">
                {page?.gapVsNeed?.title || "Gap vs. Need"}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6b8a25]"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-serif italic text-[22px] text-[#6b8a25] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Care Gap:</span>
                  {page?.gapVsNeed?.gapIntro || "Rising prevalence of chronic skin conditions."}
                </p>
                <div className="space-y-10 mt-12">
                  {(page?.gapVsNeed?.gaps || []).map((item: string, i: number) => (
                    <div key={i} className="text-[13px] font-bold tracking-[0.15em] text-slate-600 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#6b8a25] rounded-full shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif italic text-[22px] text-[#6b8a25] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Need Of The Hour:</span>
                  {page?.gapVsNeed?.needIntro || "Safe and efficacious phytotherapeutics for bed sore."}
                </p>
                <div className="space-y-4">
                  {(page?.gapVsNeed?.needs || []).map((text: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-stretch bg-white rounded-sm overflow-hidden shadow-sm group">
                      <div className={`w-14 ${needColors[idx % needColors.length]} text-white flex items-center justify-center text-xl font-bold`}>
                        {idx + 1}
                      </div>
                      <div className="py-5 px-6 flex items-center flex-1 text-[15px] font-medium text-slate-700">
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Solutions Product Listing */}
        <section className="py-24 bg-white">
          <Container>
            <div className="mb-16">
              <span className="text-[#0077b1] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">
                {page?.productSection?.eyebrow || "OUR SOLUTION"}
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-900 mb-3">
                {page?.productSection?.heading || "Introducing TwaraBio™ Bed Sore Protocol"}
              </h2>
              <p className="text-slate-500 font-medium">
                {page?.productSection?.description || "A range of herbal products that can be used individually or in combination."}
              </p>
            </div>

            <div className="space-y-16">
              {bedsoreProducts.map((prod, i) => {
                const isReversed = i % 2 !== 0;
                const colorScheme = isReversed
                  ? { badgeBg: "bg-[#ecf3e6]", badgeText: "text-[#4b7c24]", iconColor: "text-[#4b7c24]", brandColor: "text-[#4b7c24]", btnBg: "bg-[#386e14] hover:bg-[#2a520f]" }
                  : { badgeBg: "bg-[#e0f1f9]", badgeText: "text-[#007db8]", iconColor: "text-[#009bd6]", brandColor: "text-[#007db8]", btnBg: "bg-[#007db8] hover:bg-[#006091]" };

                return (
                  <div key={prod.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'bg-[#f9faf8] p-8 lg:p-12 rounded-3xl' : 'bg-white'}`}>
                    {/* Visual Container */}
                    <div className={`space-y-4 ${isReversed ? 'order-1 lg:order-2' : ''}`}>
                      <div className="aspect-[4/3] bg-[#18100e] rounded-2xl relative overflow-hidden p-6 flex items-center justify-center border border-slate-100">
                        <img src={prod.image || "/images/product-image.png"} alt={prod.title} className="h-4/5 object-contain" />
                      </div>
                      {prod.thumbnails && prod.thumbnails.length > 0 && (
                        <div className="grid grid-cols-4 gap-3">
                          {prod.thumbnails.map((thumb, ti) => (
                            <div key={ti} className="aspect-square bg-[#18100e] rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                              <img src={thumb} alt="Thumbnail" className="h-full object-contain" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className={isReversed ? 'order-2 lg:order-1' : ''}>
                      <div className="flex gap-2 mb-4">
                        {prod.conditions.map((cond, ci) => (
                          <span key={ci} className={`${colorScheme.badgeBg} ${colorScheme.badgeText} text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full`}>{cond}</span>
                        ))}
                      </div>
                      <h3 className="text-[22px] font-bold text-slate-900 mb-3">{prod.title}</h3>
                      <p className="text-[16px] text-slate-600 font-medium mb-8">{prod.summary}</p>
                      <div className="space-y-6 mb-10">
                        {prod.composition && (
                          <div className="flex gap-4">
                            {isReversed ? <Sprout className={`w-5 h-5 ${colorScheme.iconColor} shrink-0 mt-0.5`} /> : <Droplet className={`w-5 h-5 ${colorScheme.iconColor} shrink-0 mt-0.5`} />}
                            <div>
                              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">COMPOSITION:</div>
                              <p className="text-[14px] text-slate-700 font-medium">{prod.composition}</p>
                            </div>
                          </div>
                        )}
                        {prod.usage && (
                          <div className="flex gap-4">
                            <FileText className={`w-5 h-5 ${colorScheme.iconColor} shrink-0 mt-0.5`} />
                            <div>
                              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">USAGE:</div>
                              <p className="text-[14px] text-slate-700 font-medium leading-relaxed">{prod.usage}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mb-8 text-[12px] font-bold text-slate-400 uppercase tracking-wide">
                        <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> {prod.volume || "10ml"}</span>
                        <span>•</span>
                        <span className={colorScheme.brandColor}>By {prod.brand || "TwaraBio™"}</span>
                      </div>
                      <button className={`w-full ${colorScheme.btnBg} text-white font-bold py-4 rounded-md transition-colors shadow-sm text-[15px]`}>
                        {prod.ctaLabel || "Buy Now"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* SECTION 7: Care Instructions & Product Routine */}
        <section className="py-20 bg-[#fdfdfd]">
          <Container>
            <div className="grid md:grid-cols-12 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <div className="md:col-span-6 bg-white p-10 lg:p-16">
                <h3 className="font-serif italic text-[22px] text-[#6b8a25] mb-8">Care Instructions</h3>
                <ul className="space-y-6">
                  {(page?.careInstructions?.steps || []).map((step: string, i: number) => (
                    <li key={i} className="flex items-center gap-6">
                      <span className="text-[#6b8a25] font-bold text-[16px] leading-none">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[15px] font-medium text-slate-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-6 bg-[#007db8] p-10 lg:p-16 text-white">
                <h3 className="font-serif italic text-[22px] mb-6">{page?.careInstructions?.noteTitle || "Note for use"}</h3>
                <p className="text-[15px] font-medium text-white/90 mb-8 leading-relaxed">
                  {page?.careInstructions?.noteText || "Product can be used individually or in combination."}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-md p-4">
                    <div className="text-xl font-bold mb-1">{page?.careInstructions?.dailyFrequency || "3x"}</div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-white/70">Daily Frequency</div>
                  </div>
                  <div className="bg-white/10 rounded-md p-4">
                    <div className="text-xl font-bold mb-1">{page?.careInstructions?.initialCourse || "14d"}</div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-white/70">Initial Course</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Routine Stepper */}
            <div className="mt-20 border-t border-slate-100 pt-16">
              <div className="text-center mb-12">
                <h3 className="font-serif italic text-[22px] text-slate-800">{page?.productRoutine?.title || "Product Routine"}</h3>
              </div>
              <div className="relative">
                <div className="absolute top-4 left-0 right-0 h-[2px] bg-[#009bd6]/20 -z-10 hidden md:block"></div>
                <div className={`grid md:grid-cols-${(page?.productRoutine?.steps || []).length || 5} gap-8`}>
                  {(page?.productRoutine?.steps || []).map((step: string, i: number) => (
                    <div key={i} className="text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-[#009bd6] bg-white flex items-center justify-center mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#009bd6]"></div>
                      </div>
                      <div className="text-[10px] font-bold text-[#009bd6] uppercase tracking-widest mb-2">STEP {i + 1}</div>
                      <p className="text-[13px] font-medium text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 8: Why We Are Different */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">
                {page?.whyDifferent?.eyebrow || "WHY TWARABiO™?"}
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-900">
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

        {/* SECTION 9: Clinical Validation */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="font-heading text-[2.8rem] text-center mb-16">
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
