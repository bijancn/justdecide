import { supabase } from "./initSupabase";

export interface Topic {
  title: string
  id: number
  created_at: string
  author: string
  started_at: string
  end_at: string
}

export async function fetchTopic(id: number): Promise<Topic> {
  let { data: result, error } = await supabase
    .from("topics")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else
    return result;
}

export async function addTopic(userId: string, topicTitle: string): Promise<Topic> {
  let topicTextTrimmed = topicTitle.trim();
  let { data: result, error } = await supabase
    .from("topics")
    .insert({ title: topicTextTrimmed, author: userId })
    .single();
  if (error) {
    console.log("error", error);
    // TODO: Error handling? "Oops Page"
  } else {
    return result;
  }
}
