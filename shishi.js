
let obj = JSON.parse($response.body);

let obj = {
  "msg": "success",
  "result": {
    "id": 93954,
    "token": "ofmJVszulgaByuFsNubk_K-9xoPk",
    "name": "红烧鲫鱼",
    "headImg": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epdfeznhVrWG0rz4k5HI47MiavWaOu1EbzxIfAFStMyYQgnAAdDjiapL4aIgzRgcWrUxdichicf1iawqlg/132",
    "vipType": 1,
    "vipTime": 4070903609000,
    "registerTime": 1626330795287,
    "wechatToken": "ofmJVszulgaByuFsNubk_K-9xoPk",
    "qqToken": null,
    "weiboToken": null,
    "appleToken": null,
    "wechatName": "红烧鲫鱼",
    "qqName": null,
    "weiboName": null,
    "appleName": null,
    "email": null,
    "phone": null,
    "password": "",
    "eduStatus": 0,
    "channel": null
  },
  "code": 0,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk1NCJ9.Q6KM3XD6I2ntV4SQblmAi-LWNN_-jO8NPTX58KtNqe4"
};

$done({body: JSON.stringify(obj)});
