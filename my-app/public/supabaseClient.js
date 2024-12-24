import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aws-0-us-west-1.pooler.supabase.com';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aHB0d3VkbHZwdGpxcWd3bm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMTg5ODQsImV4cCI6MjA1MDU5NDk4NH0.7FKFA-XOBD8yu0tYQul5OPISfORb75ZvP71FhIW2ZTg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



