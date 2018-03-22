//index.js
const app = getApp();
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
