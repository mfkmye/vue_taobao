<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    components: {}
};
</script>
<style lang="less">
#nav {
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
