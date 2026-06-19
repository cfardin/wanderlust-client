import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <h3>this is homepage, lol</h3>
      <Featured></Featured>
    </div>
  );
}
