import { useState, useEffect } from "react";
import "./IntroVideo.css"; // ملف التنسيقات

const IntroVideo = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFinish(); // إخفاء الفيديو بعد 10 ثوانٍ احتياطيًا
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  return (
    isVisible && (
      <div className="intro-overlay">
        <video
          className="intro-video"
          autoPlay
          muted
          playsInline
          onEnded={handleFinish}
        >
          <source src="/introVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  );
};

export default IntroVideo;
