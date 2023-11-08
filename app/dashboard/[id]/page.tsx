"use client";

import NavigationBar from "@/components/navbar/NavigationBar";
import { Button } from "flowbite-react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
        <div className="flex gap-6 flex-col mb-4">
          <h1>Name</h1>
          <h2>email</h2>
          <h2>email</h2>
        </div>
        <div className="flex gap-2">
          <Button color="blue">back</Button>
          <Button color="yellow">Edit</Button>
          <Button color="red">delete</Button>
        </div>
      </div>
    </>
  );
}
