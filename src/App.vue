<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import 'assets/style/common';
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-to {
        opacity: 0;
    }
    .router-fade-enter-to, .router-fade-leave {
        opacity: 1;
    }
    .mint-toast-text{
        color: #fff;
    }
</style>