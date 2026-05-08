# Meeting Intelligence - Samsung PRISM Hackathon

A modern, AI-powered meeting analytics and intelligence platform built to transform how teams extract value from their conversations. 

## 🎥 Project Demo
- **Demo Video:** [Watch the full walkthrough on Google Drive](https://drive.google.com/file/d/1Ci0ppXRqfLMNus-Y1DCgF6Tqs6IW7lsn/view?usp=sharing)

## 🚨 Problem Statement

In today's remote and hybrid work environments, professionals spend countless hours in meetings. However, the value of these discussions is often lost due to:
- Lack of centralized, easily searchable meeting records.
- Time consumed manually writing summaries and extracting action items.
- Difficulty in tracking meeting productivity and individual participation.
- Deadlines and key decisions slipping through the cracks.

## 💡 Proposed Solution

**Meeting Intelligence** solves these problems by providing an automated, AI-driven platform that turns raw meeting transcripts into actionable, structured data.
- **Automated Summarization**: Instantly generates concise summaries highlighting key points.
- **Smart Action Items**: Automatically extracts tasks, assigns them to personnel, and detects deadlines.
- **Deep Analytics**: Visualizes meeting frequency, productivity trends, and participation metrics to optimize team efficiency.
- **Centralized AI Search**: Allows users to query past meetings using natural language to instantly retrieve decisions and context.

## ✨ Key Features

- **Interactive Dashboard**: Track your team's meeting productivity with beautiful analytics (visualized using Recharts).
- **AI Summaries & Action Items**: Generate structured summaries with key points and deadlines assigned.
- **Meeting Analytics**: Visualize meeting frequency, duration trends, and participation metrics.
- **AI Insights Feed**: Receive smart alerts and trends based on your team's meeting behavior.
- **Modern UI/UX**: Designed with a premium dark-mode aesthetic, utilizing Framer Motion for smooth micro-interactions.

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YashP001/Samsung_prism.git
   cd Samsung_prism
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or yarn dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 🚀 Usage Guide

1. **Landing Page**: Upon opening the application, you will be greeted by the landing page which explains the platform's value proposition.
2. **Dashboard**: Navigate to the dashboard to view the main interface. Here you can see a high-level overview of productivity metrics and AI insights.
3. **Analytics**: Review the "Meeting Activity" and "Productivity Trend" charts to analyze team performance over time.
4. **Recent Meetings & Deadlines**: Check the recent meetings list and upcoming deadlines panel to track ongoing tasks and past discussions.
*(Note: Current dashboard data is mocked for UI demonstration purposes as part of the frontend prototype).*

## 📁 Project Structure

- `/app/dashboard`: Main application dashboard and nested routes (analytics, meetings, tasks, etc.).
- `/app/components`: Reusable UI components including Navbars, Sidebar, Cards, and landing page sections.
- `/public`: Static assets and icons.

## 🤖 AI Disclosure

In accordance with transparency best practices, we disclose the following use of AI in this project:

- **Within the Application:** The core functionality of this platform is built around GenAI. It simulates the use of Large Language Models (LLMs) to process conversational transcripts, generate structured summaries, and automatically extract action items and deadlines. Speech-to-text APIs are conceptualized for processing raw audio into text.
- **During Development:** Antigravity (Advanced Agentic AI Coding Assistant) was utilized to accelerate development by assisting with frontend component generation, UI/UX ideation, boilerplate code creation, and structuring documentation/presentation materials.

## 📄 License

This project is licensed under the MIT License.
