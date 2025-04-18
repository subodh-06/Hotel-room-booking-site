"use client"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExclusiveDeals = () => {
  return (
    <section className="py-12 md:py-24 bg-[#141413]">
      <div className="container mx-auto px-6">
        <div className=" bg-zinc-800 flex w-full flex-col gap-10 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="mb-3 text-2xl font-semibold text-gray-50 md:mb-4 md:text-4xl lg:mb-6">
            Get access to exclusive deals
            </h3>
            <p className="text-gray-200 lg:text-lg">
            Only the best deals reach your inbox, No Spamming Promise
            </p>
          </div>

          {/* Right Input & Button */}
          <div className="shrink-0 w-full max-w-sm">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
              type="email"
                placeholder="Enter your email"
                className="w-full lg:min-w-72 text-gray-900"
              />
              <Button className="w-full sm:w-auto">Notify Me</Button>
            </div>
            <p className="mt-2 text-xs text-gray-400 text-center lg:text-left">
              View our{" "}
              <a href="#" className="underline hover:text-gray-300">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeals ;