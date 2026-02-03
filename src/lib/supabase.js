import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tsruhxmuainirrchrzde.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcnVoeG11YWluaXJyY2hyemRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjAwNTEsImV4cCI6MjA4NTA5NjA1MX0.3b59Llbh2ABZOpqMHAs_i1eBhB5fRdAPAgKkOgLCIIc'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
function addBookmarkToSupabase(title, url) {
    return supabase
.from('bookmarks')
.insert([
  {
    title: title,
    url: url
  } 
])
.select()
}

export default supabase