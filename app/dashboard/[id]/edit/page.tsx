export default function Page({ params }: { params: { id: string } }) {
  return <div>EDIT My Post: {params.id}</div>;
}
