import { supabase } from "./initSupabase";

export const fetchTopic = async (id) => {
  let { data: result, error } = await supabase
    .from("topics")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else return result;
};

export const addTopic = async (userId, topicText) => {
  let topicTextTrimmed = topicText.trim();
  let { data: result, error } = await supabase
    .from("topics")
    .insert({ title: topicTextTrimmed, author: userId })
    .single();
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else {
    return result.id;
  }
};

export const addOptions = async (userId, topicId, optionsText) => {
  let optionsTrimmed = optionsText
    .map((option) => {
      let trimmed = option.title.trim();
      return { title: trimmed, author: userId, topic_id: topicId };
    })
    .filter((option) => option.title);
  console.log("trimmed", optionsTrimmed);
  let { data: result, error } = await supabase
    .from("options")
    .insert(optionsTrimmed);
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else {
    console.log("result", result);
    return result;
  }
};

export const fetchOptionsOfTopic = async (topicId) => {
  let { data: result, error } = await supabase
    .from("options")
    .select("*")
    .eq("topic_id", topicId)
    .single();
  if (error) console.log("error", error);
  else return result;
};
