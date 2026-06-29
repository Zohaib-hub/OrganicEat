import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show progress bar on route change
    setVisible(true);
    setProgress(15); // Start slightly filled

    // Animate to 80% to simulate loading
    const timer1 = setTimeout(() => {
      setProgress(80);
    }, 150);

    // Complete to 100% after a short delay
    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 400);

    // Fade out after reaching 100%
    const timer3 = setTimeout(() => {
      setVisible(false);
    }, 600);

    // Reset progress to 0 once fully hidden
    const timer4 = setTimeout(() => {
      setProgress(0);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-99999 pointer-events-none">
      <div
        className="h-full bg-[#63A714] shadow-[0_0_10px_#63A714,0_0_5px_#63A714] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? '200ms' : '800ms',
          opacity: visible ? 1 : 0
        }}
      />
    </div>
  );
}
