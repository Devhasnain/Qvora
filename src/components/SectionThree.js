// components/Timeline.js

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline animation
    gsap.to(timelineRef.current, {
      x: () => -(timelineRef.current.offsetWidth - window.innerWidth),
      ease: 'power2',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'left left',
        end: 'right right',
        pin:true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={timelineRef}
      className="flex flex-no-wrap overflow-x-auto"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="w-full h-[100vh] flex-shrink-0 mr-4 bg-gray-300"
        >
          Timeline Item {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
