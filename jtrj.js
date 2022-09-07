let obj = JSON.parse($response.body);

obj={
  "code": 200,
  "data": {
    "_id": "6318097f541594085d3c3282",
    "auth": "o2IaOxPZ97hE6ihaqB9eIl1zhld4",
    "name": "红烧鲫鱼",
    "phone": "o2IaOxPZ97hE6ihaqB9eIl1zhld4",
    "qAuth": "o2IaOxPZ97hE6ihaqB9eIl1zhld4",
    "__v": 0,
    "status": 4,
    "updateTime": "2022-09-07T03:01:19.482Z",
    "createTime": "2022-09-07T03:01:19.482Z",
    "online": "2022-09-07T05:01:10.013Z",
    "level": 4,
    "followed": 0,
    "follow": 0,
    "isOldUserConverted": true,
    "isBox": true,
    "coin": 4000,
    "purchase": [],
    "exchange": [],
    "vip": {
      "history": []
    },
    "isVip": true,
    "isAdmin": true,
    "version": "2.0.5",
    "channel": "AppStore",
    "platform": "iOS",
    "app": "tailor",
    "isAppleAuth": false,
    "authorizationCode": "",
    "isQAuth": false,
    "isAuth": true,
    "gender": 1,
    "moto": "她/他说无话可说～",
    "profile": "default/profile_default.png",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoOiaSAZjqZicoCCoUCf4DzOA1nhY4uCNphia7k42SBu1stOwPNkjCJTGV4Ks7G2u0uV8xLnl6mT4KrQ/132",
    "id": "6318097f541594085d3c3282",
    "genderV": "女",
    "statusV": "正常"
  }
}
body = JSON.stringify(obj);
$done({body})
