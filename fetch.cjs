const https = require('https');
https.get('https://www.danilocybersec.com.br/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
