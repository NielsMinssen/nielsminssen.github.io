import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CVDownloadButton({ className }) {
  const { t, i18n } = useTranslation();
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    if (generating) return;
    setGenerating(true);
    try {
      const lang = i18n.language || "en";
      // Lazy import to keep the main bundle small
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./CVDocument")
      ]);
      const doc = <CVDocument lang={lang} t={t} />;
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Niels_Minssen_CV_${lang.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className={className}>
      <button className="main-button" onClick={handleDownload} disabled={generating}>
        {generating
          ? (i18n.language === "fr" ? "G\u00e9n\u00e9ration..." : "Generating...")
          : t("greeting.seeResume")}
      </button>
    </div>
  );
}
