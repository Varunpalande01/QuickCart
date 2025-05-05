import { serve } from "inngest/next";
import { createUserorder, inngest, syncUserCreation, syncUserDeletion, syncUserupdation } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncUserCreation,
   syncUserupdation,
   syncUserDeletion,
   createUserorder,
  ],
});
