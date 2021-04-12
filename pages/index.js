import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import CreateVote from "../components/CreateTopic";
import { Button } from "@chakra-ui/react";
import { addTopic } from "../lib/TopicsDao";

export default function IndexPage() {
  const { user } = Auth.useUser();

  return (
    <div>
      <CreateVote user={supabase.auth.user()} addTopic={addTopic} />
    </div>
  );
}
