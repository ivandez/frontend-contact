"use client";

import { Contact } from "@/components/list/domain";
import NavigationBar from "@/components/navbar/NavigationBar";
import axios from "axios";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const deleteContact = async (id: any) => {
    try {
      axios.delete(`http://localhost:3000/v1/agenda/${id}`);
      alert("deleted");
    } catch (error) {
      alert("Can not delete this contact");
    }
  };

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

  console.log(contact);

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
        <div className="flex gap-6 flex-col mb-4 items-center">
          <h1>{contact?.name}</h1>
          <h2>{contact?.phoneNumber}</h2>
          <h2>{contact?.email}</h2>
        </div>
        <div className="flex gap-2">
          <Button color="blue">
            <Link href={`/dashboard/`}>back</Link>
          </Button>
          <Button color="yellow">
            <Link href={`/dashboard/${params.id}/edit`}>edit</Link>
          </Button>
          <Button color="red" onClick={() => deleteContact(params.id)}>
            delete
          </Button>
        </div>
      </div>
    </>
  );
}
