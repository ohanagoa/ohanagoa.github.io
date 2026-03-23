import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image_wrapper}>
        <div className={styles.container__image_wrapper__overlay}></div>
        <div className={styles.container__image_wrapper__content_wrapper}>
          <div className={styles.container__image_wrapper__content_background}>
            <div className={styles.container__image_wrapper__copy_container}>
              <h2>A Nature-Based School for Curious Young Minds</h2>
              <p>
                Alternative education for children aged 2 - 6 in Assagao, Goa
              </p>
            </div>
            <div className={styles.container__image_wrapper__cta_container}>
              <button>Schedule a Visit</button>
              <button>Download Prospectus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
