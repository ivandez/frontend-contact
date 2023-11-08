"use client";

import axios from "axios";
import { Label, TextInput, Button } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  apiURL: string;
};

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
};

const Form = ({ apiURL }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("http://localhost:3000/v1/agenda", data);
      alert("Contact created!");
    } catch (error) {
      console.log(error);

      alert("error");
    }
  };

  return (
    <form
      className="flex max-w-md flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nam1" value="Name" />
        </div>
        <TextInput id="nam1" type="nam1" required {...register("name")} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber" value="Phone number" />
        </div>
        <TextInput
          id="phoneNumber"
          type="phoneNumber"
          required
          {...register("phoneNumber")}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput id="email1" type="email" required {...register("email")} />
      </div>
      <Button type="submit" color="yellow">
        Confirm
      </Button>
    </form>
  );
};

export default Form;
