"use client";

import { useState, useEffect } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";

interface CalcOption {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "dev" | "help" | "extra";
}

export default function BudgetCalculator() {
  const options: CalcOption[] = [
    // Web Development Options
    { id: "landing", name: "Landing Page Base", price: 99, description: "Single-page responsive Next.js page", category: "dev" },
    { id: "multipage", name: "Extra Pages", price: 30, description: "Price per additional page (e.g., About, Contact)", category: "dev" },
    { id: "cms", name: "Blog / CMS Setup", price: 50, description: "Add a database/editor for blog posts", category: "dev" },
    
    // Tech Help Options
    { id: "domain", name: "Domain & DNS Config", price: 20, description: "Hook up custom domains and DNS records", category: "help" },
    { id: "hosting", name: "Cloud Deployment Setup", price: 30, description: "Deploy to Vercel/Netlify/GitHub Pages", category: "help" },
    { id: "bugfix", name: "Bug Squash / Tech Help", price: 40, description: "Resolve errors, styling issues, API bugs", category: "help" },
    
    // Add-ons
    { id: "seo", name: "SEO Meta Tags & Sitemap", price: 25, description: "Setup meta descriptions, robot.txt, sitemaps", category: "extra" },
    { id: "doodleLogo", name: "Doodle Logo & Graphics", price: 30, description: "Doodle-art style logo/icons for your site", category: "extra" },
    { id: "speed", name: "Speed & SEO Optimization", price: 25, description: "Optimize image sizes and load speeds", category: "extra" },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(["landing"]);
  const [extraPagesCount, setExtraPagesCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(99);
  const [hasDiscount, setHasDiscount] = useState<boolean>(false);
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // Calculate pricing
  useEffect(() => {
    let subtotal = 0;
    
    selectedIds.forEach((id) => {
      const option = options.find((opt) => opt.id === id);
      if (!option) return;
      
      if (id === "multipage") {
        subtotal += option.price * extraPagesCount;
      } else {
        subtotal += option.price;
      }
    });

    // Bundles get discount: 15% off if 3 or more items chosen
    const qualifyingForDiscount = selectedIds.length >= 3;
    
    if (qualifyingForDiscount) {
      setHasDiscount(true);
      const discount = Math.round(subtotal * 0.15);
      setDiscountAmount(discount);
      setTotalPrice(subtotal - discount);
    } else {
      setHasDiscount(false);
      setDiscountAmount(0);
      setTotalPrice(subtotal);
    }
  }, [selectedIds, extraPagesCount]);

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return;
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleApplyToTicket = () => {
    const selectedItemsText = options
      .filter((opt) => selectedIds.includes(opt.id))
      .map((opt) => {
        if (opt.id === "multipage") {
          return `${opt.name} (${extraPagesCount} page${extraPagesCount > 1 ? "s" : ""})`;
        }
        return opt.name;
      })
      .join(", ");

    const summary = `Selected Services: ${selectedItemsText}. Estimate: $${totalPrice}`;
    
    localStorage.setItem("esc_selected_services", summary);
    localStorage.setItem("esc_calculator_price", totalPrice.toString());
    
    const event = new CustomEvent("esc_calculator_filled", { 
      detail: { summary, price: totalPrice } 
    });
    window.dispatchEvent(event);

    const ticketSection = document.getElementById("ticket");
    if (ticketSection) {
      ticketSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-20 px-6 max-w-6xl mx-auto border-t-2 border-outline/10">
      <div className="text-center mb-16">
        <div className="doodle-badge bg-brand-yellow mb-4 font-semibold">🧮 Budget Estimator</div>
        <h2 className="text-headline-xl text-primary mb-4">
          Calculate your cost instantly.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
          Transparent rates. Check off the digital solutions you need and see the budget update in real-time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Checkbox Options Column (Spans 2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="font-headline text-2xl font-bold mb-2 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" /> Check your requirements:
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((option) => {
              const isSelected = selectedIds.includes(option.id);
              return (
                <div
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`sketchy-card p-4 cursor-pointer select-none transition-all ${
                    isSelected 
                      ? "bg-brand-blue/30 translate-y-[-2px] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]" 
                      : "bg-white hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Checkbox */}
                    <div className={`w-5 h-5 mt-0.5 shrink-0 border-2 border-primary rounded flex items-center justify-center ${
                      isSelected ? "bg-primary" : "bg-white"
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center gap-2 mb-1">
                        <span className="font-bold text-sm leading-tight">{option.name}</span>
                        <span className="font-headline font-bold text-xs bg-white border border-primary px-1.5 py-0.5 rounded shadow-[1px_1px_0px_0px_#000]">
                          +${option.price}
                        </span>
                      </div>
                      <p className="text-on-surface-variant text-xs leading-relaxed">{option.description}</p>
                      
                      {/* Page Stepper */}
                      {option.id === "multipage" && isSelected && (
                        <div className="mt-3 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                          <span className="text-xs font-bold">Number of pages:</span>
                          <div className="flex items-center border border-primary rounded bg-white">
                            <button
                              onClick={() => setExtraPagesCount(Math.max(1, extraPagesCount - 1))}
                              className="px-2 py-0.5 font-bold hover:bg-gray-100 border-r border-primary text-xs"
                            >
                              -
                            </button>
                            <span className="px-3 py-0.5 font-bold text-xs">{extraPagesCount}</span>
                            <button
                              onClick={() => setExtraPagesCount(extraPagesCount + 1)}
                              className="px-2 py-0.5 font-bold hover:bg-gray-100 border-l border-primary text-xs"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Cost summary card */}
        <div className="sketchy-card p-6 bg-brand-yellow/10 border-primary relative md:sticky md:top-24">
          <div className="absolute top-[-15px] right-6 doodle-badge bg-brand-yellow font-semibold">
            🧾 Estimate
          </div>
          
          <h3 className="font-headline text-2xl font-bold mb-4 mt-2">Total Budget</h3>
          
          {/* Price display */}
          <div className="border-2 border-dashed border-primary rounded-lg p-4 bg-white mb-6 text-center shadow-[1px_1px_0px_0px_rgba(26,26,26,1)]">
            {hasDiscount && (
              <span className="text-xs text-red-500 font-extrabold line-through block mb-1">
                ${totalPrice + discountAmount}
              </span>
            )}
            <span className="font-headline text-5xl font-extrabold tracking-tight">
              ${totalPrice}
            </span>
            <span className="text-xs text-on-surface-variant block mt-1 font-bold">One-Time Rate</span>
          </div>

          {/* Bundle Alert */}
          {hasDiscount ? (
            <div className="bg-green-50 border-2 border-green-500 text-green-700 text-xs font-bold rounded-lg p-2.5 mb-6 text-center">
              🎉 Bundle Discount Applied! <br /> Saved 15% (-${discountAmount})
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-primary/50 text-on-surface-variant text-xs font-medium rounded-lg p-2.5 mb-6 text-center">
              💡 Tip: Select 3 or more services to unlock a <span className="font-bold text-primary">15% bundle discount</span>!
            </div>
          )}

          <div className="text-xs font-semibold text-gray-700 flex flex-col gap-2 mb-6 border-b border-dashed border-primary/30 pb-4">
            <div className="flex justify-between">
              <span>Services Selected:</span>
              <span>{selectedIds.length}</span>
            </div>
            {selectedIds.includes("multipage") && (
              <div className="flex justify-between">
                <span>Extra Pages count:</span>
                <span>{extraPagesCount} page(s)</span>
              </div>
            )}
          </div>

          <button
            onClick={handleApplyToTicket}
            className="keycap-button keycap-button-primary w-full text-sm py-3 justify-center"
          >
            Lock in Price <ArrowRight className="w-4 h-4 ml-1.5 inline" />
          </button>
        </div>
      </div>
    </section>
  );
}
