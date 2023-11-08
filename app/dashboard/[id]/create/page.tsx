export default function Page({ params }: { params: { id: string } }) {
  return <div>CREATE My Post: {params.id}</div>;
}
