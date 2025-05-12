import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../components/ImageSlider.module.css";

type SliderItem = {
  src: string;
  caption: string | JSX.Element;
  style?: React.CSSProperties;
};

interface ImageSliderProps {
  items: SliderItem[];
  className?: string;
  stopPropagation?: boolean;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  items,
  className = "",
  stopPropagation = true,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = (e?: React.MouseEvent) => {
    if (stopPropagation && e) e.stopPropagation();
    if (slideIndex < items.length - 1) {
      setDirection(1);
      setSlideIndex((prev) => prev + 1);
    }
  };

  const prev = (e?: React.MouseEvent) => {
    if (stopPropagation && e) e.stopPropagation();
    if (slideIndex > 0) {
      setDirection(-1);
      setSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={`${styles.slider} ${className}`}>
      <div className={styles.slideWrapper}>
        <button
          className={`${styles.roundButton} ${styles.left}`}
          onClick={prev}
          disabled={slideIndex === 0}
        >
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9L9 18L10.4 16.5L3 9L10.4 1.5L9 0L0 9Z" />
          </svg>
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slideIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className={styles.sliderItem}
          >
            <div
              className={styles.imageWrapper}
              style={items[slideIndex].style}
            >
              <img
                src={items[slideIndex].src}
                alt={`slide-${slideIndex}`}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className={styles.counter}>
              {slideIndex + 1} / {items.length}
            </div>
            <div className={styles.caption}>
              {items[slideIndex].caption}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className={`${styles.roundButton} ${styles.right}`}
          onClick={next}
          disabled={slideIndex === items.length - 1}
        >
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.0001 0L0.600098 1.5L8.0001 9L0.600098 16.5L2.0001 18L11.0001 9L2.0001 0Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
