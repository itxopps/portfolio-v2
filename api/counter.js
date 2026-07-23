// api/counter.js - Minimal working version
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    if (req.method === 'GET') {
      // Return current count
      return res.status(200).json({ 
        count: global.visitorCounter || 0 
      });
    } 
    else if (req.method === 'POST') {
      // Increment count
      if (!global.visitorCounter) {
        global.visitorCounter = 0;
      }
      global.visitorCounter++;
      return res.status(200).json({ 
        count: global.visitorCounter 
      });
    }
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}
