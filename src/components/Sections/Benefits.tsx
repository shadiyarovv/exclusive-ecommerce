import { CircleGauge, Headset, ShieldCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section className="w-3/4 mx-auto flex justify-between">
      <div className="flex flex-col items-center text-center gap-5">
        <div className="bg-black p-4 rounded-full">
          <CircleGauge size={30} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h5 className="uppercase text-xl font-semibold">
            Free and fast delivery
          </h5>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <div className="bg-black p-4 rounded-full">
          <Headset size={30} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h5 className="uppercase text-xl font-semibold">
            24/7 CUSTOMER SERVICE
          </h5>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <div className="bg-black p-4 rounded-full">
          <ShieldCheck size={30} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h5 className="uppercase text-xl font-semibold">
            MONEY BACK GUARANTEE
          </h5>
          <p className="text-sm">We reurn money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
