import styles from "./contact.module.scss";

export default function Contact() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    const data = {};
    new FormData(e.currentTarget).forEach((v, k) => {
      Object.assign(data, { [k]: v });
    });
    console.log("submitted", data);
  };

  return (
    <div id="contact" className={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.container__form_container}>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} />
            </li>
          </ul>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
