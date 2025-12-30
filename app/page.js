"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProjectSection from "@/components/home/ProjectSection";
import TextReveal from "@/components/ui/TextReveal";
import { PROJECTS } from "@/data/projects";
import EnquiryForm from "@/components/ui/EnquiryForm";
// import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  /* Projects are filtered internally by ProjectSection */

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
              text="Designing spaces that transcend time."
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
            For over three decades, Vihav Group has been the silent architect behind some of the world's most desired addresses. We don't just build structures; we curate lifestyles defined by privacy, exclusivity, and uncompromising craft.
          </motion.p>
        </div>
      </section>

      {/* SEO Content Block - Subtle & Contextual */}
      <section className="pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto border-l-2 border-gold-400 pl-6 md:pl-10 py-2">
          <h2 className="text-xl md:text-2xl font-serif text-foreground mb-4">Leading Real Estate Developer in Vadodara</h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4">
            Discover the finest selection of premium <strong>3BHK and 4BHK flats in Vadodara</strong> with Vihav Group.
            Renowned for crafting <strong>luxury homes</strong>, <strong>sky villas</strong>, and iconic <strong>commercial properties</strong>, we are committed to transforming the city's skyline with <strong>quality construction</strong> and <strong>innovative design</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Our portfolio includes prime developments in the city's most sought-after locations. Whether you seek a <strong>luxurious apartment in New Alkapuri</strong>, a <strong>spacious home in Bhayli</strong>, or a <strong>strategic commercial space on Vasna-Bhayli Road</strong> or <strong>Gotri</strong>, Vihav Group delivers unmatched value and lifestyle. Explore our range of <strong>ready-to-move</strong> and <strong>under-construction projects</strong> today.
          </p>
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
            <div className="bg-background/50 p-8 md:p-12 rounded-none border border-border hover:border-gold-400/30 transition-colors duration-500">
              <EnquiryForm className="text-left" variant="minimal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Award Section */}
      <section className="py-24 px-6 container mx-auto">
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
            {/* Background Glow Effect */}
            <div className="absolute -inset-20 bg-gradient-to-r from-gold-400/20 to-transparent blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />

            {/* The Framed Container */}
            {/* We use border-neutral-900 for the thick inner "mat" and ring-gold-400 for the outer frame edge */}
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] border-[16px] border-neutral-900 ring-2 ring-gold-400/60 bg-neutral-900">
              <Image
                src="/images/hurun-certificate.webp" /* ⚠️ Make sure path is correct */
                alt="Vihav Group Award Certificate"
                fill
                // Added a thin light border to the image itself to pop it off the dark mat
                className="object-cover border border-white/10"
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
                Presented by Hurun India, part of the globally renowned Hurun Report, the award recognises visionary companies setting benchmarks in business, lifestyle, and innovation. With forward-thinking leadership, cutting-edge design, and a deep understanding of lifestyle aspirations, Vihav Group creates spaces that blend culture with modernity.
              </p>
              <div className="bg-secondary border-l-2 border-gold-400 p-6 mt-8">
                <p className="text-foreground italic">
                  "This accolade is a testament to Vihav’s role in shaping Vadodara’s skyline and placing it firmly on India’s map of excellence."
                </p>
              </div>
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
      <ProjectSection projects={PROJECTS} />

      {/* Immersive Philosophy Section */}
      <section className="relative py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Sticky Left Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <h2 className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Our Philosophy</h2>
              <TextReveal
                text="Perfection is not an act, but a habit."
                className="font-serif text-5xl md:text-7xl text-foreground mb-12 leading-none"
              />
              <div className="space-y-12">
                <div>
                  <h3 className="text-foreground text-xl font-serif mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-gold-400"></span> Uncompromising Construction Quality
                  </h3>
                  <p className="text-muted-foreground pl-12 font-light leading-relaxed">
                    Our unique "backward integration" model ensures complete control over every aspect of construction. This guarantees that every <strong>luxury apartment in Vadodara</strong> we build meets a level of precision and durability that defines the Vihav standard in the real estate market.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-serif mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-gold-400"></span> Sustainable & Green Living
                  </h3>
                  <p className="text-muted-foreground pl-12 font-light leading-relaxed">
                    We pioneer <strong>green building practices</strong> to create <strong>sustainable luxury homes</strong>. Our designs prioritize energy efficiency and environmental harmony, ensuring that our <strong>3BHK and 4BHK flats</strong> offer not just comfort, but a healthier lifestyle for generations to come.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] bg-neutral-900 relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-80"
                  alt="Philosophy"
                />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="uppercase tracking-[0.2em] text-xs">Craftsmanship</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-square bg-neutral-800 relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-80"
                  alt="Detail"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
