import ListItem from "./ListItem";
import { Contact } from "./domain";

type Props = {
  contacts: Contact[];
};

const List = ({ contacts }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {contacts.map((item: any, index: any) => (
        <ListItem
          key={index}
          id={item.id}
          name={item.name}
          email={item.email}
          phoneNumber={item.phoneNumber}
        />
      ))}
    </div>
  );
};

export default List;
