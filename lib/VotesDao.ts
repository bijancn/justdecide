import { handleError } from "./errorHandler";
import { supabase } from "./initSupabase";
import { Vote } from "./Vote";

const TABLE = "votes";

export async function insertVote(
  author: string,
  topicId: number,
  optionId: number,
  likeValue: number,
  isVetoed: boolean
): Promise<Vote> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .insert({
      option_id: optionId,
      topic_id: topicId,
      like_value: likeValue,
      is_vetoed: isVetoed,
      author: author,
    })
    .single();
  return handleError(result, error);
}

export async function selectVotesOfTopic(id: number): Promise<Array<Vote>> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("topic_id", id);
  if (error) {
    console.log("error", error);
    return [];
  } else if (result) return result;
  else {
    console.log("this shouldnt happen", error);
    return [];
  }
}
