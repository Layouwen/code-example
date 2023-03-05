import httpsProxyAgent from 'https-proxy-agent';
import axios from 'axios';

// your api key
// https://platform.openai.com/account/api-keys
const API_KEY = '';

const msg = process.argv[2];
if (!msg) {
  console.log('请输入你要问的问题');
  process.exit(0);
}

// @ts-ignore
const httpsAgent = new httpsProxyAgent('http://127.0.0.1:10086');

function customFetch (url: string) {
  return axios.post(url, {
    // prompt: '使用两段代码示例，快速比较react和vue的区别以及优缺点',
    max_tokens: 1000,
    temperature: 0.8,
    stream: false,
    presence_penalty: 1,
    top_p: 1,
    model: 'gpt-3.5-turbo',
    messages: [
      // {
      //   content: 'You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: 2021-09-01 Current date: 2023-03-04',
      //   role: 'system',
      // },
      {
        content: msg,
        role: 'user',
      },
    ],
  }, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    httpsAgent,
  });
}

async function main () {
  const res = await customFetch('https://api.openai.com/v1/chat/completions');
  console.log(res.data.choices[0].message.content);
}

void main();
