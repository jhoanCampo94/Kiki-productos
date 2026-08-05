import { createClient } from "@supabase/supabase-js";

console.log(
  "Service Role cargada:",
  !!process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const adminClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);