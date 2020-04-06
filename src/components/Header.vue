<template>
    <div class="header">
        <slot></slot>
        <TbhBinner></TbhBinner>
    </div>
</template>
<script>
import TbhBinner from "../components/home/TbhBinner";
export default {
    components: {
        TbhBinner
    }
};
</script>
<style  scoped>
.header {
    width: 100%;
}
</style>