var request = require('request');
var requestify = require('requestify');

request.post(
    'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=hUVanxIfpqdo38tbMHXaJBM9PaJZ4b_t52SvXPzzjVj4jfv4kDm-b72DkIRgxqopZSyqJNnRnLhcQgdca3TSQL2yh71YOJ_DQrp43tJCy64',
    {
        "button": [
            {
                "type": "click",
                "name": "今日信息",
                "key": "today_news"
            },
            {
                "name": "菜单",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "办公自动化",
                        "url": "http://oatest.yzlpie.com/"
                    },
                    {
                        "type": "view",
                        "name": "云相邻",
                        "url": "https://shop.yzlpie.com/yzlshop/admin"
                    }
                ]
            },
            {
                "type": "view",
                "name": "今日信息",
                "url": "http://www.yzlpie.com"
            }
        ]
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);