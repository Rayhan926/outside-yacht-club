import Image from "next/image";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import cx from "classnames";
import { useOpeConnectWalletModal } from "../../state";
import { TbArrowUpRight } from "react-icons/tb";

export const wallets = [
  {
    iconSrc: "/img/metamask.png",
    name: "Metamask",
    desc: "Connect to your metamask wallet",
  },
  {
    iconSrc: "/img/wallet-connect.png",
    name: "WalletConnect",
    desc: "Scan with WalletConnect to connect",
  },
  {
    iconSrc: "/img/coinbase.png",
    name: "Coinbase Wallet",
    desc: "Connect to your Coinbase wallet",
  },
];

const ConnectWalletModal = () => {
  const [open, setOpen] = useOpeConnectWalletModal();
  const closeModal = () => setOpen(false);
  return (
    <div
      id="modal_overlay"
      onClick={(e) => e.target.id === "modal_overlay" && closeModal()}
      className={cx(
        "fixed top-0 left-0 w-full h-screen z-[99999] bg-black/80 duration-500",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className={cx(
          "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 duration-500",
          open ? "top-1/2 cubic_bounce" : "-top-[30%]",
        )}
      >
        <div className="max-w-[calc(100vw-40px)] w-[550px] rounded-2xl bg-primary">
          {/* Header --Start-- */}
          <div className="px-4 md:px-9 flex justify-end items-center py-5 bg-black relative rounded-t-2xl border-2 border-b-0 border-primary">
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base md:text-[20px] leading-[24px] font-montserrat italic font-extrabold">
              Connect Wallet
            </h3>

            <button onClick={closeModal}>
              <IoCloseSharp size={25} />
            </button>
          </div>
          {/* Header --End-- */}

          {/* Body --Start-- */}
          <div className="p-4 pt-3 md:p-9 md:pt-[25px]">
            {wallets.map(({ desc, iconSrc, name }, i) => (
              <div
                key={i}
                className="flex items-center gap-[22px] pl-3 border-b last:border-b-0 last:pb-0 border-black/60 mb-5 md:mb-7 last:mb-0 cursor-pointer pb-5 md:pb-7"
              >
                <div className="max-w-[35px] md:max-w-[50px]">
                  <Image src={iconSrc} alt={name} width={50} height={50} />
                </div>
                <div>
                  <h4 className="text-lg md:text-[24px] font-montserrat text-black font-bold">
                    {name}
                  </h4>
                  <p className="text-sm md:text-base text-black font-open-sans">
                    {desc}
                  </p>
                </div>

                <div className="ml-auto text-black">
                  <TbArrowUpRight className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              </div>
            ))}
          </div>
          {/* Body --End-- */}
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
