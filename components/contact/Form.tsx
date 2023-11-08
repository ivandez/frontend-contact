"use client";

import { Label, TextInput, Button } from "flowbite-react";

type Props = {
  apiURL: string;
};

const Form = ({ apiURL }: Props) => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nam1" value="Name" />
        </div>
        <TextInput id="nam1" type="nam1" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber" value="Phone number" />
        </div>
        <TextInput id="phoneNumber" type="phoneNumber" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <Button type="submit" color="yellow">
        Confirm
      </Button>
    </form>
  );
};

export default Form;
