// api/counter.js
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
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
    console.error('KV Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}
