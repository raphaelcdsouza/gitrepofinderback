import express from 'express';
import cors from 'cors';

import api from './services/api';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/github-authenticate', async (req, res) => {
  const { code } = req.body;

  try {
    const authResponse = await api.post('login/oauth/access_token', {
      code,
      client_id: '84ddb13f8f7f968b202c',
      client_secret: 'ef4ee16c1ac248f97b0ab0a4b64e1a2658b77ccf',
    }, {
      headers: {
        accept: 'application/json'
      }
    });

    const { access_token } = authResponse.data;

    const profileResponse = await api.get('https://api.github.com/user', {
      headers: {
        authorization: `Bearer ${access_token}`,
      }
    });

    const { avatar_url, login } = profileResponse.data;

    return res.json({ access_token, user: { avatar_url, login } });
  } catch(err) {
    if (err.isAxiosError) {
      return res.status(err.response.status).json({ error: err.response.data.message });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});
