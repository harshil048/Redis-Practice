const client = require('./client');

async function init() {
  await client.lpush('list', 1);
  await client.lpush('list', 2);
  await client.lpush('list', 3);
  await client.lpush('list', 4);
  const res = await client.rpop('list');
  console.log(res);

}

init();

//lpush - add an element to the beginning of a list -> lpush('list', 1)
//rpush - add an element to the end of a list -> rpush('list', 1)
//lpop - remove and get the first element in a list -> lpop('list')
//rpop - remove and get the last element in a list -> rpop('list')
//lrange - get all elements in a list -> lrange('list', 0, -1)
//llen - get the length of a list -> llen('list')
//ltrim - trim a list -> ltrim('list', 0, 2)
//lset - set the value of an element in a list -> lset('list', 0, 5)
//lindex - get an element by index in a list -> lindex('list', 0)
//lrem - remove elements from a list -> lrem('list', 0, 5)
//linsert - insert an element before or after another element in a list -> linsert('list', 'BEFORE', 2, 1)
//rpoplpush - remove the last element in a list, append it to another list and return it -> rpoplpush('list', 'list2')
//brpop - remove and get the last element in a list, or block until one is available -> brpop('list', 0)
//brpoplpush - remove the last element in a list, append it to another list and return it, or block until one is available -> brpoplpush('list', 'list2', 0)
//blpop - remove and get the first element in a list, or block until one is available -> blpop('list', 0)
//blpoplpush - remove the first element in a list, append it to another list and return it, or block until one is available -> blpoplpush('list', 'list2', 0)
