import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import format from "date-fns/format";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {  toast } from 'react-toastify';

type LinkCard ={
  _id:String,
  createdAt:String,
  longUrl:String,
  shortUrl:string,
  count:String,
  getQr:any,
  onClick:any
}




const LinkCard = ({_id,count,createdAt,longUrl,shortUrl,getQr,onClick}:LinkCard) => {
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
            <CopyToClipboard text={shortUrl}
          onCopy={() =>toast.success('copied') }>
            <button className="bg-[#0ab455] text-white rounded py-0.5  px-2">Copy</button>
            </CopyToClipboard>
            <button onClick={()=>getQr(_id)} className=" bg-blue-400 rounded text-white py-0.5  px-2">Get qr</button>
            <button onClick={()=>onClick(_id)} className=" bg-[#e92556] rounded text-white py-0.5  px-2">Delete</button>
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
