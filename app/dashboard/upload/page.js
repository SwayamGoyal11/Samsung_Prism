"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "../../components/TopBar";
import { Upload, Mic, Video, FileText, Link2, Radio, CloudUpload, CheckCircle2, X, FileAudio } from "lucide-react";

const uploadOptions = [
  { icon: FileAudio, label: "Upload Audio", desc: "MP3, WAV, M4A up to 500MB", accept: "audio/*" },
  { icon: Video, label: "Upload Video", desc: "MP4, MOV, WebM up to 2GB", accept: "video/*" },
  { icon: FileText, label: "Upload Transcript", desc: "TXT, DOCX, SRT, VTT", accept: ".txt,.docx,.srt,.vtt" },
];

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) simulateUpload(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file);
  };

  const simulateUpload = (file) => {
    setSelectedFile(file);
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setUploading(false); setUploaded(true); return 100; }
        return prev + Math.random() * 15;
      });
    }, 300);
  };

  const reset = () => { setSelectedFile(null); setUploading(false); setProgress(0); setUploaded(false); };

  // Waveform bars
  const bars = Array.from({ length: 40 }, (_, i) => i);

  return (
    <>
      <TopBar title="Upload Meeting" subtitle="Add a meeting recording for AI analysis" />
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Upload Options */}
        <div className="grid sm:grid-cols-3 gap-4">
          {uploadOptions.map((opt, i) => (
            <motion.button key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => fileRef.current?.click()} className="glass-card glass-card-hover p-5 text-left group">
              <div className="feature-icon mb-3 group-hover:scale-110 transition-transform">
                <opt.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{opt.label}</h3>
              <p className="text-[11px] text-[#6B7280]">{opt.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Drop Zone */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`drop-zone p-12 text-center cursor-pointer ${dragActive ? "active" : ""}`}
          onClick={() => fileRef.current?.click()}>
          <input ref={fileRef} type="file" className="hidden" onChange={handleFileSelect} accept="audio/*,video/*,.txt,.docx,.srt,.vtt" />
          
          <AnimatePresence mode="wait">
            {!uploading && !uploaded && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CloudUpload className="w-12 h-12 text-purple-400/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Drag & drop your file here</h3>
                <p className="text-sm text-[#6B7280] mb-4">or click to browse files</p>
                <span className="text-xs text-[#6B7280]">Supports audio, video, and transcript files</span>
              </motion.div>
            )}

            {uploading && (
              <motion.div key="uploading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Waveform Animation */}
                <div className="flex items-end justify-center gap-[3px] h-12 mb-6">
                  {bars.map((_, i) => (
                    <motion.div key={i} className="w-1 bg-purple-400 rounded-full"
                      animate={{ height: [4, Math.random() * 30 + 6, 4] }}
                      transition={{ duration: 0.8 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.03 }}
                      style={{ minHeight: 4 }} />
                  ))}
                </div>
                <h3 className="text-sm font-semibold mb-1">Processing: {selectedFile?.name}</h3>
                <p className="text-xs text-[#6B7280] mb-4">Uploading and analyzing...</p>
                <div className="w-full max-w-xs mx-auto h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="progress-gradient h-full" style={{ width: `${Math.min(progress, 100)}%` }} />
                </div>
                <p className="text-xs text-purple-400 mt-2">{Math.min(Math.round(progress), 100)}%</p>
              </motion.div>
            )}

            {uploaded && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Upload Complete!</h3>
                <p className="text-sm text-[#6B7280] mb-4">{selectedFile?.name} has been uploaded successfully.</p>
                <div className="flex justify-center gap-3">
                  <a href="/dashboard/meetings/1" className="glow-btn px-6 py-2.5 text-sm">View Analysis</a>
                  <button onClick={reset} className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-[#9CA3AF] hover:bg-white/8 transition-colors">Upload Another</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="glass-card glass-card-hover p-5 flex items-center gap-4 cursor-pointer group">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Link2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Join Meeting via Link</h3>
              <p className="text-[11px] text-[#6B7280]">Paste a Zoom, Meet, or Teams link</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="glass-card glass-card-hover p-5 flex items-center gap-4 cursor-pointer group">
            <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Radio className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Start Live Recording</h3>
              <p className="text-[11px] text-[#6B7280]">Record directly from your microphone</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
