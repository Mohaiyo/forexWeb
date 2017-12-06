<template>
	<div>
		<div class="banners">
			<img src="/src/assets/images/index-banner1.jpeg" alt="">
		</div>

		<div class="content">
<!-- 			<div class="swiper-container" >
				<div class="swiper-wrapper">
					<div class="swiper-slide slide1">
						<h1>门槛极低</h1>
						<span class="line2"></span>
						<p>开户就送200美元体验金，最低10美元交易一手</p>
					</div>
					<div class="swiper-slide slide2">
						<h1>高收益</h1>
						<span class="line2"></span>
						<p>涨跌皆有机会赚钱，多倍杠杆，200 美金可以当作2000 美金来投资赚钱。</p>
					</div>
					<div class="swiper-slide slide3">
						<h1>顶级券商</h1>
						<span class="line2"></span>
						<p>蚂蚁外汇与国际知名券商合作，国际市场，每天5万亿以上成交量。</p>
					</div>
					<div class="swiper-slide slide4">
						<h1>操作简单</h1>
						<span class="line2"></span>
						<p>操作简易，新手一看就会，菜鸟轻松上路。</p>
					</div>
					<div class="swiper-slide slide5">
						<h1>机会多</h1>
						<span class="line2"></span>
						<p>24小时交易，T＋0交易，大小行情不错过。</p>
					</div>
					<div class="swiper-slide slide6">
						<h1>跟随高手</h1>
						<span class="line2"></span>
						<p>无需精通理财知识，跟着高手轻松赚大钱。</p>
					</div>
				</div>
			</div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div> -->
      <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
          <swiper-slide class="swiper-slide slide1">
            <h1>门槛极低</h1>
            <span class="line2"></span>
            <p>开户就送200美元体验金，最低10美元交易一手</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide slide2">
            <h1>高收益</h1>
            <span class="line2"></span>
            <p>涨跌皆有机会赚钱，多倍杠杆，200 美金可以当作2000 美金来投资赚钱。</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide slide3">
            <h1>顶级券商</h1>
            <span class="line2"></span>
            <p>蚂蚁外汇与国际知名券商合作，国际市场，每天5万亿以上成交量。</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide slide4">
            <h1>操作简单</h1>
            <span class="line2"></span>
            <p>操作简易，新手一看就会，菜鸟轻松上路。</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide slide5">
            <h1>机会多</h1>
            <span class="line2"></span>
            <p>24小时交易，T＋0交易，大小行情不错过。</p>
          </swiper-slide>
          <swiper-slide class="swiper-slide slide6">
            <h1>跟随高手</h1>
            <span class="line2"></span>
            <p>无需精通理财知识，跟着高手轻松赚大钱。</p>
          </swiper-slide>
          <!-- Optional controls -->
          <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
		</div>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'footer',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>