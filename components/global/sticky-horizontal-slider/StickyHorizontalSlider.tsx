import React, { useRef } from 'react';
import styles from './StickyHorizontalSlider.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
// import { API_URL } from 'config/index';

const StickyHorizontalSlider = ({ props }) => {
  const containerRef = useRef(null);
  const containerInnerRef = useRef(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280) {
      const container = containerRef.current;
      const elementWrapper = containerInnerRef.current;

      const horLength = elementWrapper.scrollWidth;
      const distFromTop = container.offsetTop + 300;
      const scrollDistance = distFromTop + horLength - windowWidth;

      container.style.height = horLength - windowWidth / 3 + 'px';

      const onScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
          elementWrapper.style.transform =
            'translateX(-' + (scrollTop - distFromTop) + 'px)';
        }
      };

      const obr = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          window.addEventListener('scroll', onScroll);
        } else {
          window.removeEventListener('scroll', onScroll);
        }
      });
      obr.observe(container);
    }
  }, []);

  return (
    <section
      className={`${styles.stickyHorizontalSlider} sticky-container`}
      ref={containerRef}
    >
      <div className={`${styles.stickyHorizontalSlider_sticky}`}>
        <div className={`${styles.stickyHorizontalSlider_heading}`}>
          <h2 className={`c-title fade-in-up observe`}>
            <span>Latest News</span>
          </h2>
        </div>

        <div
          className={`${styles.stickyHorizontalSlider_inner} sticky-container-inner`}
          ref={containerInnerRef}
        >
          {props.map((item) => (
            <Link
              href=""
              className={`${styles.stickyHorizontalSlider_item}`}
              key={item.id}
            >
              {item.image.data?.attributes.url ? (
                <div
                  className={`${styles.stickyHorizontalSlider_item_image_wrap}`}
                >
                  <Image
                    src={`${item.image.data.attributes.url}`}
                    alt="Description of the image"
                    width={690}
                    height={420}
                    className={`${styles.stickyHorizontalSlider_item_image}`}
                  />
                </div>
              ) : null}

              <div className={`${styles.stickyHorizontalSlider_item_content}`}>
                <h5 className={`${styles.stickyHorizontalSlider_item_title}`}>
                  {item.title}
                </h5>
                <p className={`${styles.stickyHorizontalSlider_item_date}`}>
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}

          <svg
            width="0"
            height="0"
            viewBox="0 0 768 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <path
                  transform="scale(0.0013020833333333,0.001953125)"
                  d="M767.874 417.395L768 256L767.874 94.6054L767.494 74.9003L766.858 62.3455L765.962 52.9905L764.802 45.5073L763.368 39.2766L761.652 33.9568L759.642 29.3386L757.322 25.2842L754.673 21.6978L751.673 18.5103L748.292 15.6704L744.494 13.1388L740.234 10.8849L735.453 8.88474L730.074 7.11895L723.992 5.57213L717.065 4.23179L709.085 3.08783L699.739 2.13216L688.514 1.35834L674.482 0.761383L655.65 0.33755L626.092 0.0842622L383.084 0L141.908 0.0842622L112.35 0.33755L93.5182 0.761383L79.4858 1.35834L68.261 2.13216L58.9149 3.08783L50.9353 4.23179L44.008 5.57213L37.9263 7.11895L32.5467 8.88474L27.7655 10.8849L23.5057 13.1388L19.7082 15.6704L16.3274 18.5103L13.3271 21.6978L10.6784 25.2842L8.3582 29.3386L6.34768 33.9568L4.63175 39.2766L3.19824 45.5073L2.03751 52.9905L1.14207 62.3455L0.506325 74.9003L0.126393 94.6054L0 256.57L0.126393 417.395L0.506325 437.1L1.14207 449.655L2.03751 459.009L3.19824 466.493L4.63175 472.723L6.34768 478.043L8.3582 482.661L10.6784 486.716L13.3271 490.302L16.3274 493.49L19.7082 496.33L23.5057 498.861L27.7655 501.115L32.5467 503.115L37.9263 504.881L44.008 506.428L50.9353 507.768L58.9149 508.912L68.261 509.868L79.4858 510.642L93.5182 511.239L112.35 511.662L141.908 511.916L384.762 512L626.092 511.916L655.65 511.662L674.482 511.239L688.514 510.642L699.739 509.868L709.085 508.912L717.065 507.768L723.992 506.428L730.074 504.881L735.453 503.115L740.234 501.115L744.494 498.861L748.292 496.33L751.673 493.49L754.673 490.302L757.322 486.716L759.642 482.661L761.652 478.043L763.368 472.723L764.802 466.493L765.962 459.009L766.858 449.655L767.494 437.1L767.874 417.395Z"
                  fill="#D9D9D9"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StickyHorizontalSlider;
