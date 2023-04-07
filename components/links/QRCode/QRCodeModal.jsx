import { useState } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import NextImage from "next/image";

const QRCodeModal = ({ link, closeModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  const download = () => {
    const svg = document.getElementById(`QRCode__${link}`);
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    setDownloaded(true);
  };

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className="bg-white w-[35em] max-w-2xl m-5 flex flex-col gap-8 rounded-2xl">
        <div className="heading relative flex justify-start items-end h-24 bg-[#C6E2F1] rounded-t-2xl">
          <div className="title-and-close z-10 p-5 flex justify-between items-center w-full">
            <h1 className="text-5xl font-bold tracking-tight text-headings dark:text-headings-dark">
              QR Code:
            </h1>
            <div className="close-button cursor-pointer" onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="bg-image rounded-t-2xl h-full overflow-hidden absolute top-0 opacity-30">
            <NextImage
              src="/dashboard-bg.png"
              alt="Header background image"
              className="w-full"
              width={1080}
              height={1080}
            />
          </div>
        </div>
        <div className="justify-center items-center w-full px-8">
          <QRCode
            id={`QRCode__${link}`}
            value={link}
            style={{ width: "100%", height: "auto" }}
          />
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-center pt-4 text-primary underline cursor-pointer font-bold block"
          >
            {link}
          </a>
        </div>
        <div className="buttons gap-4 px-8 pb-8">
          <button
            onClick={download}
            className="w-full border-2 border-primary font-semibold bg-primary text-white cursor-pointer text-center py-3 px-16 rounded-lg text-xl inline-block"
          >
            {downloaded ? "Downloaded!" : "Download"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QRCodeModal;
