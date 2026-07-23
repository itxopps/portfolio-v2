// api/counter.js
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Enable CORS for local development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const count = await kv.get('visitor_count') || 0;
      return res.status(200).json({ count });
    } 
    else if (req.method === 'POST') {
      const count = await kv.incr('visitor_count');
      return res.status(200).json({ count });
    } 
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Counter error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}