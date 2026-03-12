import styles from "./philosophy.module.scss";
import { items } from "./items.json";

export default function Philosophy() {
  return (
    <div className={styles.container}>
      <h2>Our Philosopy</h2>
      <p>
        The current system of education in India is suited to a different time
        &ndash; <i>the Industrial Revolution</i>. It groups children according
        to age, teaches every child the same skill/knowledge set regardless of
        capability and is governed largely by a top-down directive teaching
        approach. It primarily prepares children for a degree followed by a job.
      </p>
      <p>At Ohana, we believe</p>
      <ul>
        {items.map((item, index) => (
          <li key={`item_${index}`}>
            <p dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
      <p>
        Our teachers are guides, mentors and co-learners. Between 2 and 6 years,
        children tend to imitate life. We limit the directive approach in order
        to allow children to find their own inner voice. Instead, we encourage
        our teachers to be strong role models for their children, mimicking a
        graceful, positive and gentle manner.
      </p>
    </div>
  );
}
