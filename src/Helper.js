import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(
  "https://dareicwxvjvsssygchbl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhcmVpY3d4dmp2c3NzeWdjaGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTgxMjYsImV4cCI6MTk5NjU3NDEyNn0.AckClVxeuCXAaJCv2TSGgcikblZzxW9PZgSf3paWbcs", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});