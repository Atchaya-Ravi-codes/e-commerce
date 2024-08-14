import Image from "next/image";
import React from "react";

export const Copyright = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
      <div className="text-sm text-[#00000099]">
        © 2000-2023 Shop.co, All Rights Reserved
      </div>
      <div className="flex justify-between">
        <Image
          src="/images/visa.svg"
          alt="visa"
          className="w-auto h-auto"
          width={46}
          height={30}
        />
        <Image
          src="/images/master.svg"
          alt="mastercard"
          className="w-auto h-auto"
          width={46}
          height={30}
        />
        <Image
          src="/images/paypal.svg"
          alt="payPal"
          className="w-auto h-auto"
          width={46}
          height={30}
        />
        <Image
          src="/images/applepay.svg"
          alt="apple pay"
          className="w-auto h-auto"
          width={46}
          height={30}
        />
        <Image
          src="/images/googlepay.svg"
          alt="google pay"
          className="w-auto h-auto"
          width={46}
          height={30}
        />
      </div>
    </div>
  );
};
