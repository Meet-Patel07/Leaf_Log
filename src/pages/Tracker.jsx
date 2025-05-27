import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Plus, Filter, X } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import SectionTransition from '../components/SectionTransition';
import ActivityCard from '../components/ActivityCard';

// Sample activities data
const activitiesData = [
  {
    id: 1,
    title: 'Community Tree Planting',
    date: 'June 5, 2025',
    location: 'Green Valley Park',
    participants: 45,
    image: 'https://images.pexels.com/photos/6954204/pexels-photo-6954204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Planted 200 native tree saplings in collaboration with the local community to restore forest cover.',
    type: 'Planting',
  },
  {
    id: 2,
    title: 'Beach Cleanup Drive',
    date: 'May 22, 2025',
    location: 'Sunset Beach',
    participants: 32,
    image: 'https://images.pexels.com/photos/2682462/pexels-photo-2682462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Collected over 120kg of plastic waste and debris from the coastline to protect marine ecosystems.',
    type: 'Cleanup',
  },
  {
    id: 3,
    title: 'Forest Conservation Workshop',
    date: 'May 10, 2025',
    location: 'Community Center',
    participants: 28,
    image: 'https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Educational workshop on forest preservation techniques and sustainable management practices.',
    type: 'Education',
  },
  {
    id: 4,
    title: 'Wildlife Habitat Monitoring',
    date: 'April 28, 2025',
    location: 'Oakwood Reserve',
    participants: 12,
    image: 'https://images.pexels.com/photos/924694/pexels-photo-924694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Monitoring wildlife corridors and collecting data on species movement and habitat health.',
    type: 'Monitoring',
  },
  {
    id: 5,
    title: 'River Restoration Project',
    date: 'April 15, 2025',
    location: 'Silver Creek',
    participants: 38,
    image: 'https://images.pexels.com/photos/5273634/pexels-photo-5273634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Restored riverbank vegetation and removed invasive species to improve water quality and habitat.',
    type: 'Restoration',
  },
  {
    id: 6,
    title: 'Eco-Friendly Garden Setup',
    date: 'April 3, 2025',
    location: 'Urban Community Garden',
    participants: 25,
    image: 'https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Created a community garden with native plants to support local pollinators and biodiversity.',
    type: 'Planting',
  },
];

// Activity types for filtering
const activityTypes = [
  'All',
  'Planting',
  'Cleanup',
  'Education',
  'Monitoring',
  'Restoration',
];

function Tracker() {
  const [activities, setActivities] = useState(activitiesData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  
  // Filter activities based on type
  const filteredActivities = activeFilter === 'All'
    ? activities
    : activities.filter(activity => activity.type === activeFilter);
  
  // Toggle new activity form
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  
  // Handle form submission (mock functionality)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would save the new activity
    setShowForm(false);
  };

  return (
    <>
      <Helmet>
        <title>Activity Tracker - LeafLog</title>
        <meta name="description" content="Track environmental activities, tree planting events, cleanups, and conservation efforts." />
      </Helmet>

      <PageHeader 
        title="Activity Tracker" 
        subtitle="Monitor and log environmental activities, conservation efforts, and community events."
        image="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-2">Environmental Activities</h2>
                <p className="text-gray-600">Track and manage conservation efforts and community events.</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleForm}
                className="btn-primary flex items-center mt-4 md:mt-0"
              >
                <Plus size={18} className="mr-2" />
                Log New Activity
              </motion.button>
            </div>
          </SectionTransition>
          
          {/* Activity Entry Form (Toggle Display) */}
          {showForm && (
            <SectionTransition>
              <div className="bg-white rounded-xl shadow-md p-6 mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-secondary">Log a New Activity</h3>
                  <button onClick={toggleForm} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Activity Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Tree Planting Event"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Activity Type
                      </label>
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50">
                        <option value="">Select a type</option>
                        {activityTypes.filter(type => type !== 'All').map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="MM/DD/YYYY"
                          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Green Valley Park"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Participants
                      </label>
                      <input
                        type="number"
                        placeholder="e.g., 25"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Image (Optional)
                      </label>
                      <input
                        type="file"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        rows="4"
                        placeholder="Describe the activity, goals, and outcomes..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Save Activity
                    </button>
                  </div>
                </form>
              </div>
            </SectionTransition>
          )}
          
          {/* Activity Filters */}
          <SectionTransition>
            <div className="flex flex-wrap gap-3 mb-8">
              {activityTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === type
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </SectionTransition>
          
          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <SectionTransition key={activity.id} delay={index * 0.1}>
                <ActivityCard activity={activity} />
              </SectionTransition>
            ))}
          </div>
          
          {filteredActivities.length === 0 && (
            <SectionTransition>
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">No activities found</h3>
                <p className="text-gray-600">Try selecting a different filter or log a new activity</p>
              </div>
            </SectionTransition>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-secondary/5">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="text-2xl font-bold text-secondary text-center mb-12">Activity Summary</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-primary mb-2">6</p>
                <p className="text-gray-700">Total Activities</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-primary mb-2">180</p>
                <p className="text-gray-700">Participants</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-primary mb-2">200</p>
                <p className="text-gray-700">Trees Planted</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-primary mb-2">120kg</p>
                <p className="text-gray-700">Waste Collected</p>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="section bg-background">
        <div className="container-custom">
          <SectionTransition>
            <h2 className="section-title text-center">Upcoming Activities</h2>
            <p className="section-subtitle text-center">
              Join our scheduled environmental initiatives and make a positive impact.
            </p>
          </SectionTransition>
          
          <div className="mt-12 space-y-6">
            <SectionTransition delay={0.2}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-primary p-6 flex flex-col justify-center items-center text-white">
                    <p className="text-2xl font-bold">JUN 15</p>
                    <p>2025</p>
                  </div>
                  
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      Urban Forest Restoration
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join us in restoring the urban forest with native tree species to enhance biodiversity and improve air quality.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1 text-primary" />
                        <span>June 15, 2025 - 9:00 AM</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Filter size={16} className="mr-1 text-primary" />
                        <span>Planting</span>
                      </div>
                    </div>
                    
                    <button className="btn-primary mt-4">
                      Register to Join
                    </button>
                  </div>
                </div>
              </div>
            </SectionTransition>
            
            <SectionTransition delay={0.3}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-secondary p-6 flex flex-col justify-center items-center text-white">
                    <p className="text-2xl font-bold">JUN 22</p>
                    <p>2025</p>
                  </div>
                  
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      Coastal Cleanup Initiative
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Help clean plastic and debris from our coastlines to protect marine life and maintain healthy ocean ecosystems.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1 text-primary" />
                        <span>June 22, 2025 - 8:30 AM</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Filter size={16} className="mr-1 text-primary" />
                        <span>Cleanup</span>
                      </div>
                    </div>
                    
                    <button className="btn-primary mt-4">
                      Register to Join
                    </button>
                  </div>
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracker;