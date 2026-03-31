import styles from "./contact.module.scss";

export default function Contact() {
  const data = {
    email: "ohanaschoolgoa@gmail.com",
    telephone: "9820369161",
    mobile: "8010864731",
    instagram: "https://www.instagram.com/ohanagoa",
    linkedin: "https://in.linkedin.com/company/ohana-kindergarten-goa",
    facebook: "https://www.facebook.com/ohanaschoolofgrace/",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.7763209459813!2d73.75053001161899!3d15.60359525167069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfeb16300d706d%3A0x1643a435470f2f71!2sOhana%20Kindergarten%20and%20Music%20School!5e0!3m2!1sen!2sin!4v1774809413497!5m2!1sen!2sin",
  };

  // const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = e => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const data = {};
  //   new FormData(e.currentTarget).forEach((v, k) => {
  //     Object.assign(data, { [k]: v });
  //   });
  //   console.log("submitted", data);
  // };

  return (
    <div id="contact" className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.container__socials_container}>
        <address>
          <ul>
            <li>
              Email us at:{" "}
              <a href={`mailto:${data.email}`} target="_blank">
                {data.email}
              </a>
            </li>
            <li>
              Call us on:{" "}
              <a href={`tel: +91${data.telephone}`} target="_blank">
                +91{data.telephone}
              </a>{" "}
              |{" "}
              <a href={`tel: +91${data.mobile}`} target="_blank">
                +91{data.mobile}
              </a>
            </li>
            <li>
              Follow us on:{" "}
              <a href={data.instagram} target="_blank">
                Instagram
              </a>
              ,{" "}
              <a href={data.facebook} target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </address>
        <iframe
          src={data.address}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <div className={styles.container__form_container}>
          <ul>
            <li>
              <label htmlFor="email">Leave us your email and we'll reach out to you.</label>
              <input id="email" name="email" type="email" required />
            </li>
            <li>
              <label htmlFor="message">Please share your questions or concerns.</label>
              <textarea id="message" name="message" rows={5} />
            </li>
          </ul>
          <button type="submit">Submit</button>
        </div>
      </form> */}
    </div>
  );
}
