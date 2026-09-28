import { createClient } from '@supabase/supabase-js';

const url = 'https://dhlzxxduzcgjjitorafs.supabase.co';
const key = 'sb_publishable_nd_2Gc8bDHbnGuyqpgPwVg_XEUw3YyH';

const supabase = createClient(url, key);

async function testFullInsert() {
  const payload = {
    category: 'Individual / Personal',
    name: 'Test Name',
    company: 'Individual',
    email: 'test@example.com',
    phone: '+919876543210',
    format: 'Honey Spoon (8g)',
    sector: 'Daily Wellness',
    volume: '30 Spoons',
    notes: 'Sample Address, Hyderabad'
  };

  const { data, error } = await supabase.from('enquiries').insert([payload]);
  console.log('Result of submitting full enquiry form:');
  console.log('Error:', error);
}

testFullInsert();
