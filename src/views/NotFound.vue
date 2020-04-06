<template>
    <div class="not-found">很抱歉，您要访问的页面不存在!</div>
</template>
<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log("from : " + from.path);
        next();
    }
};
</script>