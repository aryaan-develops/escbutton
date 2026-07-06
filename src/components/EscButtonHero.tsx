"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Terminal } from "lucide-react";

export default function EscButtonHero() {
  const [isPressed, setIsPressed] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleInput, setConsoleInput] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "System booted. Press ESC or click the key to begin.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sound effect or haptic trigger (mocked visually)
  const triggerEscEffect = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
    
    setShowConsole(prev => {
      const next = !prev;
      if (next) {
        setConsoleLogs(current => [
          ...current,
          `> ESC pressed. Opening digital helper desk...`,
          `> Ready for your query. Type what you need (e.g. 'website', 'help', 'portfolio', 'cheap').`
        ]);
        // Focus input
        setTimeout(() => inputRef.current?.focus(), 100);
      } else {
        setConsoleLogs(current => [...current, `> ESC pressed. Closing helper desk.`]);
      }
      return next;
    });
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        triggerEscEffect();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleConsoleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consoleInput.trim()) return;

    const query = consoleInput.toLowerCase().trim();
    let response = "";

    if (query.includes("web") || query.includes("create") || query.includes("site")) {
      response = "Perfect! Scroll to our 'Budget Calc' to calculate a cheap rate for your website, or file a Ticket below.";
    } else if (query.includes("help") || query.includes("fix") || query.includes("bug")) {
      response = "Digital helper online! Let us fix your bugs, set up domains, or optimize SEO. Create a Ticket at the bottom.";
    } else if (query.includes("cheap") || query.includes("price") || query.includes("cost")) {
      response = "Our rates start at just $39! Toggle services in the Budget Calculator to see transparent pricing.";
    } else if (query.includes("portfolio") || query.includes("work")) {
      response = "We have added three featured projects (Fintech Dashboard, Task Flow, Web3 Identity). Scroll to 'Selected Work'!";
    } else if (query.includes("clear")) {
      setConsoleLogs([]);
      setConsoleInput("");
      return;
    } else {
      response = `Command '${consoleInput}' registered. Redirecting to manual ticket submission... Scroll to the Ticket form!`;
    }

    setConsoleLogs(current => [
      ...current,
      `user@esc-button:~$ ${consoleInput}`,
      `esc-bot: ${response}`
    ]);
    setConsoleInput("");
    
    // Auto-scroll input container
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 50);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Decorative Floating Background Keys */}
      <div className="floating-key top-24 left-10 text-4xl hidden lg:block">Esc</div>
      <div className="floating-key top-[480px] right-20 text-5xl hidden lg:block" style={{ transform: "rotate(8deg)" }}>Enter</div>
      <div className="floating-key bottom-24 left-20 text-3xl hidden lg:block" style={{ transform: "rotate(-12deg)" }}>Tab</div>
      <div className="floating-key top-[420px] left-12 text-2xl hidden lg:block" style={{ transform: "rotate(15deg)" }}>Cmd</div>

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="doodle-badge bg-brand-yellow mb-6 animate-sketchy shadow-sm font-semibold">
          ✨ Press &apos;ESC&apos; Key on your keyboard or click the button!
        </div>

        {/* Headline */}
        <h1 className="text-headline-xl md:text-[64px] text-primary mb-6 max-w-4xl leading-tight font-extrabold tracking-tight">
          Turning <span className="hand-drawn-underline">Ideas</span> into Digital Reality.
        </h1>

        {/* Tagline */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft precise, scalable, and visually compelling digital experiences. Bringing technical rigor to modern design without breaking the bank.
        </p>

        {/* Interactive Keyboard Keycap */}
        <div className="relative mb-12 h-44 flex items-center justify-center">
          <button
            onClick={triggerEscEffect}
            className={`w-36 h-36 flex flex-col justify-between p-4 keycap-esc ${
              isPressed ? "translate-y-[2px] shadow-[0_0px_0_0_#1a1c1c,0_2px_4px_rgba(0,0,0,0.1)]" : ""
            }`}
          >
            <span className="font-semibold text-sm text-gray-400 self-start">ESC</span>
            <span className="font-headline text-3xl font-extrabold text-primary self-center mb-2">esc</span>
            <span className="w-2 h-2 bg-brand-yellow rounded-full self-end animate-pulse border border-primary"></span>
          </button>
          
          {/* Pointing arrow */}
          <div className="absolute right-[-90px] top-[40%] hidden sm:block animate-bounce rotate-12">
            <span className="font-semibold text-xs text-gray-500 block">Click me!</span>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 relative z-20">
          <a href="#ticket" className="keycap-button keycap-button-primary text-lg px-10 py-4">
            Hire Me
          </a>
          <a href="#portfolio" className="keycap-button text-lg px-10 py-4 border-2 border-primary">
            View Portfolio
          </a>
        </div>

        {/* Interactive Command Drawer Console */}
        {showConsole && (
          <div className="w-full max-w-2xl text-left border-2 border-primary rounded-lg p-6 bg-primary text-white font-mono shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] mb-8 animate-sketchy">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Terminal className="w-4 h-4 text-brand-yellow" />
                <span>esc-command-center.sh</span>
              </div>
              <button 
                onClick={() => setShowConsole(false)} 
                className="text-gray-400 hover:text-white text-xs border border-gray-700 rounded px-1.5 py-0.5"
              >
                Close (ESC)
              </button>
            </div>
            
            <div className="h-44 overflow-y-auto mb-4 text-sm flex flex-col gap-1.5 scrollbar-thin scrollbar-thumb-gray-800">
              {consoleLogs.map((log, index) => (
                <div 
                  key={index} 
                  className={
                    log.startsWith("user@") 
                      ? "text-brand-blue" 
                      : log.startsWith("esc-bot:") 
                        ? "text-brand-yellow font-bold" 
                        : "text-gray-300"
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            <form onSubmit={handleConsoleSubmit} className="flex gap-2">
              <span className="text-brand-blue font-bold">user@esc-button:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={consoleInput}
                onChange={(e) => setConsoleInput(e.target.value)}
                placeholder="type 'website', 'help', 'portfolio', 'cheap'..."
                className="flex-1 bg-transparent outline-none border-b border-gray-700 focus:border-brand-yellow text-white"
              />
              <button type="submit" className="text-brand-yellow hover:underline text-sm font-bold">
                Run
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
