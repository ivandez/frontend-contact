import { Button } from "flowbite-react";
import { Contact } from "./domain";
import Link from "next/link";

const ListItem = ({ name, id }: Contact) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <span>{name}</span>
      <div className="flex gap-2">
        <Button color="blue">
          <Link href={`/dashboard/${id}`}>view</Link>
        </Button>
        <Button color="yellow">edit</Button>
        <Button color="red">delete</Button>
      </div>
    </div>
  );
};

export default ListItem;
