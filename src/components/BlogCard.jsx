import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

function BlogCard({ post }) {
  const { id, title, excerpt, image, category, date, author } = post;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card group h-full flex flex-col"
    >
      <Link to={`/blog/${id}`} className="block overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </Link>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <Link to={`/blog/${id}`} className="block mb-2">
          <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
        
        <div className="mt-auto flex items-center">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium">{author.name}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCard;