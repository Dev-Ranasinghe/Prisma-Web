import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface ChecklistCardProps {
  number: string;
  title: string;
  icon: string;
  items: string[];
  delay: number;
}

export default function ChecklistCard({ number, title, icon, items, delay }: ChecklistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col h-full min-h-[320px] sm:min-h-0"
    >
      <img
        src={icon}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
      />

      <h3 className="mt-6 sm:mt-8 text-primary text-lg sm:text-xl">
        <span className="text-gray-500 mr-2">{number}</span>
        {title}
      </h3>

      <ul className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3 flex-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 text-primary text-xs sm:text-sm group w-fit"
      >
        Learn more
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          style={{ transform: "rotate(-45deg)" }}
        />
      </a>
    </motion.div>
  );
}
