
-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    school TEXT NOT NULL,
    school_city TEXT NOT NULL,
    grade TEXT NOT NULL,
    team_name TEXT NOT NULL,
    team_size TEXT NOT NULL,
    project_idea TEXT NOT NULL,
    how_heard TEXT NOT NULL,
    program TEXT NOT NULL,
    status TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users
CREATE POLICY "Enable insert for anonymous users" ON registrations
    FOR INSERT WITH CHECK (true);
