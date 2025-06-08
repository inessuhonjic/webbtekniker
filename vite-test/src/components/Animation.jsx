import { useEffect } from 'react';
import anime from 'animejs/lib/anime.cjs';

export default function Animation() {
  useEffect(() => {
    anime({
      targets: 'h2 span',
      translateY: [
        { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
        { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        value: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50,
      easing: 'easeInOutCirc',
      loop: true,
      loopDelay: 1000
    });
  }, []);

  return (
    <h2 className="large grid centered square-grid text-xl">
      <span>H</span>
      <span>E</span>
      <span>L</span>
      <span>L</span>
      <span>O</span>
      <span>&nbsp;</span>
      <span>W</span>
      <span>O</span>
      <span>R</span>
      <span>L</span>
      <span>D</span>
    </h2>
  );
}
