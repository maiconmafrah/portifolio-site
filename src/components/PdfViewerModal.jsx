import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker to enable react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function PdfViewerModal({ isOpen, onClose, pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cyber-dark/80 backdrop-blur-sm p-4 sm:p-6"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1a1f2e] border border-cyber-green/30 rounded-lg shadow-2xl overflow-hidden w-full max-w-5xl h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyber-green/20 bg-[#121620]">
              <h3 className="text-white font-mono text-lg flex items-center gap-2">
                <span className="text-cyber-green">01.</span> Currículo
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#1a1f2e] rounded border border-cyber-green/20 p-1">
                  <button onClick={zoomOut} className="p-1 hover:text-cyber-green text-gray-400 transition-colors">
                    <ZoomOut size={18} />
                  </button>
                  <span className="text-xs font-mono text-gray-400 w-12 text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button onClick={zoomIn} className="p-1 hover:text-cyber-green text-gray-400 transition-colors">
                    <ZoomIn size={18} />
                  </button>
                </div>
                
                <a 
                  href={pdfUrl} 
                  download="Currículo_Maicon_Mafra.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-cyber-green/10 hover:bg-cyber-green text-cyber-green hover:text-cyber-dark rounded text-sm font-mono transition-colors border border-cyber-green"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Baixar</span>
                </a>
                
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors ml-2"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-[#0d1017] p-4 flex justify-center">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center h-full text-cyber-green font-mono">
                    <div className="w-8 h-8 border-2 border-cyber-green border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p>Carregando PDF...</p>
                  </div>
                }
                error={
                  <div className="text-red-400 font-mono flex flex-col items-center justify-center h-full">
                    <p>Erro ao carregar o currículo.</p>
                    <p className="text-sm mt-2">Por favor, adicione seu currículo em public/curriculo.pdf</p>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="mb-4 shadow-xl last:mb-0">
                    <Page 
                      pageNumber={index + 1} 
                      scale={scale} 
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </div>
                ))}
              </Document>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
