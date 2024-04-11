<template>
	<text class="ILoadingIcon"></text>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { genPx } from "../../common/style";
import { useStyle } from "../../hooks/useStyle"
const { colorValue } = useStyle();
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
const borderColor = computed(() => colorValue.value(props.color || 'colorBorder'));
const fontSize = computed(() => genPx(props.size));
</script>

<style lang="scss" scoped>
.ILoadingIcon {
    display: inline-block;
    width: v-bind(fontSize);
    height: v-bind(fontSize);
    border-radius: 50%;
    border: 2px solid v-bind(borderColor);
    border-right-color: transparent;
    animation: defaultLoading 0.95s linear infinite;
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