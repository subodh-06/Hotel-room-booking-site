"use client";
import Image from "next/image";

const ImageBanner = () => {
  return (
    <section className="py-12 md:py-24 bg-[url(/grid.svg)] bg-[#141413]">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-800 overflow-hidden rounded-lg md:rounded-xl">
          <div className="relative w-full" style={{ aspectRatio: '75 / 16' }}>
          <Image
  src="https://assets.oyoroomscdn.com/cmsMedia/33e8565d-f803-49ab-9269-a4bc97cd835d.jpg"
  alt="Banner Image"
  fill  // ✅ Equivalent to layout="fill"
  style={{ objectFit: "cover" }}  // ✅ Replaces objectFit
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
