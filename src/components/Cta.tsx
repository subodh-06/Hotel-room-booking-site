"use client";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="pb-10 md:py-16 bg-[#141413]">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-800 flex flex-col items-center justify-between gap-8 rounded-lg p-6 text-center md:flex-row md:items-center md:text-left lg:px-20 lg:py-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-2 text-2xl font-bold md:text-3xl text-gray-50">
              Book Your Dream Stay Today!
            </h4>
            <p className="text-lg text-gray-200 leading-relaxed">
              Find the perfect hotel with comfort, luxury, and the best deals—all in one place.
            </p>
            <Button className="mt-6 flex items-center gap-2 px-4 py-2 text-white bg-primary hover:bg-primary-dark">
              Explore Hotels <ArrowRight className="size-4" />
            </Button>
          </div>

          {/* Right List */}
          <div className="w-full md:w-1/2 text-gray-200">
            <ul className="space-y-3 text-sm font-medium sm:text-base lg:text-lg">
              {[
                "Best price guarantee on every booking",
                "Exclusive deals & discounts for members",
                "24/7 customer support for hassle-free stays",
              ].map((text, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-3 size-5 text-white" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
