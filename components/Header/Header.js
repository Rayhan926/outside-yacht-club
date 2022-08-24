import Image from "next/image";
import React from "react";
import DekstopNav from "../DekstopNav/DekstopNav";

function Header() {
  return (
    <header className="container flex justify-between items-center">
      <div className="max-w-[100px] md:max-w-[177px]">
        <a href="#">
          <Image src="/img/logo.svg" alt="logo image" width={177} height={52} />
        </a>
      </div>

      <DekstopNav />
    </header>
  );
}

export default Header;
