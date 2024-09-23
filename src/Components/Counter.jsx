import '../css/Counter.css';
import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [carServiceCount, setCarServiceCount] = useState(0);
  const [otherCount1, setOtherCount1] = useState(0);
  const [otherCount2, setOtherCount2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const counterRef = useRef(null);

  const animateCounter = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 100);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counterInterval);
        setter(target);
      } else {
        setter(Math.floor(start));
      }
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounter(setCarServiceCount, 200, 2000); // Example target value and duration
        animateCounter(setOtherCount1, 150, 2000);
        animateCounter(setOtherCount2, 100, 2000);
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div 
      className="Counters-page w100 h-auto flex flex-col items-center justify-center"
      ref={counterRef}
      style={{ minHeight: '100vh', width: '100%' }} // Ensuring full height and width
    >
      <div className="counter">
        <h1>{carServiceCount}</h1>
        <p>Car Services</p>
      </div>
      <div className="counter">
        <h1>{otherCount1}</h1>
        <p>Other Metric 1</p>
      </div>
      <div className="counter">
        <h1>{otherCount2}</h1>
        <p>Other Metric 2</p>
      </div>
    </div>
  );
};

export default Counter;
