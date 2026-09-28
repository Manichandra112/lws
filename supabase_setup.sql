-- ==============================================================================
-- LWS Honey - Supabase Database Schema
-- Table Name: enquiries
--
-- Instructions:
-- 1. Go to Supabase Dashboard (https://supabase.com/dashboard)
-- 2. Select your project -> SQL Editor -> New Query
-- 3. Paste this entire script and click "Run"
-- ==============================================================================

CREATE TABLE IF NOT EXISTS enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Customer / Lead Details
  category TEXT NOT NULL,                              -- 'Individual / Personal', 'Restaurant / Hospitality', 'Company Hampers & Gifting'
  name TEXT NOT NULL,                                  -- Full Name
  company TEXT,                                        -- Restaurant / Company Name (or 'Individual' / NULL)
  email TEXT NOT NULL,                                 -- Contact Email
  phone TEXT NOT NULL,                                 -- Phone / WhatsApp Number
  
  -- Enquiry Specifics
  format TEXT NOT NULL DEFAULT 'Honey Spoon (8g)',     -- Product Format
  sector TEXT,                                         -- Use case / Establishment type / Occasion
  volume TEXT,                                         -- Pack size / Monthly volume / Gifting units
  notes TEXT,                                          -- Delivery shipping address & specific requirements
  
  -- Lead Management
  status TEXT DEFAULT 'new'                            -- 'new', 'contacted', 'dispatched', 'closed'
);

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- ==============================================================================

-- 1. Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 2. Allow any visitor (public/anon) to submit their enquiry from the website
DROP POLICY IF EXISTS "Allow public insert" ON enquiries;
CREATE POLICY "Allow public insert" 
ON enquiries 
FOR INSERT 
TO public 
WITH CHECK (true);

-- 3. Allow only authenticated users (logged-in Supabase admins) to view submissions
DROP POLICY IF EXISTS "Allow authenticated read" ON enquiries;
CREATE POLICY "Allow authenticated read" 
ON enquiries 
FOR SELECT 
TO authenticated 
USING (true);
