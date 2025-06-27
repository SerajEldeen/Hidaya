import Image from "next/image";
import habbits from "@/app/data/habbits.json";
import Link from "next/link";
function SuccessOverview() {
  const habbitOverview = habbits.slice(0, 4);
  return (
    <div className="mt-5 mb-3 flex flex-col justify-center items-center">
      <h3 className="text-[#FF9898] text-xl font-bold">
        نجاحات من نور الإسلام
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-10 mt-5">
        {habbitOverview.map((habbit) => (
          <Link href={`success-in-islam/${habbit.route}`} key={habbit.name}>
            <div className="flex flex-col items-center">
              <div
                className="relative w-52 h-52 overflow-hidden rounded-full
              transition-transform duration-500 ease-in-out hover:scale-110 bg-[#FFE8CD]
              group cursor-pointer "
              >
                <Image
                  src={habbit.photoSrc}
                  fill
                  alt={habbit.name}
                  className="object-cover absolute inset-0 w-full h-full rounded-full teleport-on-hover"
                />
              </div>

              <h2 className="font-bold mt-4 text-center">{habbit.value}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SuccessOverview;
