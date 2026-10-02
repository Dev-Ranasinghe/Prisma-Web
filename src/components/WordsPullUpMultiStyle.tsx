import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = "",
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((segment) => {
    segment.text.split(" ").forEach((word) => {
      words.push({ word, className: segment.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {words.map((item, i) => (
        <motion.span
          key={i}
          className={`relative inline-block ${item.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}
