import Form from "@/components/contact/Form";
import NavigationBar from "@/components/navbar/NavigationBar";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <NavigationBar />
      <div className="container mx-auto px-4 mt-2 flex flex-col items-center">
        <Form apiURL="apiv1/edit" />
      </div>
    </>
  );
}
