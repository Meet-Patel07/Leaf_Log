import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import SectionTransition from '../components/SectionTransition';

function About() {
  // Timeline data for organization history
  const timeline = [
    {
      year: 2020,
      title: 'LeafLog Founded',
      description: 'Started as a small blog focused on raising awareness about environmental issues.',
    },
    {
      year: 2021,
      title: 'First Community Project',
      description: 'Organized our first tree planting initiative with 50 volunteers and planted 200 trees.',
    },
    {
      year: 2022,
      title: 'Environmental Education Program',
      description: 'Launched educational workshops for schools and community centers.',
    },
    {
      year: 2023,
      title: 'Expanded to 5 Regions',
      description: 'Grew our presence across the country with regional chapters and local leaders.',
    },
    {
      year: 2024,
      title: 'Forest Preservation Partnership',
      description: 'Partnered with national parks and forest services to support conservation efforts.',
    },
    {
      year: 2025,
      title: 'Digital Platform Launch',
      description: 'Created an interactive platform to track environmental activities and impact.',
    },
  ];

  // Team members data
  const team = [
    {
      name: 'Emma Johnson',
      role: 'Founder & Executive Director',
      bio: 'Environmental scientist with 15 years of experience in conservation and sustainability.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Conservation',
      bio: 'Forest ecology specialist focusing on biodiversity preservation and habitat restoration.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Community Engagement',
      bio: 'Passionate about connecting people with nature through education and volunteer programs.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David Okafor',
      role: 'Environmental Policy Advisor',
      bio: 'Advocates for policy changes to protect natural resources and promote sustainability.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - LeafLog</title>
        <meta name="description" content="Learn about LeafLog's mission, history, and the team behind our environmental conservation efforts." />
      </Helmet>

      <PageHeader 
        title="About LeafLog" 
        subtitle="Our mission, history, and the passionate team behind our environmental initiatives."
        image="https://images.pexels.com/photos/6069544/pexels-photo-6069544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Mission Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionTransition direction="left">
              <img 
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team planting trees"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </SectionTransition>
            
            <SectionTransition direction="right">
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission & Vision</h2>
              
              <p className="text-gray-700 mb-4">
                At LeafLog, we're committed to preserving and restoring our natural environment through 
                education, community engagement, and sustainable practices. We believe that by 
                raising awareness about environmental issues and providing practical solutions, 
                we can inspire positive change at both individual and collective levels.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our vision is a world where humans live in harmony with nature, where forests thrive, 
                ecosystems flourish, and communities prioritize sustainability. We work toward this 
                future through collaborative conservation projects, education initiatives, and 
                advocacy for environmental policies.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-1/2 p-4 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-primary mb-2">Our Approach</h3>
                  <p className="text-sm">We combine grassroots action with science-based strategies to create lasting impact.</p>
                </div>
                
                <div className="w-1/2 p-4 bg-secondary/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary mb-2">Our Impact</h3>
                  <p className="text-sm">Measurable outcomes in forest preservation, education, and community engagement.</p>
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-secondary/5">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Our Journey</h2>
            <p className="section-subtitle text-center">
              From humble beginnings to a growing movement for environmental conservation.
            </p>
          </SectionTransition>
          
          <div className="mt-12 relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded"></div>
            
            {/* Timeline events */}
            <div className="space-y-12 relative z-10">
              {timeline.map((event, index) => (
                <SectionTransition 
                  key={event.year} 
                  delay={index * 0.2}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h3 className="text-xl font-semibold text-secondary">{event.title}</h3>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    </div>
                    
                    <div className="z-20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {event.year}
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </SectionTransition>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Meet Our Team</h2>
            <p className="section-subtitle text-center">
              Passionate individuals dedicated to making a positive environmental impact.
            </p>
          </SectionTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <SectionTransition key={member.name} delay={index * 0.2}>
                <div className="card overflow-hidden h-full">
                  <div className="overflow-hidden h-64">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </SectionTransition>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-secondary/5">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Our Core Values</h2>
          </SectionTransition>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SectionTransition delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-secondary mb-4">Environmental Stewardship</h3>
                <p className="text-gray-600">
                  We believe in taking responsibility for protecting and preserving our natural environment for future generations. 
                  This guides all our actions and initiatives.
                </p>
              </div>
            </SectionTransition>
            
            <SectionTransition delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-secondary mb-4">Community Collaboration</h3>
                <p className="text-gray-600">
                  We value inclusive partnerships with local communities, organizations, and individuals who share our passion for 
                  environmental conservation.
                </p>
              </div>
            </SectionTransition>
            
            <SectionTransition delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-secondary mb-4">Education & Awareness</h3>
                <p className="text-gray-600">
                  We're committed to spreading knowledge and raising awareness about environmental issues and sustainable practices through 
                  accessible education.
                </p>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container-custom text-center text-white">
          <SectionTransition>
            <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
              Whether you're passionate about forest conservation, climate action, or community education, 
              there's a place for you in our growing environmental movement.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-background"
            >
              Get Involved Today
            </motion.button>
          </SectionTransition>
        </div>
      </section>
    </>
  );
}

export default About;