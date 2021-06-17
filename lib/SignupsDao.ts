import { supabase } from "./initSupabase";

const TABLE = "signups";

export async function insertSignup(email: String) {
  let { data: result, error } = await supabase
    .from(TABLE)
    .insert({ email: email })
    .single();
  if (error) {
    console.log("error", error);
    return [];
  } else if (result) return result;
  else {
    console.log("this shouldnt happen", error);
    return [];
  }
}
