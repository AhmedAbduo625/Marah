import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nsgbglznrammojahsbxq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zZ2JnbHpucmFtbW9qYWhzYnhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwODMxMTEsImV4cCI6MjAyNzY1OTExMX0.qLTUOn5hMIv558rUrIS-P50LT1ta5nlDrjHzKQj-ylY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
