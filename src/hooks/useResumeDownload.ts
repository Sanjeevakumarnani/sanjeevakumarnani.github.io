import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const useResumeDownload = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadResume = async () => {
    if (!resumeRef.current) return;

    try {
      const element = resumeRef.current;
      
      // Wait a bit to ensure images are loaded
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('Sanjeeva_Kumar_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return { resumeRef, downloadResume };
};
