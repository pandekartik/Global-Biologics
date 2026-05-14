"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { ProductQuickViewModal } from "./ProductModal";

type Props = {
  products: Product[];
  variant?: "ortho" | "bedsore";
};

export function ProductGridList({ products, variant = "ortho" }: Props) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const isOrtho = variant === "ortho";
  const accentColor = isOrtho ? "#007db8" : "#2d6900"; // Fallback colors based on branch

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((prod, i) => {
          const shouldHideOnMobile = i >= 4;
          return (
            <div 
              key={i} 
              className={`flex flex-col group relative ${shouldHideOnMobile && !isExpanded ? 'hidden sm:flex' : 'flex'}`}
            >
              
              {/* Image Container with Hover Quick View Overlay */}
              <div className="aspect-[4/3] bg-white border border-slate-200 rounded-t-lg overflow-hidden p-4 flex items-center justify-center relative group">
                <img 
                  src={prod.image || `/uploads/placeholder.png`} 
                  alt={prod.title} 
                  className="max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Quick View Hover Reveal */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProduct(prod);
                    }}
                    className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-white/95 text-slate-800 px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg hover:bg-white"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Details Area */}
              <div className="border border-t-0 border-slate-200 p-3.5 rounded-b-lg flex-1 flex flex-col bg-white shadow-sm transition-shadow group-hover:shadow-md">
                {prod.badge && (
                  <span 
                    className="inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm mb-3 w-fit"
                    style={{ backgroundColor: isOrtho ? "#dbebf7" : "#f1f8e9", color: accentColor }}
                  >
                    {prod.badge}
                  </span>
                )}
                <h3 className="font-bold text-[14px] text-slate-900 leading-tight mb-2 min-h-[36px]">{prod.title}</h3>
                <p className="text-[12px] text-slate-500 mb-4 flex-1 leading-relaxed line-clamp-2">{prod.summary}</p>
                
                {prod.price && (
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-bold text-slate-900 text-[14px]">{prod.price}</span>
                    {prod.strikePrice && (
                      <span className="text-[12px] text-slate-400 line-through">{prod.strikePrice}</span>
                    )}
                  </div>
                )}

                {/* Action Grid */}
                <div className="grid grid-cols-1 gap-2">
                  <Link 
                    href={`/${variant}/product/${prod.slug}`}
                    className="block text-center w-full py-2 border text-[11px] font-bold uppercase tracking-wider rounded-md transition-colors"
                    style={{ 
                      borderColor: `${accentColor}30`, 
                      color: accentColor 
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = accentColor;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = accentColor;
                    }}
                  >
                    KNOW MORE
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Only "Load More" Button */}
      {!isExpanded && products.length > 4 && (
        <div className="sm:hidden mt-10 flex justify-center w-full">
          <button 
            onClick={() => setIsExpanded(true)}
            className="px-10 py-4 bg-white border font-bold text-[12px] tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[280px] flex items-center justify-center gap-2 hover:border-slate-300 group/btn"
            style={{ 
              borderColor: `${accentColor}40`, 
              color: accentColor 
            }}
          >
            Load More Products
            <span className="text-[10px] opacity-60 font-semibold group-hover/btn:translate-x-0.5 transition-transform">(+{products.length - 4})</span>
          </button>
        </div>
      )}

      {/* Common Modal Controller for this group */}
      <ProductQuickViewModal 
        product={activeProduct} 
        isOpen={activeProduct !== null} 
        onClose={() => setActiveProduct(null)} 
      />
    </>
  );
}
