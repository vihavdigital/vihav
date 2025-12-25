"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProjectSection from "@/components/home/ProjectSection";
import TextReveal from "@/components/ui/TextReveal";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const residentialProjects = PROJECTS.filter(p => p.category === "Residential").slice(0, 3);
  const commercialProjects = PROJECTS.filter(p => p.category === "Commercial").slice(0, 3);

  return (
    <main className="min-h-screen bg-luxury-black text-white selection:bg-gold-400 selection:text-luxury-black">
      <Header />
      <Hero />

      {/* Intro Statement - Editorial Style */}
      <section className="py-32 md:py-48 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-8 block"
          >
            The Vihav Legacy
          </motion.span>

          <div className="mb-10 min-h-[120px]">
            <TextReveal
              text="Designing spaces that transcend time."
              className="justify-center font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            For over three decades, Vihav Group has been the silent architect behind some of the world's most desired addresses. We don't just build structures; we curate lifestyles defined by privacy, exclusivity, and uncompromising craft.
          </motion.p>
        </div>
      </section>

      {/* Residential Projects - Real Data */}
      <ProjectSection
        title="Residential Collections"
        subtitle="Curated Living"
        align="left"
        projects={residentialProjects.map(p => ({
          title: p.title,
          location: p.location,
          type: p.type,
          price: p.price,
          slug: p.slug,
          image: p.heroImage
        }))}
      />

      {/* Commercial Projects - Real Data */}
      <ProjectSection
        title="Commercial Spaces"
        subtitle="Corporate Excellence"
        align="right"
        projects={commercialProjects.map(p => ({
          title: p.title,
          location: p.location,
          type: p.type,
          price: p.price,
          slug: p.slug,
          image: p.heroImage
        }))}
      />

      {/* Immersive Philosophy Section */}
      <section className="relative py-32 bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Sticky Left Content */}
            <div className="lg:sticky lg:top-32 h-fit">
              <span className="text-gold-400 uppercase tracking-[0.25em] text-xs font-bold mb-6 block">Our Philosophy</span>
              <TextReveal
                text="Perfection is not an act, but a habit."
                className="font-serif text-5xl md:text-7xl text-white mb-12 leading-none"
              />
              <div className="space-y-12">
                <div>
                  <h4 className="text-white text-xl font-serif mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-gold-400"></span> Uncompromising Quality
                  </h4>
                  <p className="text-gray-400 pl-12 font-light leading-relaxed">
                    Our "backward integration" model allows us to control every aspect of construction, ensuring a level of precision that is rare in modern real estate.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-xl font-serif mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-gold-400"></span> Sustainable Innovation
                  </h4>
                  <p className="text-gray-400 pl-12 font-light leading-relaxed">
                    Pioneering green building practices that reduce environmental impact while enhancing the wellbeing of our residents.
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
