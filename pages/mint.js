import React from "react";
import Header from "../components/Header";
import MintConnectWalletStep from "../components/MintConnectWalletStep";
import MintForm from "../components/MintForm";
import MintStepButton from "../components/MintStepButton";
import cx from "classnames";
import { useMintStep } from "../state";

const MintPage = () => {
  const [mintStep, setMintStep] = useMintStep();
  return (
    <>
      <div className="md:absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <section
        className="min-h-[calc(100vh-62px)] md:min-h-screen bg-no-repeat bg-cover overflow-hidden pb-8 pt-[50px] md:pt-[123px]"
        style={{ backgroundImage: 'url("/img/mint-page-bg.png")' }}
      >
        <div>
          {/* Steps --Start-- */}
          <div className="flex gap-6 md:gap-[30px] justify-center">
            <MintStepButton
              step={1}
              isActive={mintStep === 1}
              title="Connect Wallet"
            />
            <div className="w-[52px] shrink-0 h-px bg-[#828282] mt-[21px]"></div>
            <MintStepButton
              isActive={mintStep === 2}
              step={2}
              title="Mint OSYC"
            />
          </div>

          {/* Steps --End-- */}

          {/* Step Body --Start-- */}
          <div className="mt-9 md:mt-[45px] w-fit mx-auto relative">
            {mintStep === 1 ? <MintConnectWalletStep /> : <MintForm />}
          </div>
          {/* Step Body --End-- */}
        </div>
      </section>
    </>
  );
};

export default MintPage;
