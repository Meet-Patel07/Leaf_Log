import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-primary inline-block mb-4"
        >
          <Leaf size={48} />
        </motion.div>
        <motion.h1 
          className="text-2xl font-semibold text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          LeafLog
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-secondary via-primary to-accent mt-4 rounded-full w-36 mx-auto"
        />
      </div>
    </div>
  );
}

export default Preloader;