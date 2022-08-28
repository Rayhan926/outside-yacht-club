import Image from "next/image";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { useMintStep } from "../../state";
import { wallets } from "../ConnectWalletModal/ConnectWalletModal";

const MintConnectWalletStep = () => {
  const [, setMintStep] = useMintStep();
  return (
    <div className="max-w-[calc(100vw-40px)] w-[550px] rounded-2xl gradient_border border p-[35px] animate_slide_in">
      {/* Header --Start-- */}
      <div className="px-4 md:px-9 flex justify-end items-center pb-[28px] relative">
        <h3 className="text-center text-base md:text-[20px] leading-[140%] uppercase font-montserrat italic font-bold max-w-[395px] mx-auto">
          How would you like to Access your assets?
        </h3>
      </div>
      {/* Header --End-- */}

      {/* Body --Start-- */}
      <div className="pt-3 md:pt-[25px]">
        {wallets.map(({ desc, iconSrc, name }, i) => (
          <div
            key={i}
            onClick={() => setMintStep(2)}
            className="flex items-center gap-[22px] pl-3 border-t last:border-b-0 border-white/30 mt-5 md:mt-7 first:mt-0 cursor-pointer hover:text-primary text-white pt-5 md:pt-7"
          >
            <div className="max-w-[35px] md:max-w-[50px]">
              <Image src={iconSrc} alt={name} width={50} height={50} />
            </div>
            <div>
              <h4 className="text-lg md:text-[24px] font-montserrat font-bold ">
                {name}
              </h4>
              <p className="text-sm md:text-base font-open-sans">{desc}</p>
            </div>

            <div className="ml-auto">
              <TbArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
        ))}
      </div>
      {/* Body --End-- */}
    </div>
  );
};

export default MintConnectWalletStep;
