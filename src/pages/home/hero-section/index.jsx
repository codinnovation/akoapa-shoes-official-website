import React from "react";
import styles from "../../../styles/home/hero-section.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";
import HeroImage1 from "../../../../public/hero-img-1.png";


function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.mainHero}>
            <div className={styles.image}>
              <Image src={HeroImage} width={900} height={900} alt="hero-img" />
            </div>

            <div className={styles.mainHeroText}>
              <h1>Welcome To Akoapa Shoes</h1>
              <p>Starting at $0.99</p>
              <button>Shop Now</button>
            </div>
          </div>

          <div className={styles.subHero}>
            <div className={styles.subOne}>
              <Image
                src={HeroImage}
                width={900}
                height={900}
                alt="hero-image"
              />
            </div>
            <div className={styles.subTwo}>
              <Image
                src={HeroImage}
                width={900}
                height={900}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
