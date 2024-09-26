import React from "react";
import styles from "../../../styles/home/second-bar.module.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SecondBar() {
  return (
    <>
      <div className={styles.secondbarContainer}>
        <div className={styles.secondbarContent}>
          <div className={styles.companyName}>
            <h1>Akoapa</h1>
            <h1>Shoes</h1>
          </div>

          <div className={styles.searchContainer}>
            <input placeholder="search..." />
            <button>Search</button>
          </div>

          <div className={styles.profileContainer}>
            <div className={styles.userLogin}>
              <p>Login / Register</p>
            </div>

            <div className={styles.iconContainer}>
              <ShoppingCartCheckoutIcon className={styles.icon}/>
            </div>

			<div className={styles.iconContainer}>
              <FavoriteBorderIcon className={styles.icon}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondBar;
