import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ttefqzyjvwefwyrkkjcr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0ZWZxenlqdndlZnd5cmtramNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1NTg2NjMsImV4cCI6MjAwMzEzNDY2M30.IstbC9INwv5K2MYyy632yLGDD87GKj1Eez-Ws-Z1Fcs';

export const supabase = createClient(supabaseUrl, supabaseKey);


