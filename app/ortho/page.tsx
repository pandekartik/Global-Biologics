import { getSiteMeta } from "@/lib/content";
import { SiteNav } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Container } from "@/components/atoms";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Leaf,
  Sprout,
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";

export default async function OrthoPage() {
  const site = await getSiteMeta();

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} activeHref="/ortho" floating />
      
      <main className="relative overflow-hidden">
        {/* SECTION 1: Hero - Explicit duplication of high-fidelity aligned layout */}
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden pt-32">
          {/* Background Tech Lab matching bedsore hero texture */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/bedsore-hero.png"
              alt="Research Lab"
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
                  <span className="text-slate-400 uppercase">Orthopedic Care Range</span>
                </nav>

                <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6b8a25] text-[9px] font-bold uppercase tracking-[0.15em] text-[#6b8a25] mb-4">
                  CONDITION-SPECIFIC • STEROID-FREE • TARGETED RELIEF
                </div>

                <h1 className="font-heading font-normal text-[5.5rem] leading-[0.9] text-[#0077b1] mb-4">
                  SaSneh™
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-500 tracking-wide">
                  Advanced topical herbal solutions for comprehensive musculoskeletal care
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 w-full max-w-[200px] aspect-square flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/sasneh-logo.jpg" 
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
              <h2 className="font-heading text-[3.5rem] leading-tight text-slate-900 mb-6">
                The SaSneh™ Approach
              </h2>
              <p className="text-[#009bd6] text-[13px] font-bold uppercase tracking-[0.2em] mb-10">
                ADDRESSING ORTHOPEDIC PAIN & ITS CHALLENGES
              </p>
              <div className="text-[17px] leading-[1.8] text-slate-600 max-w-3xl mx-auto font-medium space-y-3">
                <p>Musculoskeletal disorders are among the leading causes of pain and disability across all age groups.</p>
                <div className="flex flex-col items-center justify-center gap-1 text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">• 1 in 3 individuals affected globally</div>
                  <div className="flex items-center gap-2">• 20-30% prevalence in India</div>
                </div>
                <p className="pt-2">These conditions significantly impact mobility, productivity, and quality of life.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: Features Grid */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-4 block">
                OUR ORTHOPEDIC CARE
              </span>
              <h2 className="font-heading text-[2.8rem] leading-[1.15] text-slate-800 max-w-3xl">
                We offer advanced topical herbal solutions for comprehensive musculoskeletal care.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="font-serif text-[3rem] leading-none text-[#6b8a25] font-medium">120+</div>
                <div className="text-[15px] font-medium text-slate-600">Orthopedic conditions mapped.</div>
              </div>
              <div className="space-y-3">
                <div className="font-serif text-[2.5rem] leading-tight text-[#6b8a25] font-medium">Free of Steroids</div>
                <div className="text-[15px] font-medium text-slate-600">Non-steroidal & safe for long-term use.</div>
              </div>
              <div className="space-y-3">
                <div className="font-serif text-[2.5rem] leading-tight text-[#6b8a25] font-medium">Care Settings</div>
                <div className="text-[15px] font-medium text-slate-600">Designed for doctors & physiotherapists.</div>
              </div>
              <div className="space-y-3">
                <div className="font-serif text-[2.5rem] leading-tight text-[#6b8a25] font-medium">Product efficacy</div>
                <div className="text-[15px] font-medium text-slate-600">Targeted localized action.</div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Challenge vs Approach */}
        <section className="py-28 bg-white">
          <Container>
            <div className="text-center mb-20">
              <h2 className="font-heading text-[3rem] text-slate-800 relative inline-block">
                Challenge vs. Approach
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#007db8]"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-serif italic text-[22px] text-[#007db8] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Challenge:</span>
                  Rising prevalence of orthopedic conditions, with growing concerns around side effects of existing treatments.
                </p>
                <div className="space-y-10 mt-12">
                  {[
                    "LONG TERM SYSTEMIC MEDICATIONS & SIDE EFFECTS.",
                    "STEROID USE LEADS TO LIMITED LONG TERM SUITABILITY.",
                    "GENERIC OILS LACK TARGETED ACTION.",
                    "CAREGIVER DEPENDANCY CHALLENGES.",
                  ].map((item) => (
                    <div key={item} className="text-[13px] font-bold tracking-[0.15em] text-slate-600 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#007db8] rounded-full shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif italic text-[22px] text-[#007db8] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">Our Approach:</span>
                  Safe and efficacious phytotherapeutics for musculoskeletal care.
                </p>
                <div className="space-y-4">
                  {[
                    { num: "1", text: "Condition-specific formulations.", bg: "bg-[#0073aa]" },
                    { num: "2", text: "Steroid free & safe for repeated use.", bg: "bg-[#007fb9]" },
                    { num: "3", text: "Targeted local action.", bg: "bg-[#72b3d9]" },
                    { num: "4", text: "Supports physiotherapy and rehabilitation.", bg: "bg-[#abd0e5]" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-stretch bg-white rounded-sm overflow-hidden group">
                      <div className={`w-14 ${item.bg} text-white flex items-center justify-center text-xl font-bold`}>
                        {item.num}
                      </div>
                      <div className="py-5 px-6 flex items-center flex-1 border border-slate-100 border-l-[3px] border-l-[#007db8] text-[15px] font-medium text-slate-700 bg-white shadow-sm">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: Vision / Mission with custom minimalist backdrop */}
        <section className="py-32 bg-[#f7f9f5] relative overflow-hidden">
          {/* Subtle oversized drop outline icon - exactly centered as requested */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
             <svg width="700" height="700" viewBox="0 0 24 24" fill="none" stroke="#6b8a25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
                <h2 className="font-heading text-[3.5rem] leading-[1.1] text-[#6b8a25] max-w-xl">
                  SaSneh™- Because Every Pain Is Different And Deserves Different Care
                </h2>
              </div>

              <div className="lg:pl-20">
                <div className="flex items-center gap-3 mb-8 text-[#6b8a25]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]">OUR MISSION</span>
                  <div className="h-px w-12 bg-[#6b8a25]/40" />
                </div>
                <div className="space-y-6">
                  {[
                    "Condition specific care.",
                    "Replace chemical-based systems so safe for long-term use.",
                    "Designed for clinical integration.",
                  ].map((mission, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-slate-50 flex items-center justify-center shrink-0">
                        {i === 0 ? <CheckCircle2 className="w-6 h-6 text-[#6b8a25] stroke-[1.5]" /> : i === 1 ? <FlaskConical className="w-6 h-6 text-[#6b8a25] stroke-[1.5]" /> : <Sprout className="w-6 h-6 text-[#6b8a25] stroke-[1.5]" />}
                      </div>
                      <p className="text-slate-600 font-medium text-[15px]">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: Product Carousel Strip */}
        <section className="py-28 bg-white">
          <Container>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-[#007db8] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">OUR SOLUTIONS</span>
                <h2 className="font-heading text-[2.8rem] text-slate-900">Introducing SaSneh™ Orthopedic Care Range</h2>
              </div>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition text-slate-500"><ChevronLeft className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition text-slate-500"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { img: "ortho-product-1.png", badge: "BACK PAIN", title: "SaSneh™ Back Care Oil", desc: "Herbal massage oil for back & lumbar support." },
                { img: "ortho-product-2.png", badge: "JOINT PAIN", title: "SaSneh™ Knee Care Oil", desc: "Herbal massage oil for knee & leg joint support." },
                { img: "ortho-product-3.png", badge: "JOINT PAIN", title: "SaSneh™ Neck & Cervical Care Oil", desc: "Herbal massage oil for cervical & neck support." },
                { img: "ortho-product-4.png", badge: "JOINT PAIN", title: "SaSneh™ Shoulder Care Oil", desc: "Herbal massage oil for shoulder support." },
                { img: "ortho-product-5.png", badge: "NERVE PAIN", title: "SaSneh™ Nerve Care Oil", desc: "Herbal massage oil for neuro-muscular support." },
              ].map((prod, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="aspect-square bg-white border border-slate-200 rounded-t-lg overflow-hidden p-4 flex items-center justify-center relative">
                    <img src={`/images/${prod.img}`} alt={prod.title} className="max-h-[85%] object-contain" />
                  </div>
                  <div className="border border-t-0 border-slate-200 p-4 rounded-b-lg flex-1 flex flex-col bg-white">
                    <span className="inline-block px-2 py-0.5 bg-[#dbebf7] text-[#007db8] text-[9px] font-bold uppercase tracking-wider rounded-sm mb-3 w-fit">
                      {prod.badge}
                    </span>
                    <h3 className="font-bold text-[14px] text-slate-900 leading-tight mb-2 min-h-[36px]">{prod.title}</h3>
                    <p className="text-[12px] text-slate-500 mb-4 flex-1 leading-relaxed">{prod.desc}</p>
                    <div className="font-bold text-slate-900 mb-4">₹448.70</div>
                    <button className="w-full py-2.5 border border-[#007db8]/30 text-[#007db8] text-[12px] font-bold uppercase tracking-wider rounded-sm hover:bg-[#007db8] hover:text-white transition-colors">
                      KNOW MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 7: Why We Are Different */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-16">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">
                WHY SASNEH™?
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-900">
                Four Reasons We Are Different
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-10 relative">
              <div className="hidden md:block absolute inset-y-0 left-1/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-2/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-3/4 w-px bg-slate-200/60"></div>

              {[
                { icon: Sprout, title: "Herbal & Clinically Relevant", text: "Condition specific formulation and adjunct to physiotherapy." },
                { icon: Leaf, title: "Steroid Free & Gentle", text: "Steroid free formulations, so suitable for long term use." },
                { icon: Zap, title: "Clinical Mapping Approach", text: "Clinical mapping approach for chronic pain management & post surgery support." },
                { icon: ShieldCheck, title: "Real Care Settings", text: "Doctor & physio friendly & supports geriatric mobility care." },
              ].map((item, i) => (
                <div key={i} className="space-y-4 pt-4">
                  <item.icon className="w-6 h-6 text-[#6b8a25]" />
                  <h4 className="text-[17px] font-bold text-slate-900 leading-tight pt-2">{item.title}</h4>
                  <p className="text-[14px] text-slate-600 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 8: Clinical Validation */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="font-heading text-[2.8rem] text-center mb-16">
              Clinical Validation & <span className="text-[#009bd6]">People Stories</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  <div className="flex text-yellow-400 gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium italic mb-8">
                    "The molecular catalyst matrix has demonstrated a significant 40% reduction in synovial inflammation within my patients. A true breakthrough in non-surgical orthopedic care."
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                    <div className="w-10 h-10 bg-[#dbebf7] rounded-md flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#007db8]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-800">Dr. Marcus Thorne</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">VERIFIED PHYSICIAN</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative group aspect-video rounded-2xl overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img src="/images/illustration.png" alt="Testimonial" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 bg-[#009bd6] rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <div className="font-bold text-[15px]">Sarah Mitchell</div>
                    <div className="text-[11px] opacity-80">Post-Surgical Recovery (5 Months)</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer {...site.footer} id="footer" />
    </>
  );
}
