/**
 * Created by gujun on 15/5/14.
 */
var wechat = require('wechat');
var config = require('./../appConfig/config');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.status(200).send('Welcome to Yzl');
});

router.post('/',wechat(config.token, function (req, res, next) {
        // 微信输入信息都在req.weixin上
        var message = req.weixin;

        console.log(req.weixin.ToUserName);
        console.log(req.weixin.FromUserName);
        console.log(req.weixin.CreateTime);
        console.log(req.weixin.Content);

        if (message.Content === '你好') {
            res.reply('呵呵！');
        } else if (message.FromUserName === 'text') {
            res.reply({
                content: 'text object',
                type: 'text'
            });
        } else if (message.Content === '音乐') {
            // 回复一段音乐
            res.reply({
                type: "music",
                content: {
                    title: "钟无艳",
                    description: "钟无艳",
                    musicUrl: "http://m1.music.126.net/Ny3Pk0-_aIuTKZBbTzoETg==/1006053139423817.mp3",
                    hqMusicUrl: "http://m1.music.126.net/Ny3Pk0-_aIuTKZBbTzoETg==/1006053139423817.mp3",
                    thumbMediaId: "thisThumbMediaId"
                }
            });
        } else {
            res.reply([
                {
                    title: '看看我们公司吧',
                    description: '云周率',
                    picurl: 'http://www.yzlpie.com/sites/all/themes/boson/logo.png',
                    url: 'http://www.yzlpie.com/'
                }
            ]);
        }
    }));

module.exports = router;