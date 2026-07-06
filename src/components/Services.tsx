"use client";

import { Paintbrush, Terminal, Compass, ArrowDown } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  color: string;
}

export default function Services() {
  const servicesList: ServiceItem[] = [
    {
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      title: "Web Design",
      price: "From $99",
      description: "Crafting intuitive user interfaces that align with your brand. Focused on neat layout typography, keycap themes, and modern animations.",
      color: "bg-brand-pink"
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      title: "Development",
      price: "From $299",
      description: "Building robust, lightning-fast front-end architectures using Next.js, Tailwind CSS, TypeScript, and clean, hand-crafted code.",
      color: "bg-brand-blue"
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Digital Help",
      price: "From $39",
      description: "DNS domain setups, cloud deployments, code debugging, SEO optimization, automation scripts, and general technical strategy support.",
      color: "bg-brand-green"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto border-t-2 border-outline/10">
      <div className="text-center mb-16">
        <h2 className="text-headline-xl text-primary mb-4">My Services</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
          End-to-end digital product creation, from strategic foundation to pixel-perfect execution, built cheaply and fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {servicesList.map((service, index) => (
          <div key={index} className="sketchy-card p-8 text-center flex flex-col justify-between items-center relative">
            <div>
              {/* Icon Frame */}
              <div className={`w-16 h-16 mx-auto ${service.color} rounded-full flex items-center justify-center mb-6 border-2 border-primary shadow-sm`}>
                {service.icon}
              </div>

              {/* Title & Price */}
              <h3 className="text-headline-lg text-[22px] text-primary mb-2">{service.title}</h3>
              
              <div className="doodle-badge bg-white px-3 py-1 text-xs font-bold border-2 border-primary mb-4">
                {service.price}
              </div>

              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Calculator Banner Prompt */}
      <div className="mt-16 sketchy-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-full border-2 border-primary bg-brand-yellow flex items-center justify-center font-bold text-lg">
            ?
          </div>
          <div>
            <h4 className="font-headline text-xl font-bold">Need a custom feature combination?</h4>
            <p className="text-sm text-on-surface-variant font-medium">Use our budget estimator tool to custom-build your package price.</p>
          </div>
        </div>
        <a href="#calculator" className="keycap-button keycap-button-primary text-sm px-6 py-2.5">
          Go to Budget Calculator <ArrowDown className="w-4 h-4 ml-1.5 inline" />
        </a>
      </div>
    </section>
  );
}
