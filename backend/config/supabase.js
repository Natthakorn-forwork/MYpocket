const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "https://owykdecuttybpgdnmeis.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93eWtkZWN1dHR5YnBnZG5tZWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDQ1MjMsImV4cCI6MjA4ODY4MDUyM30.fmg-g3MzhUAJOqu9J1cIj679NmDVNdC0zFC8vw4GOyk"

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase