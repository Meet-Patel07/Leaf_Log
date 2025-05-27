import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';

function ActivityCard({ activity }) {
  const { title, date, location, participants, image, description } = activity;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="card overflow-hidden"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users size={16} className="mr-2 text-primary" />
            <span>{participants} participants</span>
          </div>
        </div>
        
        <p className="text-gray-700">{description}</p>
        
        <button className="btn-primary w-full mt-4">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default ActivityCard;