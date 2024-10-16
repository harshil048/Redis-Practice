const client = require('./client');

async function init() {
  let res = await client.get('cnt');
  console.log(res);
  await client.expire('cnt', 10);
  // await client.incrby('cnt', '500');
  // res = await client.get('cnt');
  // console.log(res);
}

init();