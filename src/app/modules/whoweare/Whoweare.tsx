import styles from './whoweare.module.scss'

export default function Whoweare() {
  return (
    <div id="whoweare" className={styles.container}>
      <div className={styles.container__overlay}></div>
      <div className={styles.container__content}>
        <h2>Who We Are</h2>
        <p>
          Ohana, in Hawaiian, means Family. Not only, the family that we are
          born into, but also the family we choose. Ohana is a preschool where a
          child can connect with inner wisdom and their authentic self to live a
          meaningful, loving and peaceful life.
        </p>
      </div>
    </div>
  );
}
