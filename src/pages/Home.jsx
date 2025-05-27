import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Wind, Droplets, Trees } from 'lucide-react';

import SectionTransition from '../components/SectionTransition';
import StatCounter from '../components/StatCounter';

function Home() {
  return (
    <>
      <Helmet>
        <title>LeafLog - Environmental Awareness</title>
        <meta name="description" content="Promoting environmental awareness and nature preservation through education and community engagement." />
      </Helmet>

      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-secondary/40"></div>
        </div>

        {/* Floating Leaves Animation (Decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-accent/30"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: -20,
                rotate: 0,
                opacity: 0.8
              }}
              animate={{
                y: "120vh",
                rotate: 360,
                x: `calc(${Math.random() * 100 - 50}% + ${Math.sin(i) * 100}px)`,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            >
              <Leaf size={20 + Math.random() * 30} />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nurturing Nature, <br />Sustaining Life
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in preserving our planet's precious ecosystems through education,
              conservation, and community action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
              <Link to="/tracker" className="btn-ghost text-white border-white hover:border-primary">
                Track Activities
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Our Mission</h2>
            <p className="section-subtitle text-center">
              We're dedicated to promoting environmental awareness and conservation through
              education, community engagement, and sustainable practices.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SectionTransition delay={0.2}>
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Environmental Education</h3>
                <p className="text-gray-600">
                  Spreading knowledge about environmental conservation through informative content,
                  workshops.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.4}>
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Trees className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Forest Preservation</h3>
                <p className="text-gray-600">
                  Protecting natural habitats, promoting reforestation, and advocating for
                  sustainable forest management policies.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.6}>
              <div className="text-center p-6 rounded-lg shadow-md bg-white">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Wind className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Climate Action</h3>
                <p className="text-gray-600">
                  Taking practical steps to reduce carbon footprints and mitigate the effects
                  of climate change on our environment.
                </p>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container-custom">
          <SectionTransition>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value="1243" label="Trees Planted" suffix="+" />
              <StatCounter value="46" label="Clean-up Events" />
              <StatCounter value="3720" label="Volunteer Hours" suffix="+" />
              <StatCounter value="18" label="Protected Areas" />
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/80"></div>

        <div className="container-custom relative z-10 text-center">
          <SectionTransition>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Environmental Community
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Be part of a growing movement to protect and restore our natural environment.
              Together, we can make a significant impact.
            </p>

            <Link to="/contact" className="btn bg-white text-secondary hover:bg-background">
              Get Involved
            </Link>
          </SectionTransition>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Latest Articles</h2>
            <p className="section-subtitle text-center">
              Stay informed with our latest news and insights on environmental topics.
            </p>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SectionTransition delay={0.2}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
                    alt="Forest conservation"
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <span className="text-sm text-gray-500 mb-2">May 15, 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    The Importance of Forest Conservation
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    Exploring why preserving our forests is critical for biodiversity and climate stability.
                  </p>
                  <Link to="/blog" className="mt-4 text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.4}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3692550/pexels-photo-3692550.jpeg"
                    alt="Sustainable living"
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <span className="text-sm text-gray-500 mb-2">May 8, 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    10 Steps to a More Sustainable Lifestyle
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    Simple, actionable tips to reduce your environmental footprint in everyday life.
                  </p>
                  <Link to="/blog" className="mt-4 text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.6}>
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1698692019280-1c17d47085cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFRyZWUlMjBwbGFudGluZyUyMGluaXRpYXRpdmV8ZW58MHx8MHx8fDI%3D"
                    alt="Tree planting initiative"
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <span className="text-sm text-gray-500 mb-2">April 27, 2025</span>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    Community Tree Planting Initiative Launches
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    Join our new program to help restore forest cover in urban and rural areas.
                  </p>
                  <Link to="/blog" className="mt-4 text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </SectionTransition>
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="btn-ghost">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;