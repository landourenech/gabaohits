"use client";

import { RecentlyPlayed} from "../components/client/RecentlyPlayed.jsx";

export default function Client() {
  
  return (
    <>
      <div className="flex w-[90%] flex-col gap-5 ">
      <RecentlyPlayed />
      <RecentlyPlayed />
      <RecentlyPlayed />
      </div>
    </>
  );
}
