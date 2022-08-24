import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import DekstopNav from "../DekstopNav/DekstopNav";

function Header() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <div>
      <header className="container flex justify-between items-center py-[13px] md:py-[23px]">
        <div className="max-w-[100px] md:max-w-[177px]">
          <Link href={"/"}>
            <a>
              <Image
                src="/img/logo.svg"
                alt="logo image"
                width={177}
                height={52}
              />
            </a>
          </Link>
        </div>
        <nav className="font-montserrat hidden md:flex items-center gap-12">
          <DekstopNav />
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpenMobileNav((prev) => !prev)}
        >
          {isOpenMobileNav ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
        </button>
      </header>

      <Collapsible transitionTime={300} trigger={""} open={isOpenMobileNav}>
        <div>
          <DekstopNav onClick={() => setIsOpenMobileNav(false)} />
        </div>
      </Collapsible>
    </div>
  );
}

export default Header;
