const vip = "/user/getUser/";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(vip) != -1){
obj.data.uinfo["vipType:"] = "2";
obj.data.uinfo["vipTime:"] = "1111";

$done({body: JSON.stringify(obj)});