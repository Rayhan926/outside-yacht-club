import React from "react";
import { IoMdCopy } from "react-icons/io";

function SmartContractAddress() {
  return (
    <div className="flex justify-center">
      <div className="my-[95px] py-[18px] px-[28px] inline-flex items-center gap-4 bg-[#1D1D1D] rounded">
        <p className="leading-5 text-white">
          VERIFIED SMART CONTRACT ADDRESS:{" "}
          <span className="font-semibold">
            0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
          </span>
        </p>
        <button className="text-primary">
          <IoMdCopy size={26} />
        </button>
      </div>
    </div>
  );
}

export default SmartContractAddress;
