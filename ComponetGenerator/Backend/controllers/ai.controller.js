const axios = require('axios');

exports.generateComponent = async (req, res) => {
  const { prompt } = req.body;

  const NODE_ENV = process.env.NODE_ENV;
  const OPENROUTER_API_KEY = process.env[`${NODE_ENV}_OPENROUTER_API_KEY`];

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4o',
        messages: [
          { role: 'system', content: 'You are a helpful UI component generator.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1000 
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const code = response.data.choices?.[0]?.message?.content || '';
    return res.status(200).json({ data: code });
  } catch (err) {
    console.error('OpenRouter error:', err.response?.data || err.message);

    
    return res.status(500).json({
      message: 'AI generation failed',
      details: err.response?.data || err.message
    });
  }
};
