import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function WordsPullUp({ text, className = "", showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            className="relative inline-block"
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
            {isLast && showAsterisk ? (
              <>
                {word.slice(0, -1)}
                <span className="relative">
                  {word.slice(-1)}
                  <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</sup>
                </span>
              </>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
