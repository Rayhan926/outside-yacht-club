import React from "react";
import cx from "classnames";
import { useMintStep } from "../../state";

const MintStepButton = ({ step, title, isActive }) => {
  const [, setMintStep] = useMintStep();
  return (
    <div
      className="flex flex-col justify-center items-center font-open-sans font-semibold gap-1 cursor-pointer"
      onClick={() => setMintStep(step)}
    >
      <div
        className={cx(
          "w-9 h-9 md:w-11 md:h-11 rounded-full  flex justify-center items-center shrink-0 text-base md:text-lg leading-[18px]",
          isActive ? "bg-primary text-black" : "bg-[#4A4A4A] text-white",
        )}
      >
        {step}
      </div>
      <p className="text-base font-light">{title}</p>
    </div>
  );
};

export default MintStepButton;
