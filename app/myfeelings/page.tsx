"use client";
import Link from "next/link";
import emotions from "@/app/data/emotions.json";
function page() {
  return (
    <div className="sm:w-[75%]  px-4 sm:px-6 md:px-8 lg:px-10 mx-auto mt-5 text-center">
      <p className="font-bold underline underline-offset-8 mt-5">أنا اشعر...</p>

      <div className="flex gap-10 p-4 flex-wrap justify-center">
        {emotions.map((emotion) => (
          <Link href={`/myfeelings/${emotion.route}`} key={emotion.name}>
            <div
              className={`group w-24 h-24 flex items-center justify-center rounded-lg shadow-md cursor-pointer 
                ${emotion.color}`}
            >
              <span className="text-lg transition-all duration-300 group-hover:text-sm">
                {emotion.value}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
