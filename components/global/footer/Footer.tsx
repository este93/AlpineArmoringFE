import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from 'components/icons/Facebook';
import TiktokIcon from 'components/icons/Tiktok';
import XIcon from 'components/icons/X';
import InstagramIcon from 'components/icons/Instagram';
import YoutubeIcon from 'components/icons/Youtube';
import MapIcon from 'components/icons/Map';
import PhoneIcon from 'components/icons/Phone';
import MailIcon from 'components/icons/Mail';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={`${styles.footer_top}`}>
        <h2 className={`${styles.footer_top_heading}`}>Alpine Armoring</h2>
        <h3 className={`${styles.footer_top_subheading}`}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "no one protects you better" ®
        </h3>
      </div>

      <div className={`${styles.footer_middle}`}>
        <div className={`${styles.footer_middle_info}`}>
          <div className={`${styles.footer_column}`}>
            <h3 className={`${styles.footer_column_title}`}>Contact</h3>
            <ul className={`${styles.footer_column_list}`}>
              <li>
                <Link href="/" className={`${styles.footer_column_list_item}`}>
                  <PhoneIcon color="#2d2d27" />
                  1.703.471.0002
                </Link>
              </li>
              <li>
                <Link href="/" className={`${styles.footer_column_list_item}`}>
                  <MailIcon color="#2d2d27" />
                  sales@AlpineCo.com
                </Link>
              </li>
              <li>
                <Link href="/" className={`${styles.footer_column_list_item}`}>
                  <MapIcon color="#2d2d27" />
                  Chantilly, Virginia, USA
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.footer_column}`}>
            <h3 className={`${styles.footer_column_title}`}>
              FOLLOW US ON SOCIALS
            </h3>
            <ul className={`${styles.footer_socials}`}>
              <li className={`${styles.footer_socials_item}`}>
                <Link href="/">
                  <FacebookIcon />
                </Link>
              </li>
              <li className={`${styles.footer_socials_item}`}>
                <Link href="/">
                  <TiktokIcon />
                </Link>
              </li>
              <li className={`${styles.footer_socials_item}`}>
                <Link href="/">
                  <XIcon />
                </Link>
              </li>
              <li className={`${styles.footer_socials_item}`}>
                <Link href="/">
                  <InstagramIcon />
                </Link>
              </li>
              <li className={`${styles.footer_socials_item}`}>
                <Link href="/">
                  <YoutubeIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.footer_column}`}>
          <h3 className={`${styles.footer_column_title}`}>QUICK LINKS</h3>
          <ul
            className={`${styles.footer_column_list} ${styles.footer_column_nav}`}
          >
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Make & Models</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Rental & Lease</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Ballistic chart</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Become a Dealer</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Pre-Owned - Stock Vehicles</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Testimonials</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Special of the Month</Link>
            </li>
            <li className={`${styles.footer_column_list_item}`}>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <ul className={`${styles.footer_bottom_nav}`}>
          <li className={`${styles.footer_bottom_nav_item}`}>
            <Link href="/">About</Link>
          </li>
          <li className={`${styles.footer_bottom_nav_item}`}>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className={`${styles.footer_bottom_nav_item}`}>
            <Link href="/">FAQ</Link>
          </li>
          <li className={`${styles.footer_bottom_nav_item}`}>
            <Link href="/">Sitemap</Link>
          </li>
        </ul>

        <p className={`${styles.footer_bottom_copy}`}>
          ©1997-2023. Alpine Armoring Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
