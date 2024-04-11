import Image from "next/image";
import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <main>
      <VideoCard
      thumbnailSrc={"/thumbnail.webp"}
      channelImgSrc=  {"/channels4_profile.jpg"}
      title={"The Boys on Michael Venom Page's UFC Debut"}
      channelName={"Mighty"}
      views={"11k view"}
      timestamp={"6 days ago"}
      />
    </main>
  );
}
