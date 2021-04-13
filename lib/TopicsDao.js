import { supabase } from "./initSupabase";

export const fetchTopic = async (setTopic, id) => {
  let { data: topics, error } = await supabase
    .from("topics")
    .select("*")
    .eq("id", id)
    .single();
  if (error) console.log("error", error);
  else setTopic(topics);
};

export const addTopic = async (userId, topicText) => {
  let topicTextTrimmed = topicText.trim();
  if (topicTextTrimmed.length) {
    let { data: result, error } = await supabase
      .from("topics")
      .insert({ description: topicTextTrimmed, author: userId })
      .single();
    if (error) {
      console.log("error", error);
      return 0;
    } else {
      return result.id;
    }
  } else {
    console.log("empty");
    return 0;
  }
};
