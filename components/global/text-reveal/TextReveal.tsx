import React from 'react';
import styles from './TextReveal.module.scss';
// import Script from 'next/script';
import { useEffect } from 'react';

const TextReveal = ({ text }) => {
  useEffect(() => {
    const textReveals = [...document.querySelectorAll('.text_reveal')];

    textReveals.forEach((text) => {
      // eslint-disable-next-line
      const string = text.innerHTML;
      let html = '';
      for (let i = 0; i < string.length; i++) {
        html += `<span>${string[i]}</span>`;
      }
      text.innerHTML = html;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
            setTimeout(
              () => {
                span.style.transform = `translateY(0)`;
              },
              (idx + 1) * 50
            );
          });
        }
      });
    });

    textReveals.forEach((text) => observer.observe(text));

    // Clean up the observer when the component unmounts
    return () => {
      textReveals.forEach((text) => observer.unobserve(text));
      observer.disconnect();
    };
  }, []);

  return <p className={`${styles.textReveal} text_reveal`}>{text}</p>;
};

export default TextReveal;
