import { useState } from "react";
import { Accordion } from "../../components/accordion/Accordion";
import styles from "./testimonials.module.scss";

export default function Testimonials() {
  const [open, setOpen] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const testimonials = [
    {
      id: 1,
      parents: "Tanya and Harry Bhatia (Ibhaan's parents)",
      testimonial: `A Heartfelt Thank you to Ohana

As parents, we often search for a space where our children won’t just learn, but truly belong. For us, Ohana became that sanctuary — a beautiful little world where our son began his journey at just two years old, and spent a wonderful 3.5 years growing, exploring, and thriving.

From the very beginning, Ohana felt less like a school and more like a family — a warm, safe community filled with love, laughter, and gentle guidance. The emphasis on free play, learning through stories, art, craft, and song created a magical environment where curiosity was nurtured and every child’s individuality was celebrated.

The thoughtfully planned field trips and the unforgettable farming experience were highlights of these precious years. Watching the children connect with nature, get their hands muddy, and discover the joy of planting and harvesting was a priceless part of their learning — lessons that went far beyond the classroom.

But what truly made these years extraordinary were the incredible teachers. With open hearts and endless patience, they built a space where our children felt cushioned, protected, and endlessly encouraged. Every hug, every cheer, every carefully told story contributed to a childhood filled with warmth, confidence, and joy.

For our son, Ohana was more than a kindergarten — it was his safe place, his happy place, and his first little community. We are endlessly grateful for the love, care, and beautiful memories this chapter has gifted us.

Thank you, Ohana, for being our village.`,
    },
    {
      id: 2,
      parents: "Preston and Rockalin Dsouza",
      testimonial: `Our Ohana Kindergarten Experience: Two Wonderful Years!

Hi Parents,

If you're looking for a kindergarten, we'd love to share our feedback on Ohana Kindergarten, where our son spent two beautiful years.

We saw incredible growth in his confidence and independence. Socially, he learned valuable skills like sharing, cooperation, and empathy, making new friends and truly thriving.

There's so much to love about Ohana! We especially appreciated the nurturing and warm environment the teachers created. It truly felt like a second home for our child. The teachers' ability to make every lesson feel like an adventure created lasting, joyful memories for him.

We'll always remember the joyful atmosphere that permeated Ohana. It was a place where our child felt genuinely seen, heard, and celebrated. The dedication of the teachers and the genuine care they showed for each child will forever stay with us.

Choosing Ohana was one of the best decisions we made for our child. It's more than just a kindergarten; it's a community that fosters growth, creativity, and happiness. We are incredibly grateful for the positive impact Ohana has had on our family.
`,
    },
  ];

  return (
    <div id="testimonials" className={styles.container}>
      <div className={styles.container__testimonial_wrapper}>
        <h2>Testimonials!</h2>
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={styles.container__testimonial_wrapper__testimonial_card}
          >
            <Accordion
              text={item.testimonial}
              subtext={item.parents}
              isExpanded={open === index}
              onToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
