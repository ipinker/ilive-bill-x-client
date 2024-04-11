<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="[fontIconStyle]" class="IFontIconContainer LiveIcon" @click="handleClick">{{unicode}}</text>
    <!-- #endif -->
	<!-- #ifndef APP-NVUE -->
    <text class="IFontIconContainer" :class="[genIconType, genIconValue]" :style="[fontIconStyle]" @click="handleClick"><slot></slot></text>
    <!-- #endif -->
</template>

<script lang="ts" setup>
import {iconProps, IconPropsType, IconEmitsType} from "./icon";
import {ComputedRef, StyleValue, ref, computed } from "vue";
import {CLICK_EVENT} from "../../common/constants";
import { useStyle } from "../../hooks/useStyle"
import {genSize} from "../../common/style";
import {iconList} from "./static/liveicon"
const props: IconPropsType = defineProps(iconProps);
const emits = defineEmits([CLICK_EVENT]);
const { colorValue } = useStyle();


// #ifdef APP-NVUE
// @ts-ignore
var domModule = weex.requireModule('dom');
// @ts-ignore
import iconUrl from './static/liveicon.ttf'
domModule.addRule('fontFace', {
    'fontFamily': "liveicon",
    'src': "url('" + iconUrl + "')"
});
// #endif

const unicode = computed(() => {
    let code = iconList.find(v => v.fontClass === props.icon);
    if (code) {
		return unescape(`%u${code.unicode}`)
    }
    return ''
})

const genIconType = computed(() => props.icon.indexOf("icon-") > -1 ? 'iconfont' : 'LiveIcon');
const genIconValue = computed(() => props.icon.indexOf("icon-") > -1 ? props.icon : ('live-' + props.icon))

const fontIconStyle: ComputedRef<StyleValue> = computed((): StyleValue => {
    const style: StyleValue = {};
    const color = props.color || (props.primary ? 'colorPrimaryText' : '') || '';
    if(color) style.color = colorValue.value(color);
    if(props.bgColor){
        style.backgroundColor = colorValue.value(props.bgColor);
    }
    if(props.size) {
        const { width, height } = genSize(props.size);
        style.width = width;
        style.height = height;
        style.lineHeight = height;
        style.fontSize = width;
    }
    return style;
})

const handleClick = () => emits(CLICK_EVENT);
</script>

<style lang="scss">
/* #ifndef APP-NVUE */
@import "./static/liveicon.css";
/* #endif */ 

.LiveIcon {
    font-family: liveicon !important;
    text-decoration: none;
    text-align: center;
    &::before {
        display: inline !important;
    }
}
.IFontIconContainer {
    display: inline-block;
    width: $i-font-m;
    height: $i-font-m;
    line-height: $i-font-m;
    text-align: center;
    color: inherit;
    font-size: inherit;
}
</style>
