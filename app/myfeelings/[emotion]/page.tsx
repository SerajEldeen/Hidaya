import BackArrow from "@/hooks/BackArrow";
import Image from "next/image";
import emotions from "@/app/data/emotions.json";

type Quote = {
  name?: string;
  number: number | string;
  quote: string;
};

type Emotion = {
  name: string;
  value: string;
  route: string;
  quotes: Quote[];
};

export default function Page({ params }: { params: { emotion: string } }) {
  const currEmotion: Emotion | undefined = emotions.find(
    (e) => e.route === params.emotion
  );

  if (!currEmotion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <BackArrow route="/myfeelings" />
        <p className="mt-4 text-4xl font-extrabold">Emotion not found</p>
      </div>
    );
  }

  return (
    <>
      <p className="sm:text-right text-center mt-10 mb-10 sm:px-20 px-10 font-medium sm:tracking-widest tracking-wide text-xl sm:text-3xl ">
        أنا اشعر بـ{currEmotion.value}
      </p>
      {currEmotion.quotes.map((item) => (
        <div
          key={item.number}
          className="w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto mt-20"
        >
          <BackArrow route="/myfeelings" />

          <div className="flex justify-center items-center">
            <div className="w-full max-w-md h-40 sm:h-48 md:h-52 border-2 border-[#FF9898] rounded-xl relative">
              {/* Centered Number */}
              <span className="absolute text-[#FF9898] font-medium left-1/2 -translate-x-1/2 -top-10 text-base sm:text-lg">
                #{item.number}
              </span>

              {/* Top left quote */}
              <Image
                width={30}
                height={30}
                src="/double-quotes 2.png"
                alt="Double-quotes"
                className="absolute left-4 -top-4"
              />

              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <p className="font-extrabold text-sm sm:text-base md:text-lg leading-7">
                  {item.quote}
                </p>
              </div>

              {/* Bottom right quote */}
              <Image
                width={30}
                height={30}
                src="/double-quotes 1.png"
                alt="Double-quotes"
                className="absolute right-4 -bottom-4"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
