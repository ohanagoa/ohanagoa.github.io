import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.container__image_wrapper}>
        <div className={styles.container__image_wrapper__overlay}></div>
        <div className={styles.container__image_wrapper__content_wrapper}>
          <div className={styles.container__image_wrapper__content_background}>
            <div className={styles.container__image_wrapper__copy_container}>
              <h1>A Nature-Based School for Curious Young Minds</h1>
              <p>Preschool Learning Space</p>
            </div>
            <div className={styles.container__image_wrapper__cta_container}>
              <a href="#contact">
                <button>Schedule a Visit</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
