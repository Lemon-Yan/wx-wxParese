# wx-wxParese


示例效果图：

![image.png](https://upload-images.jianshu.io/upload_images/4041074-749c897ae21fa2bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 一、简介及说明
在小程序项目开发中，会遇到富文本编辑的内容，后台返回到小程序端无法解析，这时就需要一个插件来处理。
微信小程序没有提供webview等html解析，原展示类文本没有办法图文并茂的原生展示，wxParse主要目的就是弥补富文本解析空缺的组件。

 插件由联盟网站DEV开发，开发者：icindy，最新版本请查看github地址：[wxParse](https://github.com/icindy/wxParse)



## 二、 使用方法

1、下载wxParese文件，拷贝wxParse文件夹到自己的小程序项目中。

![image.png](https://upload-images.jianshu.io/upload_images/4041074-5d30303498a9d915.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2、在项目文件中使用

 （1）在需要使用的wxml文件中引入WxParse.wxml
 
示例：
```
<!--index.wxml-->
<import src="../../wxParse/wxParse.wxml" />
```
（2）在当前页对应的js中引入wxParse.js
示例：
```
//index.js 
const WxParse = require('../../wxParse/wxParse.js');
```
（3）使用template组件
在刚刚引入的wxml中插入组件，具体插入的位置是需要转换的地方。

示例:

```
<!--index.wxml-->
<import src="../../wxParse/wxParse.wxml" />
<view class="container">
  <view class='uinn'>
    <template is="wxParse" data="{{wxParseData:article.nodes}}" />
  </view>
</view>
```
（4）在当前页的js中使用WxParse中的方法

```
//index.js
const WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    
  }, 
  onLoad: function () {
    let that = this;
    let ceshi = 
    `<div>
			<span>请说出你喜欢的水果？</span>
			<ul>
				<li>苹果</li>
				<li>香蕉</li>
				<li>橙子</li>
			</ul>
		</div>`;
    WxParse.wxParse('article', 'html', ceshi, that, 5); 
  }, 
})
```

参数说明：

![image.png](https://upload-images.jianshu.io/upload_images/4041074-b0d55f77d07bcec9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


