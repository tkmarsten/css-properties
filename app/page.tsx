import Image from "next/image";
import {
  JustifyContent,
  AlignItems,
  AlignContent,
  NoWrap,
  Wrap,
  WrapReverse,
  Grow,
} from "@/app/components/flex";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto space-y-8">
      <h1 className="text-center text-6xl">CSS Properties</h1>
      <JustifyContent />
      <AlignItems />
      <AlignContent />
      <NoWrap />
      <Wrap />
      <WrapReverse />
      <Grow />
    </main>
  );
}
