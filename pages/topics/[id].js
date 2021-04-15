import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopicOptions from "../../components/TopicOptions";
import { fetchTopic } from "../../lib/TopicsDao";

const TopicDetailPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState({ title: "" });
  useEffect(async () => {
    if (!router.isReady) return;
    const topic = await fetchTopic(id);
    setTopic(topic);
  }, [router.isReady]);
  return (
    <>
      <TopicOptions topic={topic} userId={props.user.id} />
    </>
  );
};

export default TopicDetailPage;
