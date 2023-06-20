import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import format from "date-fns/format";
type LinkCard ={
  id:String
  createdAt:Date,
  name:String,
  longURL:String,
  shortCode:String,
  totalClicks:number
}

const LinkCard = ({createdAt,name,longURL,shortCode,totalClicks}:LinkCard) => {
  return (
    <div>
      <p className="text-gray-400">Created At {format(createdAt,"d MMM, HH:MM")}</p>
      <section className="flex justify-between mt-5">
        <div>
          <p className="text-[1.5rem]">{name}</p>
          <p>{longURL}</p>
          <span className="flex gap-4 mt-5">
            <p >{window.location.host}/{shortCode}</p> 

            <button className="bg-[#0ab455] text-white rounded py-0.5  px-2">Copy</button>
            <button className=" bg-[#e92556] rounded text-white py-0.5  px-2">Delete</button>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex items-center gap-1">
            <span>{totalClicks}</span> <MdOutlineBarChart />
          </p>
          <p>Total Clicks</p>
        </div>
      </section>
    </div>
  );
};

export default LinkCard;
