import React from "react";
import styles from "../../../styles/home/feature-category.module.css";
import ProductImage from "../../../../public/hero-img.png";
import ProductImage1 from "../../../../public/hero-img-1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { motion } from "framer-motion";

function FeatureCategory() {
  return (
    <>
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerHeader}>
          <h1>Feature Category</h1>
        </div>
        <div className={styles.featureContent}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ infinity: true }}
            className={styles.productContainer}
          >
            <div className={styles.productDescription}>
              <p>Quality</p>
              <h1>Men Boot Loofer</h1>
            </div>

            <div className={styles.productImg}>
              <Image
                src={ProductImage}
                width={900}
                height={900}
                alt="product-image"
              />
            </div>
            <div className={styles.shopMore}>
              <ArrowForwardIcon className={styles.icon} />
              <h1>Shop More</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ infinity: true }}
            className={styles.productContainer}
          >
            <div className={styles.productDescription}>
              <p>Quality</p>
              <h1>Men Boot Loofer</h1>
            </div>

            <div className={styles.productImg}>
              <Image
                src={ProductImage1}
                width={900}
                height={900}
                alt="product-image"
              />
            </div>

            <div className={styles.shopMore}>
              <ArrowForwardIcon className={styles.icon} />
              <h1>Shop More</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ infinity: true }}
            className={styles.productContainer}
          >
            <div className={styles.productDescription}>
              <p>Quality</p>
              <h1>Men Boot Loofer</h1>
            </div>

            <div className={styles.productImg}>
              <Image
                src={ProductImage1}
                width={900}
                height={900}
                alt="product-image"
              />
            </div>
            <div className={styles.shopMore}>
              <ArrowForwardIcon className={styles.icon} />
              <h1>Shop More</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ infinity: true }}
            className={styles.productContainer}
          >
            <div className={styles.productDescription}>
              <p>Quality</p>
              <h1>Men Boot Loofer</h1>
            </div>

            <div className={styles.productImg}>
              <Image
                src={ProductImage}
                width={900}
                height={900}
                alt="product-image"
              />
            </div>
            <div className={styles.shopMore}>
              <ArrowForwardIcon className={styles.icon} />
              <h1>Shop More</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default FeatureCategory;
