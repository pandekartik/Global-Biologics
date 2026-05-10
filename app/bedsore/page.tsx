import { getSiteMeta } from "@/lib/content";
import { SiteNav } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Badge, Container } from "@/components/atoms";
import {
  CheckCircle2,
  ArrowRight,
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

export default async function BedsorePage() {
  const site = await getSiteMeta();

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} floating />
      
      <main className="relative overflow-hidden">
        {/* SECTION 1: Hero */}
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden pt-32">
          {/* Background Image container with overlay to white on the left */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/bedsore-hero.png"
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
                  COMPLETE CARE FOR PRESSURE-PRONE SKIN
                </div>

                <h1 className="font-heading font-normal text-[5.5rem] leading-[0.9] text-[#0077b1] mb-4">
                  TWARABiO™
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-500 tracking-wide">
                  Advanced Herbal Care for Pressure-Prone Skin
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="bg-white p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 w-full max-w-[200px] aspect-square flex items-center justify-center">
                  <img 
                    src="/images/twarabio-logo.jpg" 
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
                The Growing burden of bed sores
              </h2>
              <p className="text-[#009bd6] text-[13px] font-bold uppercase tracking-[0.2em] mb-8">
                A SILENT & SERIOUS HEALTHCARE CHALLENGE
              </p>
              <p className="text-[17px] leading-[1.8] text-slate-600 max-w-3xl mx-auto font-medium">
                Bed sores (pressure ulcers) are major yet under-recognized healthcare problem affecting millions worldwide. They develop due to prolonged pressure on skin, especially in bedridden, elderly, paralysed, and critically ill patients.
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
              {/* Indian Scenario */}
              <div>
                <h3 className="font-serif italic text-2xl text-[#6b8a25] mb-8 pb-2 border-b border-[#6b8a25]/10">
                  Indian Scenario
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">140M+</div>
                    <p className="text-[15px] text-slate-600 font-medium mt-2">Elderly population are increasingly affected.</p>
                  </div>
                  <div>
                    <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">10-25%</div>
                    <p className="text-[15px] text-slate-600 font-medium mt-2 leading-relaxed">
                      Bedridden patients develop bed sores and high burden of stroke, paralysis & diabetes-related immobility. Low awareness in home care settings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Global Scenario */}
              <div>
                <h3 className="font-serif italic text-2xl text-[#6b8a25] mb-8 pb-2 border-b border-[#6b8a25]/10">
                  Global Scenario
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">700M</div>
                    <p className="text-[15px] text-slate-600 font-medium mt-2">People are at risk of bed sores globally.</p>
                  </div>
                  <div>
                    <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">8-23%</div>
                    <p className="text-[15px] text-slate-600 font-medium mt-2 leading-relaxed">
                      Hospitalized patients develop pressure ulcers and increase the risk of infection, morbidity & hospital stay.
                    </p>
                  </div>
                  <div>
                    <div className="text-[3.2rem] font-light text-[#6b8a25] leading-none tracking-tight">25-30%</div>
                    <p className="text-[15px] text-slate-600 font-medium mt-2 leading-relaxed">
                      Prevalence of bed sores in long-term care settings and high economic burden on healthcare systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Who is at risk */}
        <section className="py-24 bg-white">
          <Container>
            <div className="mb-12">
              <span className="text-[#0077b1] text-[12px] font-bold uppercase tracking-[0.25em] mb-4 block">
                WHO IS AT RISK?
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-800 max-w-2xl">
                Designed for patients at risk of prolonged immobility and skin breakdown.
              </h2>
            </div>

            {/* Sub-header row ensures header is excluded from the shared content height calculation */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 mb-6">
              <div className="hidden md:block md:col-span-4"></div>
              <div className="md:col-span-8">
                <h3 className="font-serif italic text-[22px] text-[#0077b1]">Why special care is needed?</h3>
              </div>
            </div>

            {/* Content row uses items-stretch so left & right columns share exact pixel height */}
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              <div className="md:col-span-4 flex flex-col justify-between gap-4">
                {[
                  "BEDRIDDEN PATIENTS.",
                  "ELDERLY INDIVIDUALS.",
                  "STROKE/PARALYSIS PATIENTS.",
                  "POST SURGICAL PATIENTS.",
                  "ICU/ CRITICAL PATIENTS",
                  "WHEELCHAIR-BOUND INDIVIDUALS",
                ].map((label) => (
                  <div
                    key={label}
                    className="bg-[#f1f8fb] text-[#0077b1] px-6 flex items-center flex-1 rounded-md text-[11px] font-bold tracking-wider"
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  {[
                    "Continuous pressure reduces blood flow, triggering infections.",
                    "Leads to tissue damage and skin breakdown worsening the bed sore.",
                    "Affected skin becomes dry, fragile and overly moist.",
                    "All of this leads to increased infection susceptibility."
                  ].map((text, i) => (
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
                Gap vs. Need
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#6b8a25]"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-serif italic text-[22px] text-[#6b8a25] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Care Gap:</span>
                  Rising prevalence of chronic skin conditions, with growing concerns around side effects of existing treatments.
                </p>
                <div className="space-y-10 mt-12">
                  {[
                    "OVER-RELIANCE ON CHEMICAL BASED CARE.",
                    "LACK OF PREVENTIVE DAILY PROTOCOLS.",
                    "LIMITED HERBAL LONG-TERM SOLUTIONS.",
                    "CAREGIVER DEPENDANCY CHALLENGES.",
                  ].map((item) => (
                    <div key={item} className="text-[13px] font-bold tracking-[0.15em] text-slate-600 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-[#6b8a25] rounded-full shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-serif italic text-[22px] text-[#6b8a25] mb-8 leading-relaxed">
                  <span className="font-bold not-italic text-[20px] mr-1">The Need Of The Hour:</span>
                  Safe and efficacious phytotherapeutics for bed sore.
                </p>
                <div className="space-y-4">
                  {[
                    { num: "1", text: "Safe for long-term use.", color: "bg-[#3b6b04]" },
                    { num: "2", text: "Gentle on fragile skin.", color: "bg-[#2e5403]" },
                    { num: "3", text: "Maintains hygiene & moisture balance.", color: "bg-[#7ea453]" },
                    { num: "4", text: "Supports prevention care and easy for hospital & home use.", color: "bg-[#a5c28c]" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-stretch bg-white rounded-sm overflow-hidden shadow-sm group">
                      <div className={`w-14 ${item.color} text-white flex items-center justify-center text-xl font-bold`}>
                        {item.num}
                      </div>
                      <div className="py-5 px-6 flex items-center flex-1 text-[15px] font-medium text-slate-700">
                        {item.text}
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
                OUR SOLUTION
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-900 mb-3">
                Introducing TwaraBio™ Bed Sore Protocol
              </h2>
              <p className="text-slate-500 font-medium">
                A range of herbal products that can be used individually or in combination, based on patient condition and care needs.
              </p>
            </div>

            {/* Product Grid */}
            <div className="space-y-16">
              {/* PRODUCT 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-white">
                {/* Visual Container */}
                <div className="space-y-4">
                  <div className="aspect-[4/3] bg-[#18100e] rounded-2xl relative overflow-hidden p-6 flex items-center justify-center border border-slate-100">
                    <img src="/images/product-image.png" alt="Product" className="h-4/5 object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-[#18100e] rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                        <img src="/images/product-image.png" alt="Thumbnail" className="h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#e0f1f9] text-[#007db8] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">BED SORE</span>
                    <span className="bg-[#e0f1f9] text-[#007db8] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">SKIN HEALING</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-slate-900 mb-3">Twarabio™ Herbal Skincare Lotion</h3>
                  <p className="text-[16px] text-slate-600 font-medium mb-8">
                    Supports early-stage bed sores and maintenance care in high-risk patients.
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <Droplet className="w-5 h-5 text-[#009bd6] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">COMPOSITION:</div>
                        <p className="text-[14px] text-slate-700 font-medium">Aloe-based, maintains hydration and skin comfort.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <FileText className="w-5 h-5 text-[#009bd6] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">USAGE:</div>
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                          Suitable for frequent application and for all skin types (dry, sensitive or fragile skin). Patch test required on burning or inflamed skin.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-[12px] font-bold text-slate-400 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 10ml</span>
                    <span>•</span>
                    <span className="text-[#007db8]">By TwaraBio™</span>
                  </div>
                  <button className="w-full bg-[#007db8] hover:bg-[#006091] text-white font-bold py-4 rounded-md transition-colors shadow-sm text-[15px]">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* PRODUCT 2 (Reverse) */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#f9faf8] p-8 lg:p-12 rounded-3xl">
                <div className="order-2 lg:order-1">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#ecf3e6] text-[#4b7c24] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">BED SORE</span>
                    <span className="bg-[#ecf3e6] text-[#4b7c24] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">SKIN HEALING</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-slate-900 mb-3">Twarabio™ Herbal Cleansing & Sponging Liquid</h3>
                  <p className="text-[16px] text-slate-600 font-medium mb-8">
                    Helps in wound cleaning before application of other products and used on bed sores with discharge, debris or contamination.
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <Sprout className="w-5 h-5 text-[#4b7c24] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">COMPOSITION:</div>
                        <p className="text-[14px] text-slate-700 font-medium">Gentle herbal cleansing, maintain hygiene without irritation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <FileText className="w-5 h-5 text-[#4b7c24] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">USAGE:</div>
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                          Suitable for repeated daily use. Daily sponging in bedridden patients. Can also be used on foul-smelling wounds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-[12px] font-bold text-slate-400 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 10ml</span>
                    <span>•</span>
                    <span className="text-[#4b7c24]">By TwaraBio™</span>
                  </div>
                  <button className="w-full bg-[#386e14] hover:bg-[#2a520f] text-white font-bold py-4 rounded-md transition-colors shadow-sm text-[15px]">
                    Buy Now
                  </button>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="aspect-[4/3] bg-[#18100e] rounded-2xl relative overflow-hidden p-6 flex items-center justify-center border border-slate-100">
                    <img src="/images/product-image.png" alt="Product" className="h-4/5 object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-[#18100e] rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                        <img src="/images/product-image.png" alt="Thumbnail" className="h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PRODUCT 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-white">
                <div className="space-y-4">
                  <div className="aspect-[4/3] bg-[#18100e] rounded-2xl relative overflow-hidden p-6 flex items-center justify-center border border-slate-100">
                    <img src="/images/product-image.png" alt="Product" className="h-4/5 object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-[#18100e] rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                        <img src="/images/product-image.png" alt="Thumbnail" className="h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#e0f1f9] text-[#007db8] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">BED SORE</span>
                    <span className="bg-[#e0f1f9] text-[#007db8] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">SKIN HEALING</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-slate-900 mb-3">Twarabio™ Herbal Skincare Oil</h3>
                  <p className="text-[16px] text-slate-600 font-medium mb-8">
                    For bed-sore prone areas (before ulcer formation) and on dry, poorly nourished skin.
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <Droplet className="w-5 h-5 text-[#009bd6] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">COMPOSITION:</div>
                        <p className="text-[14px] text-slate-700 font-medium">Nourishing ingredients, supports skin integrity and resilience.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <FileText className="w-5 h-5 text-[#009bd6] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">USAGE:</div>
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                          Ideal for preventive care and for long-term bedridden patients. Suitable for use on pressure points (heels, hips, back, elbows).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-[12px] font-bold text-slate-400 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 10ml</span>
                    <span>•</span>
                    <span className="text-[#007db8]">By TwaraBio™</span>
                  </div>
                  <button className="w-full bg-[#007db8] hover:bg-[#006091] text-white font-bold py-4 rounded-md transition-colors shadow-sm text-[15px]">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* PRODUCT 4 (Reverse) */}
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#f9faf8] p-8 lg:p-12 rounded-3xl">
                <div className="order-2 lg:order-1">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#ecf3e6] text-[#4b7c24] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">BED SORE</span>
                    <span className="bg-[#ecf3e6] text-[#4b7c24] text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">SKIN HEALING</span>
                  </div>
                  <h3 className="text-[22px] font-bold text-slate-900 mb-3">Twarabio™ Herbal Dusting Powder</h3>
                  <p className="text-[16px] text-slate-600 font-medium mb-8">
                    For sweating or moisture prone areas and risk of maceration and prevents friction-related damage.
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="flex gap-4">
                      <Sprout className="w-5 h-5 text-[#4b7c24] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">COMPOSITION:</div>
                        <p className="text-[14px] text-slate-700 font-medium">Moisturizer, keeps skin dry & comfortable, reduces moisture related breakdown.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <FileText className="w-5 h-5 text-[#4b7c24] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">USAGE:</div>
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
                          Suitable for repeated daily use and on skin folds (groin, underarms, back folds).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8 text-[12px] font-bold text-slate-400 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 10ml</span>
                    <span>•</span>
                    <span className="text-[#4b7c24]">By TwaraBio™</span>
                  </div>
                  <button className="w-full bg-[#386e14] hover:bg-[#2a520f] text-white font-bold py-4 rounded-md transition-colors shadow-sm text-[15px]">
                    Buy Now
                  </button>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="aspect-[4/3] bg-[#18100e] rounded-2xl relative overflow-hidden p-6 flex items-center justify-center border border-slate-100">
                    <img src="/images/product-image.png" alt="Product" className="h-4/5 object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-[#18100e] rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                        <img src="/images/product-image.png" alt="Thumbnail" className="h-full object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 7: Care Instructions & Product Routine */}
        <section className="py-20 bg-[#fdfdfd]">
          <Container>
            <div className="grid md:grid-cols-12 rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              {/* Left: Care instructions */}
              <div className="md:col-span-6 bg-white p-10 lg:p-16">
                <h3 className="font-serif italic text-[22px] text-[#6b8a25] mb-8">Care Instructions</h3>
                <ul className="space-y-6">
                  {[
                    { num: "01", text: "Reposition patient regularly." },
                    { num: "02", text: "Maintain clean & dry skin." },
                    { num: "03", text: "Avoid prolonged pressure." },
                    { num: "04", text: "Use gentle application only." },
                  ].map((item) => (
                    <li key={item.num} className="flex items-center gap-6">
                      <span className="text-[#6b8a25] font-bold text-[16px] leading-none">{item.num}</span>
                      <span className="text-[15px] font-medium text-slate-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: Note for use */}
              <div className="md:col-span-6 bg-[#007db8] p-10 lg:p-16 text-white">
                <h3 className="font-serif italic text-[22px] mb-6">Note for use</h3>
                <p className="text-[15px] font-medium text-white/90 mb-8 leading-relaxed">
                  Product can be used individually or in combination. Selection depends on stage, condition, and patient needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-md p-4">
                    <div className="text-xl font-bold mb-1">3x</div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-white/70">Daily Frequency</div>
                  </div>
                  <div className="bg-white/10 rounded-md p-4">
                    <div className="text-xl font-bold mb-1">14d</div>
                    <div className="text-[12px] font-bold uppercase tracking-wider text-white/70">Initial Course</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Routine Stepper */}
            <div className="mt-20 border-t border-slate-100 pt-16">
              <div className="text-center mb-12">
                <h3 className="font-serif italic text-[22px] text-slate-800">Product Routine</h3>
              </div>
              <div className="relative">
                <div className="absolute top-4 left-0 right-0 h-[2px] bg-[#009bd6]/20 -z-10 hidden md:block"></div>
                <div className="grid md:grid-cols-5 gap-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="text-center flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-[#009bd6] bg-white flex items-center justify-center mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#009bd6]"></div>
                      </div>
                      <div className="text-[10px] font-bold text-[#009bd6] uppercase tracking-widest mb-2">STEP {i}</div>
                      <p className="text-[13px] font-medium text-slate-600">
                        Apply Twarabio's lotion twice daily.
                      </p>
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
                WHY TWARABiO™?
              </span>
              <h2 className="font-heading text-[2.8rem] leading-tight text-slate-900">
                Four Reasons We Are Different
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-10 relative">
              {/* Subtle vertical lines */}
              <div className="hidden md:block absolute inset-y-0 left-1/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-2/4 w-px bg-slate-200/60"></div>
              <div className="hidden md:block absolute inset-y-0 left-3/4 w-px bg-slate-200/60"></div>

              {[
                { icon: Sprout, title: "Herbal & Clinically Relevant", text: "Inspired by traditional botanical knowledge and adapted for modern care needs." },
                { icon: Leaf, title: "Steroid Free & Gentle", text: "Suitable for long-term use and safe for fragile and elderly skin." },
                { icon: Zap, title: "Flexible Usage Approach", text: "Not a rigid protocol, use based on patient condition." },
                { icon: ShieldCheck, title: "Real Care Settings", text: "Easy for caregivers and suitable for hospital & home use." },
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

        {/* SECTION 9: Clinical Validation */}
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
                  {/* Placeholder for video cover */}
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
