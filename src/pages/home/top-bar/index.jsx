import React from "react";
import styles from "../../../styles/home/top-bar.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function TopBar() {
  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarContent}>
          <div className={styles.leftTopbar}>
            <p>Get up to 50% off new season styles limited time only</p>
          </div>

          <div className={styles.rightTopbar}>
            <div className={styles.text}>
              <p>Help Center</p>
            </div>

            <div className={styles.text}>
              <p>Order Tracking</p>
            </div>

            <div className={styles.text}>
              <LanguageIcon className={styles.icon} />
              <p>English</p>
            </div>

			<div className={styles.text}>
              <AttachMoneyIcon className={styles.icon} />
              <p>Ghan Cedis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
