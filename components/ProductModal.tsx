"use client";

import React from "react";
import { X, ShieldCheck, FlaskConical, Droplets, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";

type Props = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProductQuickViewModal({ product, isOpen, onClose }: Props) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content Container */}
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden animate-zoom-in flex flex-col md:flex-row border border-white/10"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 h-8 w-8 flex items-center justify-center bg-white/90 hover:bg-red-50 rounded-full text-slate-500 hover:text-red-500 transition shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Left Side: Image / Illustration */}
        <div className="w-full md:w-[45%] bg-white p-8 md:p-12 flex items-center justify-center relative border-r border-slate-100">
          <img 
            src={product.image || "/uploads/placeholder.png"} 
            alt={product.title} 
            className="w-full h-full max-h-[400px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side: Info Details */}
        <div className="flex-1 p-8 md:p-10 overflow-y-auto">
          <div className="space-y-6 h-full flex flex-col">
            
            {/* 1. Tags / Conditions */}
            {product.conditions && product.conditions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.conditions.map((cond) => (
                  <span 
                    key={cond} 
                    className="px-3 py-1 rounded-full bg-[#f1f8e9] text-[#558b2f] text-[10px] font-bold uppercase tracking-wider"
                  >
                    {cond}
                  </span>
                ))}
              </div>
            )}

            {/* 2. Title & Intro */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                {product.summary}
              </p>
            </div>

            {/* 3. Detail Blocks (About, Usage) */}
            <div className="space-y-5 flex-1 py-4 border-y border-slate-50">
              {product.description && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#007db8]">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center">
                      ABOUT PRODUCT:
                    </h4>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              )}

              {product.usage && (
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-sky-50 flex items-center justify-center text-[#007db8]">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center">
                      USAGE:
                    </h4>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {product.usage}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Volume / Meta Footer & CTA */}
            <div className="space-y-4 pt-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShoppingBag className="h-4 w-4 text-slate-400" />
                  {product.volume || "Pack Size"}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[#007db8] font-medium">By {product.brand || "SaSneh™"}</span>
              </div>

              <a 
                href={product.ctaHref || "#"}
                className="w-full bg-[#007db8] hover:bg-[#00608e] text-white h-14 rounded-xl flex items-center justify-center text-[16px] font-bold shadow-lg shadow-sky-900/10 transition-all active:scale-[0.98]"
              >
                Buy Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
