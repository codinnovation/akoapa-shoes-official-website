import React from "react";
import styles from "../../../styles/home/navigation.module.css";
import CategoryIcon from "@mui/icons-material/Category";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Link from "next/link";

function Navigation() {
  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.shopCat}>
            <CategoryIcon className={styles.icon} />
            <h1>shop by category</h1>
          </div>

          <div className={styles.linkContainer}>
            <Link href="">Home</Link>
            <Link href="">Fashion</Link>
            <Link href="">New Arrivals</Link>
            <Link href="">All Brands</Link>
          </div>

          <div className={styles.freeDelivery}>
            <DeliveryDiningIcon className={styles.icon} />
            <h1>Delivery to World Wide</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
