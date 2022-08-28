import Image from "next/image";
import React from "react";

const MintForm = () => {
  return (
    <div className="rounded-2xl border gradient_border px-5 md:px-[35px] p-[35px] max-w-[calc(100vw-40px)] w-[496px] animate_slide_in">
      <div className="text-center">
        <h3 className="font-montserrat font-bold italic text-[24px] leading-[29px] uppercase">
          Join the party
        </h3>
        <p className="font-open-sans text-base mt-1.5">
          Enter the amount of OSYC you would like to collect
        </p>
      </div>

      <div className="w-[174px] h-[174px] relative rounded-lg overflow-hidden mx-auto my-[30px]">
        <Image alt="Mint" src={"/img/mint.jpg"} layout="fill" />
      </div>

      <div>
        <InfoList title={"Remaining"} value="4583/99999" />
        <InfoList title={"Price"} value="0,18 ETH" />
        <InfoList
          title={"Quantity"}
          value={
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative">
                <input
                  type="number"
                  defaultValue={2}
                  className="bg-white outline-none border border-secondary rounded-[7px] w-[80px] text-black font-montserrat font-medium px-2 pl-5 py-1"
                />

                <div className="w-px h-full absolute top-0 right-8 bg-[#505050]/30"></div>
              </div>
              <p>0.36 ETH + GAS</p>
            </div>
          }
        />

        <div className="space-y-1">
          <button className="bg-primary border border-primary hover:btn_shadow hover:bg-black duration-150 hover:text-white font-montserrat text-black px-[18px] py-[14px] text-base font-semibold leading-[15px] rounded-md uppercase w-full">
            Mint OSYC
          </button>
          <button className="border text-primary hover:text-white border-transparent font-montserrat pt-[22px] text-base font-semibold leading-[15px] rounded-md uppercase w-full">
            View Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintForm;

const InfoList = ({ title, value }) => {
  return (
    <div className="flex justify-between gap-2 flex-wrap text-[16px] leading-[150%] font-montserrat font-bold pb-[22px] mb-6 border-b border-white/30">
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};
