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
      <div className="p-8 space-y-8 max-w-[1200px] mx-auto">
        {/* Upload Options */}
        <div className="grid sm:grid-cols-3 gap-4">
          {uploadOptions.map((opt, i) => (
            <motion.button key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => fileRef.current?.click()} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left group hover:bg-white/[0.04] hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all border border-indigo-500/20">
                <opt.icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-[14px] font-semibold text-[#E8ECF1] mb-1">{opt.label}</h3>
              <p className="text-[12px] text-[#94A3B8]">{opt.desc}</p>
            </motion.button>
          ))}
        </div>

        {/* Drop Zone */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`relative p-12 text-center cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 ${dragActive ? "border-indigo-500 bg-indigo-500/5 scale-[1.02]" : "border-white/[0.1] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-white/[0.04]"}`}
          onClick={() => fileRef.current?.click()}>
          <input ref={fileRef} type="file" className="hidden" onChange={handleFileSelect} accept="audio/*,video/*,.txt,.docx,.srt,.vtt" />
          
          <AnimatePresence mode="wait">
            {!uploading && !uploaded && (
              <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CloudUpload className="w-12 h-12 text-indigo-400/50 mx-auto mb-4" />
                <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-2">Drag & drop your file here</h3>
                <p className="text-[14px] text-[#94A3B8] mb-4">or click to browse files</p>
                <span className="text-[12px] text-[#64748B] font-medium bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">Supports audio, video, and transcript files</span>
              </motion.div>
            )}

            {uploading && (
              <motion.div key="uploading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Waveform Animation */}
                <div className="flex items-end justify-center gap-[3px] h-12 mb-6">
                  {bars.map((_, i) => (
                    <motion.div key={i} className="w-1 bg-indigo-400 rounded-full"
                      animate={{ height: [4, Math.random() * 30 + 6, 4] }}
                      transition={{ duration: 0.8 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.03 }}
                      style={{ minHeight: 4 }} />
                  ))}
                </div>
                <h3 className="text-[14px] font-semibold text-[#E8ECF1] mb-1">Processing: {selectedFile?.name}</h3>
                <p className="text-[12px] text-[#94A3B8] mb-5">Uploading and analyzing...</p>
                <div className="w-full max-w-xs mx-auto h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full transition-all duration-300" style={{ width: `${Math.min(progress, 100)}%` }} />
                </div>
                <p className="text-[12px] font-medium text-indigo-400 mt-3">{Math.min(Math.round(progress), 100)}%</p>
              </motion.div>
            )}

            {uploaded && (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-[18px] font-semibold text-[#E8ECF1] mb-2">Upload Complete!</h3>
                <p className="text-[14px] text-[#94A3B8] mb-6">{selectedFile?.name} has been uploaded successfully.</p>
                <div className="flex justify-center gap-4">
                  <a href="/dashboard/meetings/1" className="px-6 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/20">View Analysis</a>
                  <button onClick={(e) => { e.stopPropagation(); reset(); }} className="px-6 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[13px] font-medium text-[#E8ECF1] hover:bg-white/[0.08] transition-colors">Upload Another</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 cursor-pointer hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all border border-cyan-500/20">
              <Link2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#E8ECF1] mb-0.5">Join Meeting via Link</h3>
              <p className="text-[12px] text-[#94A3B8]">Paste a Zoom, Meet, or Teams link</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 cursor-pointer hover:bg-white/[0.04] hover:border-rose-500/30 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-rose-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-500/20 transition-all border border-rose-500/20">
              <Radio className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h3 className="text-[14px] font-semibold text-[#E8ECF1] mb-0.5">Start Live Recording</h3>
              <p className="text-[12px] text-[#94A3B8]">Record directly from your microphone</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
