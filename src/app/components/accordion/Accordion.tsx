import { Collapse } from "react-collapse";
import styles from "./accordion.module.scss";

interface AccordionProps {
  text: string;
  subtext: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  text,
  subtext,
  isExpanded,
  onToggle,
}) => {
  const limit = 50;
  const words = text.split(" ");

  if (words.length <= limit) {
    return (
      <p>
        {text}
        <br />
        <strong>
          <i>- {subtext}</i>
        </strong>
      </p>
    );
  }

  const excerpt = words.slice(0, limit).join(" ");

  return (
    <div>
      <Collapse
        isOpened={isExpanded}
        theme={{ collapse: styles[`ReactCollapse--collapse`] }}
      >
        <p>
          {text}
          <br />
          <strong>
            <i>- {subtext}</i>
          </strong>
        </p>
      </Collapse>

      {!isExpanded ? (
        <p>
          {excerpt}...
          <button onClick={onToggle} className={styles.triggerButton}>
            Read more
          </button>
          <br />
          <strong>
            <i>- {subtext}</i>
          </strong>
        </p>
      ) : (
        <button
          onClick={onToggle}
          className={`${styles.triggerButton} ${styles.readLess}`}
        >
          Read less
        </button>
      )}
    </div>
  );
};
