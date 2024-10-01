import React from "react";
import styles from "../../../styles/home/join-whatsapp.module.css";

function JoinWhatsApp() {
  return (
    <>
      <div className={styles.joinContainer}>
        <div className={styles.joinContent}>
          <div className={styles.joinHeader}>
            <p>Join Our WhatsApp group</p>
          </div>

          <div className={styles.joineMainHeader}>
            <h1>Subscribe to get Updated with new offers</h1>
          </div>

          <div className={styles.joinButton}>
            <button>Join</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default JoinWhatsApp;
