import { motion } from "framer-motion";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import ChecklistCard from "./ChecklistCard";

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
          <WordsPullUpMultiStyle
            segments={[{ text: "Studio-grade workflows for visionary creators.", className: "text-primary" }]}
          />
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight mt-1 sm:mt-2">
          <WordsPullUpMultiStyle
            segments={[{ text: "Built for pure vision. Powered by art.", className: "text-gray-500" }]}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <span className="text-base sm:text-lg" style={{ color: "#E1E0CC" }}>
              Your creative canvas.
            </span>
          </div>
        </motion.div>

        <ChecklistCard
          number="01"
          title="Project Storyboard."
          icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
          items={[
            "Scene-by-scene shot planning",
            "Collaborative asset boards",
            "Version-controlled revisions",
            "Real-time client feedback",
          ]}
          delay={0.15}
        />

        <ChecklistCard
          number="02"
          title="Smart Critiques."
          icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
          items={[
            "AI-assisted composition analysis",
            "Contextual creative notes",
            "Seamless tool integrations",
          ]}
          delay={0.3}
        />

        <ChecklistCard
          number="03"
          title="Immersion Capsule."
          icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
          items={[
            "Automatic notification silencing",
            "Curated ambient soundscapes",
            "Cross-device schedule syncing",
          ]}
          delay={0.45}
        />
      </div>
    </section>
  );
}
