import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import format from "date-fns/format";
type LinkCard ={
  createdAt:String,
  longUrl:String,
  shortUrl:String,
  count:String
}




const LinkCard = ({count,createdAt,longUrl,shortUrl}:LinkCard) => {
  // const date=new Date(createdAt)
  return (
    <div>
      {/* <p className="text-gray-400">Created At {format(date, 'dd.MM.yyyy')}</p> */}
      <p className="text-gray-400">Created At 06-23-2023</p>

      <section className="flex justify-between mt-5">
        <div>
          <p className="text-[1.5rem]">In progress</p>
          <p>{longUrl}</p>
          <span className="flex gap-4 mt-5">
            <p >{shortUrl}</p> 

            <button className="bg-[#0ab455] text-white rounded py-0.5  px-2">Copy</button>
            <button className=" bg-[#e92556] rounded text-white py-0.5  px-2">Delete</button>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex items-center gap-1">
            <span>{count}</span> <MdOutlineBarChart />
          </p>
          <p>Total Clicks</p>
        </div>
      </section>
    </div>
  );
};

export default LinkCard;
