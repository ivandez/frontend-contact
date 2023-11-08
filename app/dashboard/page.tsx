"use client";

import { Button, TextInput } from "flowbite-react";
import List from "@/components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Page() {
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await axios.get("http://localhost:3000/v1/agenda");

        const contacts = response.data;
        setcontacts(contacts);
      } catch (error) {
        console.error(error);
      }
    }
    getContacts();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
      <div className="flex max-w-md gap-4 ">
        <form>
          <div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Jhon D..."
              required
            />
          </div>
        </form>
        <Button color="success">
          <Link href={`/dashboard/create`}>new</Link>
        </Button>
      </div>
      <div className="mt-2">
        <List contacts={contacts} />
      </div>
    </div>
  );
}
