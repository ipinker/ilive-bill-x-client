<template>
	<text class="ILoadingIcon"></text>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { genPx } from "../../common/style";
const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    size: {
        type: [String, Number],
        default: "32"
    }
})
const fontSize = computed(() => genPx(props.size))
</script>

<style lang="scss" scoped>
.ILoadingIcon {
    display: inline-block;
    width: v-bind(fontSize);
    height: v-bind(fontSize);
    border-radius: 50%;
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: defaultLoading 1.15s linear infinite;
}

@keyframes defaultLoading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
