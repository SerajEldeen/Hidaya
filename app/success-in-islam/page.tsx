import Image from "next/image";
import Link from "next/link";
import habbits from "@/app/data/habbits.json";
function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <p className="text-[#FF9898] max-w-xl text-center p-2 font-bold">
        يسلط هذا القسم الضوء على صفات الاشخاص الناجحين ويُبيّن كيف أن الإسلام
        سبق في ترسيخ القيم التي بُنيت عليها نجاحاتهم.
      </p>
      <p className="text-[#FF9898] text-center pt-5">
        ────────── ✨ ──────────
      </p>
      <div className="flex flex-wrap justify-center sm:w-[75%]  px-4 sm:px-6 md:px-8 lg:px-10 mx-auto items-center gap-10 mt-6 mb-6">
        {habbits.map((e) => (
          <Link href={`success-in-islam/${e.route}`} key={e.name}>
            <div className="flex flex-col items-center">
              <div
                className="relative w-48 h-48 overflow-hidden rounded-full
              transition-transform duration-500 ease-in-out hover:scale-110 
              group cursor-pointer bg-transparent hover:bg-orange-50"
              >
                <Image
                  fill
                  src={e.photoSrc}
                  alt={e.name}
                  className="object-cover absolute inset-0 w-full h-full rounded-full teleport-on-hover"
                />
              </div>

              <h2 className="font-bold mt-4 text-center">{e.value}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
