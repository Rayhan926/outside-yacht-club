import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { BsCheck2All } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SmartContractAddress() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyHandler = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className="flex justify-center">
      <div className="mb-[64px] md:my-[95px] md:py-[18px] md:px-[28px] inline-flex items-center gap-4 md:bg-[#1D1D1D] rounded">
        <p className="leading-5 text-white text-center">
          VERIFIED SMART CONTRACT ADDRESS:{" "}
          <CopyToClipboard
            text="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
            onCopy={onCopyHandler}
          >
            <span className="text-primary underline cursor-pointer md:text-white md:font-semibold">
              0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
            </span>
          </CopyToClipboard>
        </p>
        <CopyToClipboard
          text="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
          onCopy={onCopyHandler}
        >
          <button className="text-primary hidden md:inline-block w-[26px] h-[26px]">
            {isCopied ? <BsCheck2All size={23} /> : <IoMdCopy size={26} />}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default SmartContractAddress;
