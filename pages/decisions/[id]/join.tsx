import VetoOrSlide from "../../../components/VetoOrSlide";

export default function IndexPage({ user }) {
  return (
    <>
      <VetoOrSlide
        topicTitle="Where to go for Lunch?"
        options={["Andronaco", "Vincenzo", "Thai", "Luigi's", "Peter Pane"]}
      />
    </>
  );
}
