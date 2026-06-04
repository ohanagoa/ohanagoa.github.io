import styles from "./values..module.scss";

export default function Values() {
  const values = [
    {
      name: "authenticity",
      imageUrl: "/value1.jpeg",
      title:
        "We believe that nurturing being true to yourself, what you believe in and what you stand for are essential to transformational education. At every step, we attempt to bring out the most real version of the child in the gentlest of ways.",
    },
    {
      name: "love",
      imageUrl: "/value2.jpeg",
      title:
        "We look to constantly grow in our expression of love in every situation. Whether it is a loving interest in each individual child and their interests or a deep self love to be cultivated over a lifetime - we look to grow innate acceptance, kindness, empathy and grace in ourselves and every child.",
    },
    {
      name: "awareness",
      imageUrl: "/value3.jpeg",
      title:
        "We look to make mindfulness a way of life. Whether it is an awareness of self and surroundings, careful attention paid to tasks done or a sense of reflection on the day and our actions - awareness is at the center of most of what we do. We believe that balance comes from conscious creation of what works for each of us individually - we like to start them young.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>We Uphold</h2>
      <div className={styles.container__value_wrapper}>
        {values.map(value => (
          <div className={styles.container__value_item} title={value.title}>
            <img src={value.imageUrl} alt={value.name} />
            <p title={value.title}>{value.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
