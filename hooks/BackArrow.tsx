"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackArrowProps {
  route: string;
}

const BackArrow: React.FC<BackArrowProps> = ({ route }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="fixed top-6 left-6 z-50 px-3 py-3 border transition-all duration-300
        border-[#FF9898] bg-white text-[#FF9898] shadow-md
        hover:bg-[#FF9898] hover:text-white cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowLeft />
    </button>
  );
};

export default BackArrow;
