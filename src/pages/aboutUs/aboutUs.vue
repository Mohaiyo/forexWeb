<template>
	<div>
		<div class="banners" v-show="$route.params.id == 0">
		    <img src="../../assets/images/list-banner4.jpg" alt="">
		</div>
    <div class="banners" v-show="$route.params.id == 1">
        <img src="../../assets/images/index-banner1.jpeg" alt="">
    </div>
		<div class="content-list" >
		    <div class="aside">
		        <ul class="list1">
		            <li class="title"><a>关于我们</a></li>
		            <li :class="{cur : $route.params.id == 0 }"><router-link to="/home/aboutUs/0">公司简介</router-link></li>
		            <li style="border:0;" :class="{cur : $route.params.id == 1 }"><router-link to="/home/aboutUs/1">外汇咖平台介绍</router-link></li>
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
		            <h1>公司简介</h1>
		            <p>您的位置：首页>关于我们><span>公司简介</span></p>
		        </div>
		        <div class="part2">
		            <p>顺意网全称杭州顺意网络科技有限公司，2016年11月03日成立于杭州西子湖畔。具有专业的管理团队，成熟完善的风险控制管理体系，有两年多的互联网金融运营经验。</p>
		            <p>公司打造的平台顺应了全球金融未来发展的趋势。其充分挖掘了互联网市场的潜力，建立一个安全、高效、诚信、互惠互助的国内专业的全新外汇社交平台——forex外汇咖。不同于其他交易工具，forex更加注重其社交属性与交易工具结合，使专业的外汇投资者帮助初入外汇的新手投资者更快的融入外汇交易，提升投资者稳定、持续性盈利能力。</p>
		            <p>forex更像是一座外汇投资者的后花园，每一位投资者从入住开始便有了大批交易高手、普通投资者相伴成长。</p>
		            <img src="../../assets/images/about1.jpg" alt="">
		        </div>
		    </div>
		    <div class="main" v-show="$route.params.id == 1">
		        <div class="part1">
		            <h1>外汇咖平台介绍</h1>
		            <p>您的位置：首页>关于我们><span>外汇咖平台介绍</span></p>
		        </div>
		        <div class="part2">
		            <p>forex/外汇咖是国内专业的外汇社交平台，聚焦于投资者社交与易用的外汇交易功能，供近百种外汇、原油、贵金属和指数差价合约等品种的交易服务。不同于其他交易工具，forex更加注重其社交属性与交易工具结合，使专业的外汇投资者帮助初入外汇的新手投资者更快的融入外汇交易，提升投资者稳定、持续性盈利能力。</p>
		            <p>forex更像是一座外汇投资者的后花园，每一位投资者从入住开始便有了大批交易高手、普通投资者相伴成长。</p>
		            <p>（图1）</p>
		            <img src="../../assets/images/about2.jpg" alt="">
		            <p>我们至少从以下方面帮助到外汇投资者：</p>
		            <p>一、forex与全球顶级外汇交易所合作，投资者可以简单的一键开通全球性的投资账户，实现全球资产配置。forex合作开户商皆为全球顶级外汇交易所，具有海外金融监管牌照，平台严格审核三方认证，安全可靠。</p>
		            <p>二、极为强大的社交属性。不论是多年的专业外汇投资者亦或是初入汇市的新手，都能快速的在forex实现更多的盈利。专业投资者凭借真实、良好的交易记录引导新手交易，帮助新手获得盈利的同时获取丰厚的分成回报。新手投资者则可以快速的踏上外汇交易之路，避免因不熟悉市场而导致盲目的亏损。</p>
		            <p>三、全方位的账户动态提醒。作为一个移动互联网化的交易平台，投资者绑定在平台的账号可以获得全面的账户动态提醒，避免因保证金不足等因素导致的强制平仓。</p>
		            <p>四、快速上手的行情、交易界面。与针对专业投资者的交易工具所不同的是，forex从界面、功能、设计上都更加贴合中国市场人群习惯，解决了新手入门的知识障碍，不论是否有其他市场的投资经验还是新手用户，forex都是极佳的选择。</p>
		            <p>五、独创的antfocus体系使用专业投资者自我价值、普惠大众的同时获得回报；使普通投资者可以简单的通过订阅的高手动态即时自由跟随交易，更加能够获得非公开性的专业投资理念、市场分析资讯。</p>

		            <p>顺意科技是forex中国区技术维护及运营服务商</p>

		        </div>
		    </div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'aboutUs',
  data () {
    return {}
  }
}
</script>