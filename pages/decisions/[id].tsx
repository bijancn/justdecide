import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopicOptions from "../../components/TopicOptions";
import { fetchTopic } from "../../lib/TopicsDao";

const TopicDetailPage = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState({
    id: -1,
    title: "",
    created_at: "",
    author: "",
    started_at: "",
    end_at: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const topic = await fetchTopic(parseInt(id as string));
      setTopic(topic);
    };

    fetchData();
  }, [router.isReady]);
  return (
    <>
      <TopicOptions topic={topic} userId={props.user.id} />
    </>
  );
};

export default TopicDetailPage;
