import { handleError } from "./errorHandler";
import { supabase } from "./initSupabase";

export interface Topic {
  title: string;
  id: number;
  created_at: string;
  author: string;
  start_at: string;
  end_at: string;
}

const TABLE = "topics";

export async function fetchTopic(id: number): Promise<Topic> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();
  return handleError(result, error);
}

export async function addTopic(
  author: string,
  topicTitle: string
): Promise<Topic> {
  let topicTextTrimmed = topicTitle.trim();
  let { data: result, error } = await supabase
    .from(TABLE)
    .insert({ title: topicTextTrimmed, author: author })
    .single();
  return handleError(result, error);
}

export async function updateTopic(
  id: number,
  start: string,
  end: string
): Promise<Topic> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .update({ start_at: start, end_at: end })
    .eq("id", id)
    .single();
  return handleError(result, error);
}
