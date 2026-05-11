import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessTerminalProps {
  activeStep: number;
}

interface TerminalStep {
  commands: { text: string; isCommand: boolean }[];
}

const terminalContent: Record<number, TerminalStep> = {
  0: {
    commands: [
      { text: "$ figma export --format=svg", isCommand: true },
      { text: "✓ Wireframes exportados: 12 artboards", isCommand: false },
      { text: "✓ Component library: 48 components", isCommand: false },
      { text: "$ miro export --project=portfolio", isCommand: true },
      { text: "✓ User flows validados", isCommand: false },
      { text: "✓ Prototipo A/B ready", isCommand: false },
    ],
  },
  1: {
    commands: [
      { text: "$ git checkout -b feat/portfolio-v1.2", isCommand: true },
      { text: "$ npm run dev", isCommand: true },
      { text: "✓ Vite dev server running on :5173", isCommand: false },
      { text: "✓ Hot reload enabled", isCommand: false },
      { text: "$ npm run type-check", isCommand: true },
      { text: "✓ 0 TypeScript errors", isCommand: false },
    ],
  },
  2: {
    commands: [
      { text: "$ npm run test --coverage", isCommand: true },
      { text: "✓ 48 unit tests passed", isCommand: false },
      { text: "✓ Coverage: 94%", isCommand: false },
      { text: "$ npm run build", isCommand: true },
      { text: "✓ Build successful: 142.4 KB", isCommand: false },
    ],
  },
  3: {
    commands: [
      { text: "$ git push origin main", isCommand: true },
      { text: "✓ CI/CD pipeline triggered", isCommand: false },
      { text: "$ vercel deploy --prod", isCommand: true },
      { text: "✓ Deployment complete in 2.3s", isCommand: false },
      { text: "✓ Live: alvaro-portfolio.vercel.app", isCommand: false },
    ],
  },
};

const TypewriterLine = ({ text, isCommand, onComplete }: { text: string; isCommand: boolean; onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        onComplete();
      }
    }, 30); // 30ms per char for a slightly faster feel than 40ms, but still within range

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <div className="mb-1">
      <span className={isCommand ? "text-[oklch(0.65_0.01_285)]" : "text-[oklch(0.82_0.22_145)]"}>
        {displayedText}
      </span>
    </div>
  );
};

export const ProcessTerminal = ({ activeStep }: ProcessTerminalProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const stepContent = terminalContent[activeStep] || terminalContent[0];

  useEffect(() => {
    setCurrentLineIndex(0);
  }, [activeStep]);

  const handleLineComplete = () => {
    if (currentLineIndex < stepContent.commands.length - 1) {
      setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 100);
    }
  };

  return (
    <div className="w-full h-full min-h-[300px] bg-[oklch(0.08_0.004_285)] border border-[oklch(0.22_0.008_285)] rounded-sm p-6 font-mono text-sm overflow-hidden relative">
      <div className="flex gap-1.5 mb-6 opacity-30">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="leading-[1.4]"
        >
          {stepContent.commands.slice(0, currentLineIndex + 1).map((cmd, idx) => (
            <TypewriterLine
              key={`${activeStep}-${idx}`}
              text={cmd.text}
              isCommand={cmd.isCommand}
              onComplete={idx === currentLineIndex ? handleLineComplete : () => { }}
            />
          ))}

          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-[oklch(0.82_0.22_145)] inline-block align-middle ml-1"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProcessTerminal;
