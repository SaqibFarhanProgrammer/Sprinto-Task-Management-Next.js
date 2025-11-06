import { Button } from "@/components/ui/button";
import React from "react";



const MainButton  = ({ text ,classname,onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={` ${classname} rounded-full px-8 py-5 text-sm font-medium  `}
    >
      {text}
    </Button>
  );
};

export default MainButton;
