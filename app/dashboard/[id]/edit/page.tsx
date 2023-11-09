"use client";

import { Contact } from "@/components/list/domain";
import NavigationBar from "@/components/navbar/NavigationBar";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
};

export default function Page({ params }: { params: { id: string } }) {
  const [contact, setcontact] = useState<Contact>();

  useEffect(() => {
    async function getContact() {
      try {
        const response = await axios.get<Contact>(
          `http://localhost:3000/v1/agenda/${params.id}`
        );

        const contact = response.data;
        setcontact(contact);
      } catch (error) {
        console.error(error);
      }
    }
    getContact();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.put(`http://localhost:3000/v1/agenda/${params.id}`, data);
      alert("Contact updated!");
    } catch (error) {
      console.log(error);

      alert("error");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="nam1" value="Name" />
            </div>
            <TextInput
              id="nam1"
              type="nam1"
              required
              {...register("name")}
              defaultValue={contact?.name}
            />
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
              defaultValue={contact?.phoneNumber}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              required
              {...register("email")}
              defaultValue={contact?.email}
            />
          </div>
          <Button type="submit" color="yellow">
            Confirm
          </Button>
        </form>
      </div>
    </>
  );
}
