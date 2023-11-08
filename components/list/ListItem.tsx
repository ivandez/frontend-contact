import { Button } from "flowbite-react";
import { Contact } from "./domain";
import Link from "next/link";
import axios from "axios";

const ListItem = ({ name, id }: Contact) => {
  const deleteContact = async (id: any) => {
    try {
      axios.delete(`http://localhost:3000/v1/agenda/${id}`);
      alert("deleted");
    } catch (error) {
      alert("Can not delete this contact");
    }
  };
  return (
    <div className="grid grid-cols-2 items-center">
      <span>{name}</span>
      <div className="flex gap-2">
        <Button color="blue">
          <Link href={`/dashboard/${id}`}>view</Link>
        </Button>
        <Button color="yellow">
          <Link href={`/dashboard/${id}/edit`}>edit</Link>
        </Button>
        <Button color="red" onClick={() => deleteContact(id)}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default ListItem;
