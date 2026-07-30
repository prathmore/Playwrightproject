/*

1) No Auth (Public API)
2) Basic Auth
3) Bearer Token
4) API Key (in header or query)

*/


import { test, expect } from '@playwright/test';
import http from 'http';

const githubToken = process.env.GITHUB_TOKEN;
const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;
const weatherApiKey = process.env.WEATHERAPI_KEY;

//1) No Auth (Public API)

test('Public API - No Auth', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log(data);
});


// 2. Basic Auth
 test('Basic Auth - Local server', async ({ request }) => {
  const server = http.createServer((req, res) => {
    const auth = req.headers.authorization || '';
    const expected = 'Basic ' + Buffer.from('user:pass').toString('base64');
    if (req.url === '/basic-auth/user/pass' && auth === expected) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ authenticated: true, user: 'user' }));
    } else {
      res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="User Visible Realm"' });
      res.end(JSON.stringify({ authenticated: false }));
    }
  });

  await new Promise<void>((resolve, reject) => server.listen(0, '127.0.0.1', err => (err ? reject(err) : resolve())));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('Invalid server address');
  const port = address.port;

  try {
    const response = await request.get(`http://127.0.0.1:${port}/basic-auth/user/pass`, {
      headers: {
        Authorization: 'Basic ' + Buffer.from('user:pass').toString('base64'),
      },
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toEqual({ authenticated: true, user: 'user' });
    console.log(data);
  } finally {
    await new Promise<void>(resolve => server.close(() => resolve()));
  }
});


// 3. Bearer Token Auth (Get github user repositories)

test.skip(!githubToken, 'GITHUB_TOKEN is not set', async ({ request }) => {
  const response = await request.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      'User-Agent': 'playwright',
    },
  });

  expect(response.status()).toBe(200);
  const repos = await response.json();
  console.log(repos);
});

// 3.1. Bearer Token Auth (Get github user info)

test.skip(!githubToken, 'GITHUB_TOKEN is not set', async ({ request }) => {
  const response = await request.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      'User-Agent': 'playwright',
    },
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});

// 4. API Key Authentication
// https://openweathermap.org/current
 test.skip(!openWeatherApiKey, 'OPENWEATHER_API_KEY is not set', async ({ request }) => {
  const response = await request.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: 'Delhi',
      appid: openWeatherApiKey,
    },
  });

  expect(response.status()).toBe(200);
  const weather = await response.json();
  console.log(weather);
});

// 4.1 API Key Auth
// Ref Link: https://www.weatherapi.com/docs/
// Returns current weather of city
//You need to signup and then you can find your API key under your account.
 //https://www.weatherapi.com/signup.aspx

test.skip(!weatherApiKey, 'WEATHERAPI_KEY is not set', async ({ request }) => {
  const response = await request.get('https://api.weatherapi.com/v1/current.json', {
    params: { q: 'India', key: weatherApiKey },
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
});

