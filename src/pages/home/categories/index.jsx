import React from "react";
import styles from "../../../styles/home/category.module.css";
import HeroImage1 from "../../../../public/hero-img.png";
import Image from "next/image";

function Category() {
  return (
    <>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryContent}>
          <div className={styles.box}>
            <Image src={HeroImage1} width={900} height={900} alt="hero" />
            <h1>Men Boots</h1>
          </div>
          <div className={styles.box}>
            <Image src={HeroImage1} width={900} height={900} alt="hero" />
            <h1>Men Boots</h1>
          </div>
          <div className={styles.box}>
            <Image src={HeroImage1} width={900} height={900} alt="hero" />
            <h1>Men Boots</h1>
          </div>
          <div className={styles.box}>
            <Image src={HeroImage1} width={900} height={900} alt="hero" />
            <h1>Men Boots</h1>
          </div>
         
        </div>
      </div>
    </>
  );
}
export default Category;
