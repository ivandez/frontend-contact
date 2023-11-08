"use client";

import { Button, TextInput } from "flowbite-react";
import List from "@/components/list/List";

export default function Page() {
  return (
    <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
      <form className="flex max-w-md gap-4 ">
        <div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Jhon D..."
            required
          />
        </div>
        <Button type="submit" color="success">
          new
        </Button>
      </form>
      <div className="mt-2">
        <List />
      </div>
    </div>
  );
}
