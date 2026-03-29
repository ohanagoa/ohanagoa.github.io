import styles from "./hero.module.scss";

export default function Hero() {
  const content = {
    header: "An alternative learning space with structure",
    cta: "Schedule a visit/call",
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.container__image_wrapper}>
        <div className={styles.container__image_wrapper__overlay}></div>
        <div className={styles.container__image_wrapper__content_wrapper}>
          <div className={styles.container__image_wrapper__content_background}>
            <div className={styles.container__image_wrapper__copy_container}>
              <h1>{content.header}</h1>
            </div>
            <div className={styles.container__image_wrapper__cta_container}>
              <a href="#contact">{content.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
