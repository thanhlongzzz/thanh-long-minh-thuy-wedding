import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const GoToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Go to top"
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-wedding-gold text-white shadow-lg flex items-center justify-center hover:scale-105 transform transition"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default GoToTop;