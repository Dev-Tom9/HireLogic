"use client";
import React, { useState } from 'react';
import { Upload, X, FileText, CheckCircle } from 'lucide-react';

export const FileUpload = () => {
  const [files, setFiles] = useState<{ name: string; size: string; status: string }[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
        status: "processing"
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-12 h-12 text-slate-400 mb-4" />
          <p className="mb-2 text-sm text-slate-700 font-semibold text-center px-4">
            Click to upload or drag and drop resumes
          </p>
          <p className="text-xs text-slate-500">PDF, DOCX (Max 10MB each)</p>
        </div>
        <input type="file" className="hidden" multiple onChange={handleUpload} />
      </label>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <FileText className="text-blue-600" size={20} />
                <div>
                  <p className="text-sm font-medium text-slate-900">{file.name}</p>
                  <p className="text-xs text-slate-500">{file.size}</p>
                </div>
              </div>
              {file.status === "processing" ? (
                <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold">
                  <span className="animate-spin text-lg">◌</span> AI Parsing...
                </div>
              ) : (
                <CheckCircle className="text-green-500" size={20} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
                    
