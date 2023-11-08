import ListItem from "./ListItem";
import { Contact } from "./domain";

const contacts: Contact[] = [
  { id: 1, name: "John Doe", email: "jonh@test.com", phoneNumber: "123" },
  { id: 2, name: "Alberto test", email: "jonh@test.com", phoneNumber: "123" },
  { id: 3, name: "Karla", email: "jonh@test.com", phoneNumber: "123" },
];

const List = () => {
  return (
    <div className="flex flex-col gap-2">
      {contacts.map((item, index) => (
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
