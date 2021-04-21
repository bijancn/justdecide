import { handleError } from "./errorHandler";
import { supabase } from "./initSupabase";

export interface Vote {
  // Meta
  id: number;
  created_at: string;
  author: string;

  // Input
  option_id: number;
  like_value: number;
  is_vetoed: boolean;
}

const TABLE = "votes";

export async function insertVote(
  author: string,
  optionId: number,
  likeValue: number,
  isVetoed: boolean
): Promise<Vote> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .insert({
      option_id: optionId,
      like_value: likeValue,
      is_vetoed: isVetoed,
      author: author,
    })
    .single();
  return handleError(result, error);
}

export async function selectVotesOfOption(
  optionId: number
): Promise<Array<Vote>> {
  let { data: result, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("option_id", optionId);
  if (error) console.log("error", error);
  else return result;
}