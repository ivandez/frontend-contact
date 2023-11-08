"use client";

import { Button, TextInput } from "flowbite-react";
import List from "@/components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <List contacts={contacts} />
      </div>
    </div>
  );
}
