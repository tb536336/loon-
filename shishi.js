
let obj = JSON.parse($response.body);

obj = {
  "vipType": 3,
    "vipTime": 99999,
 };

$done({body: JSON.stringify(obj)});
