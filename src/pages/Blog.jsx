import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import SectionTransition from '../components/SectionTransition';
import BlogCard from '../components/BlogCard';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Forest Conservation',
    excerpt: 'Exploring why preserving our forests is critical for biodiversity and climate stability.',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    category: 'Conservation',
    date: 'May 15, 2025',
    author: {
      name: 'Emma Johnson',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 2,
    title: '10 Steps to a More Sustainable Lifestyle',
    excerpt: 'Simple, actionable tips to reduce your environmental footprint in everyday life.',
    image: 'https://images.pexels.com/photos/3692550/pexels-photo-3692550.jpeg',
    category: 'Lifestyle',
    date: 'May 8, 2025',
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 3,
    title: 'Community Tree Planting Initiative Launches',
    excerpt: 'Join our new program to help restore forest cover in urban and rural areas.',
    image: 'https://images.unsplash.com/photo-1698692019280-1c17d47085cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fFRyZWUlMjBwbGFudGluZyUyMGluaXRpYXRpdmV8ZW58MHx8MHx8fDI%3D',
    category: 'Events',
    date: 'April 27, 2025',
    author: {
      name: 'Sophia Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 4,
    title: 'The Hidden Life of Trees: Book Review',
    excerpt: 'A fascinating look at the complex social networks of trees and forest ecosystems.',
    image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
    category: 'Reviews',
    date: 'April 15, 2025',
    author: {
      name: 'David Okafor',
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 5,
    title: 'Climate Change and Its Impact on Forest Ecosystems',
    excerpt: 'Understanding how rising temperatures affect tree species and forest biodiversity.',
    image: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg',
    category: 'Climate',
    date: 'April 3, 2025',
    author: {
      name: 'Emma Johnson',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 6,
    title: 'Indigenous Approaches to Forest Management',
    excerpt: 'Learning from traditional ecological knowledge and practices for sustainable forest care.',
    image: 'https://images.pexels.com/photos/4033340/pexels-photo-4033340.jpeg',
    category: 'Conservation',
    date: 'March 22, 2025',
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
];

// Available categories for filtering
const categories = [
  'All',
  'Conservation',
  'Lifestyle',
  'Climate',
  'Events',
  'Reviews',
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - LeafLog</title>
        <meta name="description" content="Latest articles and insights on environmental conservation, sustainable living, and forest preservation." />
      </Helmet>

      <PageHeader
        title="Environmental Blog"
        subtitle="Stay informed with our latest articles on conservation, sustainability, and environmental initiatives."
        image="https://images.pexels.com/photos/3652931/pexels-photo-3652931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-background">
        <div className="container-custom">
          {/* Search and Filter */}
          <SectionTransition>
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Search */}
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="md:w-72">
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 pl-12 appearance-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <SectionTransition key={post.id} delay={index * 0.1}>
                  <BlogCard post={post} />
                </SectionTransition>
              ))}
            </div>
          ) : (
            <SectionTransition>
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            </SectionTransition>
          )}

          {/* Pagination */}
          <SectionTransition>
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-lg bg-primary text-white">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-primary/10">
        <div className="container-custom">
          <SectionTransition>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest articles, events, and environmental initiatives delivered directly to your inbox.
              </p>
            </div>

            <form className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </SectionTransition>
        </div>
      </section>
    </>
  );
}

export default Blog;