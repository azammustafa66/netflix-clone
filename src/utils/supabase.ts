import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hnqsqmxrvfsvfhnugjku.supabase.co';
const supabaseAnonKey = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
