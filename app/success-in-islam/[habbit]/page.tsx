import BackArrow from "@/hooks/BackArrow";
import Image from "next/image";
import habbits from "@/app/data/habbits.json";
type Habbit = {
  name: string;
  photoSrc: string;
  route: string;
  value: string;
  verse: string;
  usefulValue: string[];
  leading: string[];
};

interface PageProps {
  params: {
    habbit: string;
  };
}
function page({ params }: PageProps) {
  const currHabbit: Habbit | undefined = habbits.find(
    (e) => e.route === params.habbit
  );
  if (!currHabbit) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
        <BackArrow route="/myfeelings" />
        <p className="mt-4 text-4xl font-extrabold">Habbit not found</p>
      </div>
    );
  }
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 mx-auto mb-5">
      <BackArrow route="/success-in-islam" />
      {/* Image Section  */}
      <div className="flex flex-col items-center mt-5">
        <div className="relative w-60 h-60 overflow-hidden rounded-full">
          <Image
            src={currHabbit.photoSrc}
            fill
            alt={currHabbit.name}
            className="object-cover "
          />
        </div>
        <h2 className="font-bold mt-4 text-center">{currHabbit.value}</h2>
      </div>
      {/* useful benefit */}
      <div className="font-bold  w-full px-6 sm:px-8 md:px-10 lg:px-12 mx-auto mt-5">
        <h2 className="font-semibold text-[#FF9898] mb-5">📖 القيمة النافعة</h2>
        <ul className="space-y-3">
          {currHabbit.usefulValue.map((e, i) => (
            <li key={i} className="before:content-['🔳'] before:mr-2">
              {e}
            </li>
          ))}
        </ul>
      </div>

      {/* What Islam Has Lead for */}
      <div className="mt-12 font-bold  w-full px-6 sm:px-8 md:px-10 lg:px-12 mx-auto ">
        <h2 className="font-semibold text-[#FF9898] mb-10">
          🕋 ما الذي سبق إليه الإسلام؟
        </h2>
        <p className="font-extrabold text-[#FFA673] text-3xl text-center">
          &ldquo;{currHabbit.verse}&quot;
        </p>

        <ul className="space-y-3 mt-10 mb-10">
          {currHabbit.leading.map((e, i) => (
            <li key={i} className="before:content-['🔳'] before:mr-2">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;
