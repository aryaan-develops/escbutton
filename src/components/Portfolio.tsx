"use client";

import { useState } from "react";
import { ExternalLink, Layers, Monitor, Phone, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  cost: string;
  description: string;
  tags: string[];
  mockupType: "desktop" | "mobile";
  wireframeLines: number; // For drawing dummy skeletal blocks
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "The Coffee Spot",
      category: "Landing Page",
      cost: "$99 Flat",
      description: "Local specialty cafe landing page. Interactive digital menu and direct booking widgets.",
      tags: ["Next.js", "Tailwind CSS", "Map Integration"],
      mockupType: "desktop",
      wireframeLines: 4
    },
    {
      title: "FixMyBike",
      category: "Digital Help / Form",
      cost: "$149 Flat",
      description: "On-demand bicycle repair system with interactive custom booking form and SMS notification hooks.",
      tags: ["React Forms", "Vercel Hosting", "APIs"],
      mockupType: "mobile",
      wireframeLines: 5
    },
    {
      title: "DoodleStore",
      category: "Mini Shop",
      cost: "$299 Flat",
      description: "A super clean aesthetic store selling digital stickers. Integrated with Stripe payments.",
      tags: ["Stripe Checkout", "Product Grid", "Tailwind"],
      mockupType: "desktop",
      wireframeLines: 6
    },
    {
      title: "Portfolio CV",
      category: "Personal Website",
      cost: "$79 Flat",
      description: "Ultra-minimal CV and newsletter signup site for an illustrator. Custom doodle graphics.",
      tags: ["Static Export", "Responsive Layout", "Contact Hooks"],
      mockupType: "mobile",
      wireframeLines: 3
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto border-t-3 border-dashed border-brand-charcoal">
      <div className="text-center mb-16">
        <div className="doodle-badge bg-brand-blue mb-4">🎨 Our Doodle Sketches</div>
        <h2 className="font-doodle text-4xl md:text-5xl font-bold mb-4">
          Proof is in the wireframes.
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto font-medium">
          We keep code clean and designs minimal. Here are actual client websites built in Next.js and Tailwind, styled like blueprint sketches.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="doodle-box p-6 bg-white flex flex-col justify-between hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] transition-all">
            <div>
              {/* Wireframe Mockup Area */}
              <div className="border-2 border-brand-charcoal rounded-lg bg-gray-50 h-48 mb-6 overflow-hidden relative flex flex-col">
                {/* Mockup Header Bar */}
                <div className="border-b-2 border-brand-charcoal px-3 py-2 flex items-center justify-between bg-white text-xs">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full border border-brand-charcoal bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full border border-brand-charcoal bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full border border-brand-charcoal bg-green-400"></span>
                  </div>
                  <div className="border border-brand-charcoal rounded px-4 py-0.5 bg-gray-50 text-[10px] w-48 text-center overflow-hidden text-ellipsis whitespace-nowrap">
                    esc-project://{project.title.toLowerCase().replace(/\s+/g, "")}.local
                  </div>
                  <div>
                    {project.mockupType === "desktop" ? <Monitor className="w-3.5 h-3.5" /> : <Phone className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Wireframe Drawing Inside */}
                <div className="flex-1 p-4 flex gap-4 items-center justify-center">
                  {/* Left Column (Sketch Image Block) */}
                  <div className="w-24 h-24 shrink-0 border-2 border-dashed border-brand-charcoal bg-white relative flex items-center justify-center text-gray-300 font-doodle text-xl">
                    <span className="absolute text-[8px] top-1 left-1.5 text-gray-500 font-sans">IMAGE</span>
                    ✕
                  </div>

                  {/* Right Column (Sketch Text Lines) */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="h-4 bg-brand-yellow/30 border border-brand-charcoal rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 border border-dashed border-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 border border-dashed border-gray-300 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 border border-dashed border-gray-300 rounded w-4/6"></div>
                    
                    <div className="flex gap-2 mt-2">
                      <div className="w-8 h-4 rounded-full bg-brand-blue/30 border border-brand-charcoal"></div>
                      <div className="w-12 h-4 rounded-full bg-brand-pink/30 border border-brand-charcoal"></div>
                      <div className="w-6 h-4 rounded-full bg-brand-green/30 border border-brand-charcoal"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-doodle text-2xl font-bold">{project.title}</h3>
                </div>
                <span className="font-doodle text-lg font-bold border-2 border-brand-charcoal px-2.5 py-0.5 bg-brand-yellow rounded-lg shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                  {project.cost}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            </div>

            {/* Bottom details */}
            <div className="flex justify-between items-center border-t border-dashed border-brand-charcoal/20 pt-4 mt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-bold border border-brand-charcoal/30 bg-gray-100 rounded px-1.5 py-0.5">
                    #{t}
                  </span>
                ))}
              </div>
              <button className="text-sm font-bold flex items-center hover:underline text-brand-charcoal">
                Demo <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
