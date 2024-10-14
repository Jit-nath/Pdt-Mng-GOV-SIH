// App.tsx
import React from "react";
import Navbar from "@/components/navbar";
import Banner from "@/components/banner";

export default function App(): JSX.Element {
  return (
    <div className="p-6">
      <Navbar />
      <Banner />
      <section className="border h-96 mt-8"></section>
      <Banner />
    </div>
  );
}
