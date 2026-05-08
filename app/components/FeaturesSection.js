"use client";
import { motion } from "framer-motion";
import {
  FileText,
  ListChecks,
  Clock,
  UserCheck,
  Search,
  Mail,
  BarChart3,
  LineChart,
  Workflow,
  Plug,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Meeting Summaries",
    desc: "Automatically generate concise, structured summaries of every meeting with key points highlighted.",
  },
  {
    icon: ListChecks,
    title: "Action Item Extraction",
    desc: "AI identifies and organizes action items from transcripts with assignees and priorities.",
  },
  {
    icon: Clock,
    title: "Deadline Detection",
    desc: "Automatically detect mentioned deadlines and add them to your task tracking system.",
  },
  {
    icon: UserCheck,
    title: "Person Detection",
    desc: "Identify who is responsible for each task and decision made during the meeting.",
  },
  {
    icon: Search,
    title: "AI Meeting Search",
    desc: "Search across all your meetings using natural language questions and get instant answers.",
  },
  {
    icon: Mail,
    title: "Follow-up Emails",
    desc: "Generate professional follow-up emails with summaries, action items, and next steps.",
  },
  {
    icon: BarChart3,
    title: "Productivity Dashboard",
    desc: "Track your team's meeting productivity with beautiful analytics and insights.",
  },
  {
    icon: LineChart,
    title: "Meeting Analytics",
    desc: "Visualize meeting frequency, duration trends, and participation metrics.",
  },
  {
    icon: Workflow,
    title: "Smart Task Tracking",
    desc: "Track tasks from creation to completion with automated status updates.",
  },
  {
    icon: Plug,
    title: "Multi-platform Integration",
    desc: "Connect with Zoom, Google Meet, Microsoft Teams, Slack, and more.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-purple-500/5 blur-[120px] -z-10" />
      <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-6">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-[-0.02em] mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Master Meetings</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            From real-time transcription to AI-powered insights, our platform
            transforms every meeting into structured, actionable data.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="glass-card glass-card-hover p-8 group cursor-default"
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-base font-heading font-bold mb-3">{feature.title}</h3>
              <p className="text-sm font-medium text-[#9CA3AF] leading-[1.7]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
