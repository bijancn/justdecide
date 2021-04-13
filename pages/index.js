import CreateTopic from "../components/CreateTopic";

export default function IndexPage({ user }) {
  return (
    <div>
      <CreateTopic userId={user.id} />
    </div>
  );
}
