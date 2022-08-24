import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-between pt-[48px] pb-[65px] border-t border-white/40">
        <div className="max-w-[186px]">
          <Image src="/img/footer_logo.png" width={186} height={181} />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h4 className="font-black leading-5 text-base italic uppercase">
              Get on the list
            </h4>
            <div>
              <input type="text" />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
