import React from "react";

export function VideoCard(props:any) {
  return (
    <div className="">
      {/* <div> */}
      <img className=" h-25 rounded-lg" src={props.thumbnailSrc} />
      {/* </div> */}
      <div className=" grid grid-cols-12 pt-2">
        <img
          className=" h-16 aspect-square rounded-full col-span-2"
          src={props.channelImgSrc}
        />
        <div className=" col-span-10 pl-3">
          <div>{props.title}</div>
          <div className=" text-gray-400 text-base">{props.channelName}</div>
          <div className=" text-gray-400 text-base">{props.views} | {props.timestamp}</div>
        </div>
      </div>
    </div>
  );
}
