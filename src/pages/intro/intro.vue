<template>
	<div>
		<div class="banners" v-show="$route.params.id == 0">
		    <img src="../../assets/images/list-banner2.jpg" alt="">
		</div>
		<div class="banners" v-show="$route.params.id == 1 || $route.params.id == 2 ||　$route.params.id == 3 ||　$route.params.id == 4  ">
		    <img src="../../assets/images/list-banner1.jpg" alt="">
		</div>
		<div class="content-list">
		    <div class="aside">
		        <ul class="list1">
		            <li class="title"><a>功能介绍</a></li>
		            <li :class="{cur : $route.params.id == 0 }"><router-link to="/home/intro/0">外汇券商开户</router-link></li>
		            <li :class="{cur : $route.params.id == 1 }"><router-link to="/home/intro/1">新增交易品种</router-link></li>
		            <li :class="{cur : $route.params.id == 2 }"><router-link to="/home/intro/2">交易行情</router-link></li>
		            <li :class="{cur : $route.params.id == 3 }"><router-link to="/home/intro/3">充值提现（出入金）</router-link></li>
		            <li :class="{cur : $route.params.id == 4 }" style="border:0;"><router-link to="/home/intro/4">如何进行平仓</router-link></li>
		        </ul>
		        <ul class="list2">
		            <li class="title"><a >商务合作</a></li>
		            <li class="tel">
		                <p>真诚期待您的来电</p>
		                <h1>18578262007</h1>
		            </li>
		        </ul>
		    </div>
		    <div class="main" v-show="$route.params.id == 0">
		        <div class="part1">
		            <h1>外汇券商开户</h1>
		            <p>您的位置：首页>功能介绍><span>外汇券商开户</span></p>
		        </div>
		        <div class="part2">

		            <p>您可以通过外汇咖直接在外汇交易券商30秒快速开户，目前支持券商"老虎外汇"，更多券商也在对接中敬请期待；</p>
		            <p>如何开户：打开外汇咖APP，点击底部菜单"<span>账户</span>"，进入个人中心页面，点击"<span>立即开户</span>"按钮。</p>
		            <img src="../../assets/images/intro1.jpg" alt="">
		        </div>
		    </div>
		    <div class="main" v-show="$route.params.id == 1">
		        <div class="part1">
		            <h1>新增交易品种</h1>
		            <p>您的位置：首页>功能介绍><span>新增交易品种</span></p>
		        </div>
		        <div class="part2">
		            <p>外汇咖拥有N中外汇交易品种可供选择（欧元美元，澳元，澳元美元，美元日元等；还有白银，原油，恒指等能源，指数交易品种；</p>
		            <p>添加交易品种操作：进入“交易”；点击界面右上“+”可自行选择需要添加的交易商品品种；</p>

		            <p>图2</p>

		            <img src="../../assets/images/intro2.jpg" alt="">
		        </div>
		    </div>
		    <div class="main" v-show="$route.params.id == 2">
		        <div class="part1">
		            <h1>交易行情</h1>
		            <p>您的位置：首页>功能介绍><span>交易行情</span></p>
		        </div>
		        <div class="part2">
		            <p>点击交易品种就可以进入交易行情页面，支持分时图和K线图，行情走势一目了然；</p>
		            <p>查看交易行情操作：外汇咖APP首页；点击底部菜单“交易”；点击交易品种进入。</p>
		            <p>（图3）</p>

		            <img src="../../assets/images/intro3.jpg" alt="">
		        </div>
		    </div>
		    <div class="main" v-show="$route.params.id == 3">
		        <div class="part1">
		            <h1>充值提现（出入金）</h1>
		            <p>您的位置：首页>功能介绍><span>充值提现（出入金）</span></p>
		        </div>
		        <div class="part2">
		            <p>想要进行交易还必须在您开户的券商（老虎外汇）账户内充值，主流银行卡都支持；</p>
		            <p>充值操作：外汇咖APP首页，点击底部菜单“ 账户 ”，进入个人中心页面；-点击“充值”按钮。</p>
		            <p>（图4）</p>
		            <img src="../../assets/images/intro4.jpg" alt="">
		        </div>
		    </div>
		    <div class="main" v-show="$route.params.id == 4">
		        <div class="part1">
		            <h1>如何进行平仓</h1>
		            <p>您的位置：首页>功能介绍><span>如何进行平仓</span></p>
		        </div>
		        <div class="part2">
		            <p>平仓是指卖出您手上的持仓；</p>
		            <p>平仓操作：外汇咖APP首页；点击底部菜单“ 持仓 ”；进入持仓详情页面；点击“卖出”按钮。</p>
		            <p>（图5）</p>
		            <img src="../../assets/images/intro5.jpg" alt="">
		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'intro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>