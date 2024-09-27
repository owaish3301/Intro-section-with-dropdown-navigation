import React, { forwardRef } from "react";
import MobileNavMenuButtons from "../NavBar/NavBarComponents/MobileNavMenuButtons";

const MenuCard = forwardRef(({ onClose }, ref) => {
  return (
    <div ref={ref} className="fixed h-full w-full bg-black bg-opacity-50 inset-0 z-10 hidden">
      <div className="fixed h-full w-3/5 bg-white right-0 top-0">
        <MobileNavMenuButtons onClose={onClose} />
      </div>
    </div>
  );
});

export default MenuCard;