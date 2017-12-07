<template>
	<div>
		<div class="banners">
		    <img src="/src/assets/images/list-banner2.jpg" alt="">
		</div>
		<div class="content-list">
		    <div class="aside">
		        <ul class="list1">
		            <li class="title"><a>功能介绍</a></li>
		            <li class="cur"><router-link to="intro1.html">外汇券商开户</router-link></li>
		            <li><router-link to="#">新增交易品种</router-link></li>
		            <li><router-link to="#">交易行情</router-link></li>
		            <li><router-link to="#">充值提现（出入金）</router-link></li>
		            <li style="border:0;"><router-link to="#">如何进行平仓</router-link></li>
		        </ul>
		        <ul class="list2">
		            <li class="title"><a >商务合作</a></li>
		            <li class="tel">
		                <p>真诚期待您的来电</p>
		                <h1>0571-58239809</h1>
		            </li>
		        </ul>
		    </div>
		    <div class="main">
		        <div class="part1">
		            <h1>外汇券商开户</h1>
		            <p>您的位置：首页>功能介绍><span>外汇券商开户</span></p>
		        </div>
		        <div class="part2">

		            <p>您可以通过蚂蚁外汇直接在外汇交易券商30秒快速开户，目前支持券商"老虎外汇"，更多券商也在对接中敬请期待；</p>
		            <p>如何开户：打开蚂蚁外汇APP，点击底部菜单"<span>账户</span>"，进入个人中心页面，点击"<span>立即开户</span>"按钮。</p>
		            <img src="/src/assets/images/intro1.jpg" alt="">
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