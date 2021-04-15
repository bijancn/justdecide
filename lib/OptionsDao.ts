import { supabase } from "./initSupabase";

interface UserOption {
  title: string;
}

interface Option {
  title: string;
  id: number;
  topic_id: number;
  created_at: string;
}

export async function addOptions(
  userId: string,
  topicId: number,
  optionsText: Array<UserOption>
): Promise<Array<Option>> {
  let optionsTrimmed = optionsText
    .map((option) => {
      let trimmed = option.title.trim();
      return { title: trimmed, author: userId, topic_id: topicId };
    })
    .filter((option) => option.title);
  let { data: result, error } = await supabase
    .from("options")
    .insert(optionsTrimmed);
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else {
    return result;
  }
}

export async function fetchOptionsOfTopic(
  topicId: number
): Promise<Array<Option>> {
  let { data: result, error } = await supabase
    .from("options")
    .select("*")
    .eq("topic_id", topicId)
    .single();
  if (error) console.log("error", error);
  else return result;
}
