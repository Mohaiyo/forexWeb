<template>
	<div class="nav">
		<div class="nav-inner">
			<div class="logo">
				<a href="/"><img src="/src/assets/images/nav-logo.png" alt=""></a>
			</div>
			<ul class="nav-list">
				<li :class="{ cur : menuIndex == index }" v-for="(menuitem,index) of menuList" @click="menuHandler(index)" :key="index">
					<router-link :to="menuitem.link">{{ menuitem.name }}</router-link>
					<ul class="sub-ul" v-if="menuitem.subMenuList != 0">
						<li v-for="subItem of  menuitem.subMenuList" :key="subItem.id">
							<router-link  to="#">{{ subItem.name }}</router-link>
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
      menuIndex: 0,
      menuList: [{name: '首页', id: '100000', link: 'index'}, {name: 'APP功能介绍', id: '100010', link: 'intro', subMenuList: [{name: '外汇券商开户', id: '100011'}, {name: '充值提现', id: '100012'}, {name: '交易行情', id: '100013'}, {name: '新增交易品种', id: '100014'}, {name: '开仓平仓', id: '100015'}]}, {name: '半小时学外汇', id: '100020', link: 'halfAnhour', subMenuList: [{name: '交易优势', id: '100021'}, {name: '基础知识', id: '100022'}, {name: '如何阅读图表', id: '100023'}, {name: '交易示例', id: '100024'}, {name: '最佳时间', id: '100025'}, {name: '半小时学会', id: '100026'}]}, {name: '交易品种', id: '100030', link: 'tradeType', subMenuList: [{name: '贵金属', id: '100031'}, {name: '外汇', id: '100032'}, {name: '原油', id: '100033'}, {name: '指数CFD', id: '100034'}]}, {name: '关于我们', id: '100040', link: 'aboutUs', subMenuList: [{name: '公司简介', id: '100041'}, {name: '蚂蚁外汇简介', id: '100042'}]}
      ]
    }
  },
  methods: {
    menuHandler (index) {
      this.menuIndex = index
    }
  }
}
</script>