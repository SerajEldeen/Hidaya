"use client";
import { useState, useEffect } from "react";

const texts: string[] = [
  "مَا أَصَابَ مِنْ مُصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنْفُسِكُمْ إِلَّا فِي كِتَابٍ مِّنْ قَبْلِ أَنْ نَبْرَأَهَا ۚ إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ",
  "لِكَيْ لَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ وَلَا تَفْرَحُوا بِمَا آتَاكُمْ ۗ وَاللَّهُ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ",
  "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
  "وَأَنْ لَيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ ۞ وَأَنَّ سَعْيَهُ سَوْفَ يُرَىٰ",
  "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
  "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُمْ بِإِيمَانٍ أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ وَمَا أَلَتْنَاهُمْ مِنْ عَمَلِهِمْ مِنْ شَيْءٍ كُلُّ امْرِئٍ بِمَا كَسَبَ رَهِينٌ",
  "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
];

const typingSpeed = 80;

const MovingText = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [fullText, setFullText] = useState<string>("");

  useEffect(() => {
    // Pick a random text on mount
    const randomIndex = Math.floor(Math.random() * texts.length);
    setFullText(texts[randomIndex]);
  }, []);

  useEffect(() => {
    if (!fullText) return; // wait for fullText to be set

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="flex justify-center items-center p-10 mt-2">
      <div className="text-2xl sm:text-3xl leading-10 text-[#FFA673] text-center max-w-[800px] sm:h-[70px] h-[120px] font-bold">
        {displayText}
      </div>
    </div>
  );
};

export default MovingText;
