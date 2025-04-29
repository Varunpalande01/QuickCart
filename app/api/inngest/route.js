import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserupdation } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncUserCreation,
   syncUserupdation,
   syncUserDeletion,
  ],
});
