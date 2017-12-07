<template>
	<div class="nav">
		<div class="nav-inner">
			<div class="logo">
				<a href="#"><img src="/src/assets/images/nav-logo.png" alt=""></a>
			</div>
			<ul class="nav-list">
				<li class="cur">
					<a href="/">首页</a>
				</li>
				<li>
					<router-link to="intro">APP功能介绍</router-link>
					<ul class="sub-ul">
						<li>
							<router-link to="#">外汇券商开户</router-link>
						</li>
						<li>
							<router-link to="#">充值提现</router-link>
						</li>
						<li>
							<router-link to="#">交易行情</router-link>
						</li>
						<li>
							<router-link to="#">新增交易品种</router-link>
						</li>
						<li style="border:none;">
							<router-link to="#">开仓平仓</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="halfAnhour">半小时学外汇</router-link>
					<ul class="sub-ul">
						<li>
							<router-link to="#">交易优势</router-link>
						</li>
						<li>
							<router-link to="#">基础知识</router-link>
						</li>
						<li>
							<router-link to="#">如何阅读图表</router-link>
						</li>
						<li>
							<router-link to="#">交易示例</router-link>
						</li>
						<li>
							<router-link to="#">最佳时间</router-link>
						</li>
						<li style="border:none;">
							<router-link to="#">半小时学会</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="tradeType">交易品种</router-link>
					<ul class="sub-ul">
						<li>
							<router-link to="#">贵金属</router-link>
						</li>
						<li>
							<router-link to="#">外汇</router-link>
						</li>
						<li>
							<router-link to="#">原油</router-link>
						</li>
						<li style="border:none;">
							<router-link to="#">指数CFD</router-link>
						</li>
					</ul>
				</li>
				<li>
					<router-link to="aboutUs">关于我们</router-link>
					<ul class="sub-ul">
						<li>
							<router-link to="#">公司简介</router-link>
						</li>
						<li style="border:none;">
							<router-link to="#">蚂蚁外汇简介</router-link>
						</li>
					</ul>
				</li>
			</ul>
			<div class="login">市场数据</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'headNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>