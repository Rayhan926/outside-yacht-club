import React from "react";
import { IoMenu } from "react-icons/io5";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <button>
        <IoMenu size={24} />
      </button>
    </nav>
  );
}

export default MobileNav;
