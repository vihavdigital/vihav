"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import ProjectSection from "@/components/home/ProjectSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import PortfolioVideoShowcase from "@/components/home/PortfolioVideoShowcase";
import BrandsWeWorkWith from "@/components/home/BrandsWeWorkWith";
import TestimonialSection from "@/components/home/TestimonialSection";
import TextReveal from "@/components/ui/TextReveal";
import { PROJECTS } from "@/data/projects";
// import { PHILOSOPHY_SLIDES } from "@/data/philosophySlides";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { Trophy, Award, Star } from "lucide-react";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Footer = dynamic(() => import('@/components/layout/Footer'));

// Specific Order for Home Page as per User Request
const HOME_PROJECT_IDS = [
  "keystone-select",
  "keystone-niwa",
  "keystone-51",
  "keystone-clermont",
  "vihav-elinor",
  "vihav-parvarish-res",
  "vihav-cbd-res",
  "vihav-spring-woods",
  "keystone-48",
  "keystone-skyvillas-xl",
  "keystone-30"
];

// Specific Order for Commercial Projects as per User Request
const HOME_COMMERCIAL_IDS = [
  "supremus-iii",
  "vihav-cbd",
  "vs-monolith",
  "vihav-supremus-2",
  "vihav-parvarish-comm",
  "vtc",
  "supremus",
  "wealth-square",
  "vbs",
  "skyone",
  "elite-square"
];

export default function Home() {
  const router = useRouter();
  const orderedResidentialProjects = HOME_PROJECT_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);
  const orderedCommercialProjects = HOME_COMMERCIAL_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean);

  // Combine for "All" view - prevent duplicates (e.g. Parvarish)
  const allFeatured = [...orderedResidentialProjects];
  orderedCommercialProjects.forEach(p => {
    if (!allFeatured.find(existing => existing.id === p.id)) {
      allFeatured.push(p);
    }
  });



  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold-400 selection:text-luxury-black transition-colors duration-500">
      <Header />
      <Hero />

      {/* Intro Statement - Editorial Style */}
      <section className="py-24 md:py-32 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-8 block"
          >
            The Vihav Legacy
          </motion.span>

          <div className="mb-10 min-h-[120px]">
            <TextReveal
              as="h2"
              text="Designing timeless spaces with Enduring Values."
              className="justify-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            For over three decades, <strong>Vihav Group</strong> has established itself as a premier <strong>real estate developer in Vadodara</strong>. We don't just build structures; we curate lifestyles defined by privacy, exclusivity, and uncompromising craft. From <strong>ultra-luxury penthouses</strong> to <strong>premium commercial spaces</strong>, our legacy is built on trust and a commitment to transforming the city's skyline.
          </motion.p>
        </div>
      </section>

      {/* Separate Enquiry Section */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >

            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-12 uppercase tracking-widest text-center">Begin Your Conversation</h3>
            <div className="bg-background p-8 md:p-12 rounded-none border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_70px_-15px_rgba(0,0,0,0.15)] hover:border-gold-400/30 transition-all duration-500">
              <EnquiryForm
                className="text-left"
                variant="minimal"
                onSuccess={() => router.push('/thank-you/general')}
                contextData={{ srd: "681f33a158f1e7d028b615c5" }}
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Featured Award Section */}
      <section className="py-24 px-6 container mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Content (Replaced Video) */}
          {/* Image Content with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Background Glow & Stardust Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-3xl -z-10 pointer-events-none" />

            {/* Stardust Particles (Decorative Stars) */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 text-gold-400/30 -z-10"
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 text-gold-400/20 -z-10"
            >
              <Star size={32} fill="currentColor" />
            </motion.div>
            <motion.div
              animate={{ opacity: [0, 0.5, 0], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute -top-10 left-1/2 text-gold-400/20 -z-10"
            >
              <Star size={16} fill="currentColor" />
            </motion.div>

            {/* The Framed Container */}
            {/* We use border-neutral-900 for the thick inner "mat" and ring-gold-400 for the outer frame edge */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] border-[16px] border-neutral-900 ring-2 ring-gold-400/60 bg-neutral-900">
              <Image
                src="/images/hurun-certificate.webp" /* ⚠️ Make sure path is correct */
                alt="Vihav Group Award Certificate"
                fill
                // Added a thin light border to the image itself to pop it off the dark mat
                className="object-cover border border-white/10"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-gold-400/30 bg-gold-400/10 px-4 py-2 rounded-full mb-8">
              <Award size={16} className="text-gold-400" />
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Hurun India</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-foreground">
              Excellence in Lifestyle Real Estate Development
            </h2>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                <strong>Vihav Group Wins Hurun India Award.</strong> From Vadodara to national acclaim, Vihav Group has been honoured with the prestigious "Excellence in Lifestyle Real Estate Development – Gujarat Award 2025".
              </p>
              <p>
                “Vihav has been recognised by the Hurun Report for its commitment to excellence in real estate development. This recognition reflects our focus on quality construction, thoughtful design, and consistent value creation across residential and commercial projects in Vadodara.”

              </p>
              {/* <div className="bg-secondary border-l-2 border-gold-400 p-6 mt-8">
                <p className="text-foreground italic">
                  "This accolade is a testament to Vihav’s role in shaping Vadodara’s skyline and placing it firmly on India’s map of excellence."
                </p>
              </div> */}
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <span className="block text-2xl font-serif text-foreground mb-1">2025</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Year</span>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <span className="block text-2xl font-serif text-foreground mb-1">Hurun India</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Organizer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Unified Project Discovery Section */}
      <ProjectSection
        projects={allFeatured}
        residentialProjects={orderedResidentialProjects}
        commercialProjects={orderedCommercialProjects}
        showAllTab={false}
      />

      {/* Featured Project Section (Minimal) */}
      <section className="container mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <div className="h-[2px] w-12 md:w-24 bg-gold-400 shrink-0" />
          <span className="text-gold-400 text-lg md:text-3xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] whitespace-nowrap">
            Featured Project
          </span>
        </motion.div>
      </section>
      <FeaturedProject />

      {/* Brands We Work With */}
      <BrandsWeWorkWith />

      {/* Portfolio Video Showcase (New Design) */}
      <PortfolioVideoShowcase projects={PROJECTS} />



      {/* SEO Content Block - Luxury Dark Edition */}
      <section className="relative py-32 bg-[#050505] text-white overflow-hidden border-t border-white/5">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Giant Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12vw] md:text-[15vw] font-bold text-white/[0.02] leading-none tracking-tighter whitespace-nowrap">
            VADODARA
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-6 py-2 rounded-full mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.2em]">The Authority in Luxury</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Transforming the Urban Skyline of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">Vadodara</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-4 max-w-3xl mx-auto">
              Through disciplined planning and quality-driven execution, Vihav delivers residential and commercial real estate projects that contribute to Vadodara’s growing urban landscape and long-term development.
            </p>

            {/* Close max-w-5xl, keep inside container */}
          </div>

          {/* Skyline Image - Spanning Container Width */}
          <div className="relative h-[80px] md:h-[250px] w-full mt-10 opacity-60">
            <Image
              src="/images/new_white_skyline.png"
              alt="Vadodara Skyline"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 w-full">
            {["New Alkapuri", "Bhayli", "Vasna-Bhayli Road", "Gotri"].map((location, index) => (
              <div key={index} className="flex items-center gap-3 group">
                {/* Decorative Dot: pulsing slightly */}
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors duration-300"></span>
                <span className="text-sm md:text-base text-gray-400 font-light tracking-wide uppercase group-hover:text-gold-200 transition-colors duration-300">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Light Theme */}
      <TestimonialSection />

      <Footer />
    </main >
  );
}