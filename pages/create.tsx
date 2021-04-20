import CreateTopic from "../components/CreateTopic";

export default function IndexPage({ user }) {
  return (
    <>
      <CreateTopic userId={user.id} />
    </>
  );
}
