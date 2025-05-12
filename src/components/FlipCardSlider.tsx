import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FlipCardSlider.module.css";
import ImageSlider from "./ImageSlider"; // Путь к ImageSlider
import { jsx } from "react/jsx-runtime";

interface Card {
  frontImage: string;
  backText: string | JSX.Element;
  sliderImages?: { src: string; caption: string }[];
}

interface FlipCardSliderProps {
  cards: Card[];
}

export const FlipCardSlider: React.FC<FlipCardSliderProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const nextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.min(prev + 1, cards.length - 1));
    setFlipped(false); // сброс поворота при смене карточки
  };

  const prevCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setFlipped(false); // сброс поворота при смене карточки
  };

  const { frontImage, backText, sliderImages } = cards[currentIndex];

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={`${styles.flip} ${flipped ? styles.flipped : ""}`}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={handleFlip}
      >
        {/* FRONT */}
        <div className={styles.front}>
          <img src={frontImage} alt="front" />
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <div className={styles.cardBackContent}>
            <div className={styles.callToAction}>{backText}</div>
            {sliderImages && sliderImages.length > 0 && (
              <div className={styles.sliderWrapper}>
                <ImageSlider items={sliderImages} />
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* NAVIGATION BUTTONS */}
      <div className={styles.btns}>
        <button onClick={prevCard} className={styles.btn} disabled={currentIndex === 0}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className={styles.counter}>
          {currentIndex + 1} из {cards.length}
        </span>

        <button onClick={nextCard} className={styles.btn} disabled={currentIndex === cards.length - 1}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
