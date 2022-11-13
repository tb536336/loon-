let obj = JSON.parse($response.body);

obj= {
  "errno" : 0,
  "data" : [
    {
      "id" : 4097,
      "show_times" : [
        {
          "interval" : 0,
          "ad_id" : 9999,
          "start_time" : "00:00:00",
          "end_time" : "01:00:00"
        }
      ],
      "click_pct" : 100,
      "endtime" : 1668355199,
      "url" : "cailianshe://article_detail?article_id=1182003",
      "zip_url" : "",
      "type" : 203,
      "title" : "",
      "logo" : "https://img.cls.cn/images/20221112/iYg4kG7ttP.png",
      "adType" : 10,
      "vedio_path" : "",
      "strtime" : 1668268800,
      "monitorUrl" : "",
      "adTag" : "",
      "weight" : 10,
      "vedio_path2" : ""
    }
  ]
}

body = JSON.stringify(obj);
$done({body})
