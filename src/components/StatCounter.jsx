import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function StatCounter({ value, label, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const incrementTime = duration / end;
      
      let timer;
      
      const updateCount = () => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      };
      
      timer = setInterval(updateCount, incrementTime);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}

export default StatCounter;