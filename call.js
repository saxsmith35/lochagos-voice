#!/usr/bin/env node
// Lochagos Outbound Call CLI
// Usage: node call.js <phone_number> [first_message]
require('dotenv').config({ path: '../.env' });
const axios = require('axios');

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const AGENT_ID = 'agent_8601kh74vhzxene9bk4dzm26xtp8';
const PHONE_NUMBER_ID = 'phnum_1901kh74whpqea69wxp6b0f0mk35';

async function makeCall(toNumber, firstMessage) {
  const payload = {
    agent_id: AGENT_ID,
    agent_phone_number_id: PHONE_NUMBER_ID,
    to_number: toNumber,
  };

  if (firstMessage) {
    payload.agent_overrides = {
      agent: { first_message: firstMessage },
    };
  }

  try {
    const res = await axios.post(
      'https://api.elevenlabs.io/v1/convai/twilio/outbound-call',
      payload,
      {
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('✅ Call initiated');
    console.log(`   Conversation ID: ${res.data.conversation_id}`);
    console.log(`   Call SID: ${res.data.callSid}`);
  } catch (err) {
    console.error('❌ Call failed:', err.response?.data || err.message);
  }
}

const [,, phone, ...msgParts] = process.argv;
if (!phone) {
  console.log('Usage: node call.js <+1XXXXXXXXXX> [optional first message]');
  process.exit(1);
}

const number = phone.startsWith('+') ? phone : `+1${phone}`;
const message = msgParts.length ? msgParts.join(' ') : null;
makeCall(number, message);
