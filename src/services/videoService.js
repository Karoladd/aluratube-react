import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://kilxakncvorhxnqpetxk.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpbHhha25jdm9yaHhucXBldHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTE2ODMsImV4cCI6MTk4Mzc2NzY4M30.gToUMLmtFejimhRwJxzmBk7oReZT4QTlf-jHW6TCS3s";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}