import { supabase } from "./initSupabase";

export const addTopic = async (user, topicText) => {
  let task = topicText.trim();
  if (task.length) {
    let { data: result, error } = await supabase
      .from("topics")
      .insert({ description: task, author: user.id })
      .single();
    if (error) console.log("error", error);
    else console.log("Added!", result);
  } else {
    console.log("empty");
  }
};
