"use client";

import { useEffect, useState } from "react";
import { Send, FileText, CheckCircle2, RefreshCw } from "lucide-react";

export default function TicketForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatorQuote, setCalculatorQuote] = useState<{summary: string, price: number} | null>(null);

  // Load calculator quote from localStorage on mount
  useEffect(() => {
    const savedSummary = localStorage.getItem("esc_selected_services");
    const savedPrice = localStorage.getItem("esc_calculator_price");
    
    if (savedSummary && savedPrice) {
      setCalculatorQuote({
        summary: savedSummary,
        price: parseInt(savedPrice, 10),
      });
      setFormData(prev => ({
        ...prev,
        budget: `$${savedPrice}`,
        description: `I used the budget calculator. Selected option summary: ${savedSummary}. Let's do it!`
      }));
    }

    // Listener for custom events from the calculator
    const handleCalculatorFill = (e: Event) => {
      const customEvent = e as CustomEvent<{ summary: string; price: number }>;
      const { summary, price } = customEvent.detail;
      
      setCalculatorQuote({ summary, price });
      setFormData(prev => ({
        ...prev,
        budget: `$${price}`,
        description: `I used the budget calculator. Selected option summary: ${summary}. Let's do it!`
      }));
    };

    window.addEventListener("esc_calculator_filled", handleCalculatorFill);
    return () => window.removeEventListener("esc_calculator_filled", handleCalculatorFill);
  }, []);

  const handleClearQuote = () => {
    localStorage.removeItem("esc_selected_services");
    localStorage.removeItem("esc_calculator_price");
    setCalculatorQuote(null);
    setFormData(prev => ({
      ...prev,
      budget: "",
      description: ""
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;
    
    // Simulate API request
    setIsSubmitted(true);
    
    // Reset form after some time or keep show success state
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        budget: "",
        description: "",
      });
      setCalculatorQuote(null);
      localStorage.removeItem("esc_selected_services");
      localStorage.removeItem("esc_calculator_price");
    }, 5000);
  };

  return (
    <section id="ticket" className="py-20 px-6 max-w-3xl mx-auto border-t-3 border-dashed border-brand-charcoal">
      <div className="text-center mb-12">
        <div className="doodle-badge bg-brand-green mb-4">🎫 Digital Helpdesk</div>
        <h2 className="font-doodle text-4xl md:text-5xl font-bold mb-4">
          File a help ticket.
        </h2>
        <p className="text-gray-600 max-w-md mx-auto font-medium text-sm">
          Describe what you need, paste your code, or tell us about your brand. We review and email you back within 12 hours.
        </p>
      </div>

      <div className="doodle-box p-8 bg-white relative shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
        {/* Success Overlay */}
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-sketchy">
            <div className="w-16 h-16 rounded-full border-3 border-brand-charcoal bg-brand-green flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
              <CheckCircle2 className="w-10 h-10 text-brand-charcoal stroke-[2.5px]" />
            </div>
            <h3 className="font-doodle text-3xl font-bold mb-2">Ticket #ESC-{Math.floor(Math.random() * 9000 + 1000)} Submitted!</h3>
            <p className="text-gray-600 text-sm max-w-sm mb-6">
              Thank you! We received your ticket request. An engineer will email you shortly to kick off your project.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="doodle-btn text-xs bg-gray-50 py-1.5 px-4"
            >
              Submit Another Ticket
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* LlocalStorage Quote Alert Banner */}
            {calculatorQuote && (
              <div className="bg-brand-yellow/15 border-2 border-brand-yellow rounded-lg p-4 flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-sm font-bold text-brand-charcoal flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-brand-charcoal" />
                    Locked Quote Estimate: ${calculatorQuote.price}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 font-medium line-clamp-2">
                    {calculatorQuote.summary}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClearQuote}
                  className="text-xs font-bold text-gray-500 hover:text-brand-charcoal border-b border-dashed border-gray-400 hover:border-brand-charcoal shrink-0"
                >
                  Reset Calculator
                </button>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-doodle text-lg font-bold" htmlFor="name">
                  My Name is:
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Satoshi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="doodle-input"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-doodle text-lg font-bold" htmlFor="email">
                  Reach me at (email):
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. satellite@web.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="doodle-input"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 items-end">
              {/* Budget */}
              <div className="flex flex-col gap-2 sm:col-span-1">
                <label className="font-doodle text-lg font-bold" htmlFor="budget">
                  My Budget:
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="e.g. $99, Cheap, Flexible"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="doodle-input w-full"
                />
              </div>

              <div className="sm:col-span-2 text-xs text-gray-500 pb-2.5 font-semibold">
                ℹ️ Prefilled if you click &quot;Lock in Price&quot; in the Budget Calculator above!
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="font-doodle text-lg font-bold" htmlFor="description">
                Explain your problem or website details:
              </label>
              <textarea
                id="description"
                rows={5}
                required
                placeholder="I need a one-page site for my business... / My domain DNS isn't pointing properly... / Help me install this node script..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-3 border-brand-charcoal rounded-xl p-4 font-sans text-sm outline-none bg-white focus:border-brand-charcoal focus:shadow-[3px_3px_0px_0px_#FFE066] transition-all"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="doodle-btn bg-brand-yellow mt-4 py-3 justify-center">
              <Send className="w-5 h-5 mr-2 inline" /> Submit Ticket Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
