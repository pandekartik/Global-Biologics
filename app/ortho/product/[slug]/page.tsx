import { getProductBySlug, getSiteMeta, getTestimonials, getVideoTestimonials } from "@/lib/content";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Container } from "@/components/atoms";
import {
  FlaskConical,
  CalendarRange,
  Scale,
  Star,
  ShieldCheck,
  Play,
  Droplet,
} from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { getProducts } = await import("@/lib/content");
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const [site, product, testimonials, videos] = await Promise.all([
    getSiteMeta(), getProductBySlug(slug), getTestimonials(), getVideoTestimonials(),
  ]);

  if (!product) {
    notFound();
  }

  // Use up to 3 featured testimonials and videos
  const displayTestimonials = testimonials.filter(t => t.featured).slice(0, 3);
  const displayVideos = videos.slice(0, 3);

  return (
    <>
      <SiteNav brand={site.title} links={site.nav} activeHref="/ortho" floating />
      
      <main className="relative overflow-hidden">
        {/* SECTION 1: Product Hero */}
        <section className="relative min-h-screen flex items-end pb-20 overflow-hidden pt-32">
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
                  <span>ORTHOPEDIC CARE RANGE</span>
                  <span className="font-sans text-slate-300">&gt;</span>
                  <span className="text-blue-500 font-bold uppercase">{product.title.replace('SaSneh™ ', '')}</span>
                </nav>

                {product.badge && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#6b8a25] text-[9px] font-bold uppercase tracking-[0.15em] text-[#6b8a25] mb-4">
                    {product.badge}
                  </div>
                )}

                <h1 className="font-heading font-normal text-[5.5rem] leading-[0.9] text-[#0077b1] mb-4">
                  {product.brand || 'SaSneh™'}
                </h1>
                <p className="text-lg font-medium text-slate-500 tracking-wide max-w-lg">
                  {product.summary}
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

        {/* SECTION 2: Product specific Approach Text */}
        <section className="py-24 bg-white text-center">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-[3.5rem] leading-tight text-slate-900 mb-6">
                The {product.brand || 'SaSneh™'} Approach
              </h2>
              <p className="text-[#009bd6] text-[13px] font-bold uppercase tracking-[0.2em] mb-10">
                ADDRESSING {product.conditions[0] || 'PAIN'} & ITS CHALLENGES
              </p>
              <div className="text-[17px] leading-[1.8] text-slate-600 max-w-3xl mx-auto font-medium space-y-3">
                <p>{product.description}</p>
                <div className="flex flex-col items-center justify-center gap-2 text-slate-700 font-semibold pt-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">• {benefit}</div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: THE PRODUCT DISPLAY */}
        <section className="py-24 bg-[#f7f9f5]">
          <Container>
            <div className="mb-12">
              <span className="text-[#6b8a25] text-[12px] font-bold uppercase tracking-[0.25em] mb-3 block">
                OUR SOLUTION
              </span>
              <h2 className="font-heading text-[2.5rem] text-slate-800">
                Introducing {product.title}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Product Imagery Suite */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] bg-gradient-to-b from-[#1a1210] to-[#0e0908] rounded-3xl overflow-hidden flex items-center justify-center shadow-lg p-12">
                  <img 
                    src={product.image || "/images/product-image.png"} 
                    alt={product.title} 
                    className="h-full w-auto object-contain" 
                  />
                  {(product.price || product.strikePrice) && (
                    <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-[14px] font-medium flex items-center gap-3">
                      {product.price && <span className="font-bold">{product.price}</span>}
                      {product.strikePrice && <span className="line-through opacity-50 text-[12px]">{product.strikePrice}</span>}
                    </div>
                  )}
                </div>

                {product.thumbnails && product.thumbnails.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.thumbnails.map((thumb, idx) => (
                      <div key={idx} className={`aspect-square bg-[#1a1210] rounded-xl overflow-hidden border-2 flex items-center justify-center p-4 cursor-pointer transition hover:opacity-90 ${idx === 0 ? 'border-[#6b8a25]' : 'border-transparent'}`}>
                        <img src={thumb} alt={`${product.title} thumb ${idx}`} className="h-full object-contain" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Product Meta details */}
              <div className="lg:pt-6 flex flex-col h-full justify-center">
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.conditions.map((cond, i) => (
                    <span key={i} className="px-3 py-1 bg-[#d1e4d6] text-[#46694e] text-[9px] font-bold uppercase tracking-wider rounded-md">{cond}</span>
                  ))}
                </div>

                <h3 className="font-bold text-[2rem] text-slate-900 leading-tight mb-4">{product.title}</h3>
                <p className="text-slate-600 text-[16px] leading-relaxed font-medium mb-10">
                  {product.summary}
                </p>

                <div className="space-y-8 mb-12">
                  {product.composition && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <FlaskConical className="w-5 h-5 text-[#6b8a25]" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 tracking-wide uppercase mb-1">COMPOSITION:</h4>
                        <p className="text-[14px] text-slate-600 font-medium">{product.composition}</p>
                      </div>
                    </div>
                  )}

                  {product.usage && (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                        <CalendarRange className="w-5 h-5 text-[#6b8a25]" />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 tracking-wide uppercase mb-1">USAGE:</h4>
                        <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
                          {product.usage}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-6 mb-8 text-[13px] font-medium text-slate-600">
                  {product.volume && <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-[#6b8a25]" /> {product.volume}</div>}
                  {product.volume && <div className="w-1 h-1 bg-slate-300 rounded-full" />}
                  <div className="flex items-center gap-2"><Droplet className="w-4 h-4 text-[#6b8a25]" /> By {product.brand || 'SaSneh™'}</div>
                </div>

                <button className="w-full py-4 rounded-lg bg-[#2d5a13] text-white font-bold tracking-wide hover:bg-[#22450e] transition shadow-md text-[15px]">
                  {product.ctaLabel || "Buy Now"}
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: Validation Loop - CMS driven */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="font-heading text-[2.8rem] text-center mb-16">
              Clinical Validation & <span className="text-[#009bd6]">People Stories</span>
            </h2>

            {displayTestimonials.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {displayTestimonials.map((t) => (
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

            {displayVideos.length > 0 && (
              <div className="grid md:grid-cols-3 gap-8">
                {displayVideos.map((v) => (
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
