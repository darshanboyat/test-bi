import Image from "next/image";
import { useEffect, useState } from "react";

export default function loader({none}) {
  return (
    <>
      <div className={`position-loader first-component ${none}`}>
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/biloader.gif" className="w-full" alt="BrainInventory loading..."></img>
      </div>
    </>
  );
}
