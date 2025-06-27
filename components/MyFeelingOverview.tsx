import emotions from "@/app/data/emotions.json";
import Link from "next/link";
function MyFeelingOverview() {
  const emotionOverview = emotions.slice(0, 4);
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h3 className="text-[#FF9898] text-xl font-bold">احساسى</h3>
      <div className="holographic-container">
        {emotionOverview.map((emotion) => (
          <Link href={`myfeelings/${emotion.route}`} key={emotion.name}>
            <div className="holographic-card">
              <h2>{emotion.value}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyFeelingOverview;
