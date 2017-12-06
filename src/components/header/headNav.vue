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
					<a href="#">APP功能介绍</a>
					<ul class="sub-ul">
						<li>
							<a href="#">外汇券商开户</a>
						</li>
						<li>
							<a href="#">充值提现</a>
						</li>
						<li>
							<a href="#">交易行情</a>
						</li>
						<li>
							<a href="#">新增交易品种</a>
						</li>
						<li style="border:none;">
							<a href="#">开仓平仓</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">半小时学外汇</a>
					<ul class="sub-ul">
						<li>
							<a href="#">交易优势</a>
						</li>
						<li>
							<a href="#">基础知识</a>
						</li>
						<li>
							<a href="#">如何阅读图表</a>
						</li>
						<li>
							<a href="#">交易示例</a>
						</li>
						<li>
							<a href="#">最佳时间</a>
						</li>
						<li style="border:none;">
							<a href="#">半小时学会</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">交易品种</a>
					<ul class="sub-ul">
						<li>
							<a href="#">贵金属</a>
						</li>
						<li>
							<a href="#">外汇</a>
						</li>
						<li>
							<a href="#">原油</a>
						</li>
						<li style="border:none;">
							<a href="#">指数CFD</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">关于我们</a>
					<ul class="sub-ul">
						<li>
							<a href="#">公司简介</a>
						</li>
						<li style="border:none;">
							<a href="#">蚂蚁外汇简介</a>
						</li>
					</ul>
				</li>
			</ul>
			<div class="login">登陆</div>
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