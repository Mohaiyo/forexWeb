<template>
	<div class="nav">
		<div class="nav-inner">
			<div class="logo">
				<a href="/"><img src="/src/assets/images/nav-logo.png" alt=""></a>
			</div>
			<ul class="nav-list">
				<li :class="{ cur : $route.path.indexOf(menuitem.link) !== -1 }" v-for="(menuitem,index) of menuList" @click.stop="menuHandler(menuitem.link)" :key="index">
					<a>{{ menuitem.name }}</a>
					<ul class="sub-ul" v-if="menuitem.subMenuList != 0">
						<li v-for="(subItem, i) of  menuitem.subMenuList" :key="subItem.id" @click.stop="subMenuHandler(subItem.link, i)">
							<a :class="{ cur : $route.params.id == i && $route.path.indexOf(subItem.link) !== -1 }">{{ subItem.name }}</a>
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
      menuList: [{name: '首页', id: '100000', link: 'index'}, {name: 'APP功能介绍', id: '100010', link: 'intro', subMenuList: [{name: '外汇券商开户', id: '100011', linkId: '0', link: 'intro'}, {name: '新增交易品种', id: '100012', linkId: '1', link: 'intro'}, {name: '交易行情', id: '100013', linkId: '2', link: 'intro'}, {name: '充值提现', id: '100014', linkId: '3', link: 'intro'}, {name: '开仓平仓', id: '100015', linkId: '4', link: 'intro'}]}, {name: '半小时学外汇', id: '100020', link: 'halfAnhour', subMenuList: [{name: '交易优势', id: '100021', linkId: '0', link: 'halfAnhour'}, {name: '基础知识', id: '100022', linkId: '1', link: 'halfAnhour'}, {name: '如何阅读图表', id: '100023', linkId: '2', link: 'halfAnhour'}, {name: '计算盈亏方法', id: '100024', linkId: '3', link: 'halfAnhour'}, {name: '交易示例', id: '100025', linkId: '4', link: 'halfAnhour'}, {name: '最佳时间', id: '100026', linkId: '5', link: 'halfAnhour'}]}, {name: '交易品种', id: '100030', link: 'tradeType', subMenuList: [{name: '贵金属', id: '100031', linkId: '0', link: 'tradeType'}, {name: '外汇', id: '100032', linkId: '1', link: 'tradeType'}, {name: '原油', id: '100033', linkId: '2', link: 'tradeType'}, {name: '指数CFD', id: '100034', linkId: '3', link: 'tradeType'}]}, {name: '关于我们', id: '100040', link: 'aboutUs', subMenuList: [{name: '公司简介', id: '100041', linkId: '0', link: 'aboutUs'}, {name: '蚂蚁外汇简介', id: '100042', linkId: '1', link: 'aboutUs'}]}
      ]
    }
  },
  methods: {
    menuHandler (link) {
      this.$router.push({name: link, params: { id: 0 }})
    },
    subMenuHandler (link, index) {
      this.$router.push({name: link, params: { id: index }})
    }
  }
}
</script>
<style type="text/css">
  .login{
    cursor: pointer;
  }
</style>