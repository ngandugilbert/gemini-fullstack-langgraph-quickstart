import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LandingPageProps {
  onStartChat: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartChat }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-neutral-100 p-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
          Research Agent
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Welcome to your intelligent research assistant. Ask complex questions, get comprehensive answers, and explore a world of information with AI-powered insights.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <Button
          onClick={onStartChat}
          className="px-10 py-6 text-lg font-semibold bg-sky-500 hover:bg-sky-600 text-white rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Start Chat
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        className="mt-24 text-sm text-slate-400"
      >
        <p>&copy; 2024 Your Company | Powered by AI</p>
      </motion.div>
    </div>
  );
};
