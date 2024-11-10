import Link from "next/link";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const NewArrival = () => {
  return (
    <SectionContainer>
      <SectionTitle subtitle="Featured" title="New Arrival" empty />
      <div className="flex gap-5 text-white">
        <div className="w-1/2 rounded-md bg-black h-[600px] relative">
          <div className="absolute bottom-4 left-6 flex flex-col gap-4 w-1/2">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/" className="underline underline-offset-2">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 rounded-md relative">
          <div className="h-1/2 rounded-md bg-black relative">
            <div className="absolute bottom-4 left-6 flex flex-col gap-4 w-1/2">
              <h3 className="text-2xl font-semibold">Women's Collections</h3>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <Link href="/" className="underline underline-offset-2">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="h-1/2 rounded-md relative flex gap-5">
            <div className="w-1/2 rounded-md bg-black relative h-full">
              <div className="absolute bottom-4 left-6 flex flex-col gap-2 w-2/3">
                <h3 className="text-2xl font-semibold">Speakers</h3>
                <p className="text-sm">Amazon wireless speakers</p>
                <Link href="/" className="underline underline-offset-2">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="w-1/2 rounded-md bg-black relative h-full">
              <div className="absolute bottom-4 left-6 flex flex-col gap-2 w-2/3">
                <h3 className="text-2xl font-semibold">Perfume</h3>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <Link href="/" className="underline underline-offset-2">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NewArrival;
