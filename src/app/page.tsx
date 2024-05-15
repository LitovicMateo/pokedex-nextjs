import BottomScreen from "@/components/layout/BottomScreen";
import Controls from "@/components/layout/Controls";
import TopScreen from "@/components/layout/TopScreen";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[30px] justify-start items-center bg-gradient-to-br p-[32px] pt-[64px] from-[#B63838] to-[#B22424] h-svh w-full max-h-[930px] max-w-[430px] rounded-md ">
      <TopScreen />
      <Controls />
      <BottomScreen />
    </main>
  );
}
