import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

const bodyText =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = bodyText.split("");

  return (
    <section className="bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2rem] px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-28 text-center">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest">
          Visual arts
        </span>

        <div className="mt-6 sm:mt-8 max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Marcus Chen,", className: "font-normal" },
              { text: "a self-taught director.", className: "italic font-serif" },
              {
                text: "I have skills in color grading, visual effects, and narrative design.",
                className: "font-normal",
              },
            ]}
          />
        </div>

        <p
          ref={paragraphRef}
          className="mt-8 sm:mt-10 max-w-2xl mx-auto text-[#DEDBC8] text-xs sm:text-sm md:text-base"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              totalChars={chars.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
