<template>
    <div class="footer">
    	<div class="inner">
    		<div class="left">
    			<div class="l">
    				<div class="logo"><img src="/src/assets/images/logo4.png" alt=""></div>
    				<p>联系我们：<br><span>0571-5823 9809</span></p>
    				<p>会员QQ群：643152314</p>
    				<p>微信客服：forex</p>
    			</div>
    			<div class="c">
    				<p>外汇咖IOS下载</p>
    				<img src="/src/assets/images/QRcode-IOS.jpg" alt="">
    			</div>
    			<div class="s">
    				<p>外汇咖安卓下载</p>
    				<img src="/src/assets/images/QRcode-IOS.jpg" alt="">
    			</div>
    			<div class="b">Copyright © 2017 杭州顺意网络科技有限公司 版权所有 ｜ 浙ICP备17022232号</div>
    		</div>
    		<div class="right">
    			<div class="a"><h1>APP功能介绍</h1></div>
    			<div class="a" style="float: right;">
    				<h1>关于我们</h1>
    				<router-link to="/home/aboutUs/1">外汇咖介绍</router-link>
    				<a>STP交易模式</a>
    				<a>常见问题</a>
    			</div>
    			<div class="a" style="float: right;">
    				<h1>半小时学外汇</h1>
    				<router-link to="/home/halfAnhour/0">外汇交易的优势</router-link>
    				<router-link to="/home/halfAnhour/1">基础知识</router-link>
    				<router-link to="/home/halfAnhour/2">如何阅读图表</router-link>
    				<router-link to="/home/halfAnhour/4">交易示例</router-link>
    				<router-link to="/home/halfAnhour/5">交易外汇最佳时间</router-link>
    				<router-link to="#">从外汇咖开始交易</router-link>
    				<a >来自专业人事的十大建议</a>
    			</div>
    			<div class="a">
    				<h1>交易品种</h1>
    				<router-link to="/home/tradeType/1">外汇</router-link>
    				<router-link to="/home/tradeType/2">原油</router-link>
    				<router-link to="/home/tradeType/0">贵金属</router-link>
    				<router-link to="/home/tradeType/3">CFD</router-link>
    			</div>
    			<div class="a" style="float: right;    margin-top: -140px;">
    				<h1>风险提示</h1>
    				<a>外汇投资风险提示</a>
    				<a>投资者风险披露</a>
    			</div>
    			<p>分享到：<i class="wechat"></i><i class="QQ"></i><i class="sina"></i></p>
    		</div>
    	</div>
    </div>
</template>
<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
    .content {
        position: relative;
        width: 1050px;
        height: 400px;
        padding-top: 0px;
        margin: 0 auto;
    }
</style>