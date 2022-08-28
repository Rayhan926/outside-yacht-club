import React from "react";
import Image from "next/image";

function TheSpecs() {
  return (
    <section className="mt-[60px] md:mt-[130px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[584px,auto] gap-[43px] md:gap-[172px] pb-[65px]">
          <div className="space-y-[15px] md:mt-[40px]">
            <h2 className="title_lg">thE sPECS</h2>
            <p className="body_text">
              Each Ape is unique and programmatically generated from over XX
              possible traits, including expression, headwear, clothing, and
              more. All apes are Amzing , but some are rarer than others.
            </p>
            <p className="body_text">
              The apes are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS.{" "}
              <span className="text-primary">(See Record and Proof.)</span>{" "}
              Purchasing an ape costs 0.05 ETH.
            </p>
            <p className="body_text">
              To access members-only areas such as THE HOUSEWELL, Apeholders
              will need to be signed into their Metamask Wallet
            </p>
          </div>

          <div className="max-w-[390px]">
            <Image
              src="/img/the_specs.png"
              quality={100}
              width={390}
              height={415}
              alt="the_specs"
            />
          </div>
        </div>

        <div className="border-b border-white/40"></div>
      </div>
    </section>
  );
}

export default TheSpecs;
