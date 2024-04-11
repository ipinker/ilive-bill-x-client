import { computed, ComputedRef } from "vue";
import { TinyColor } from "@ctrl/tinycolor";
import type { SeedKey, StyleValue } from "../typing";
import { useThemeStore } from "../theme";
import { LIGHT_MODE_ID } from "../common/constants";

type ReturnColorStringFunc = (color: string) => string
type ReturnColorStyleFunc = (colorStr?: string) => StyleValue
type ReturnGradientStyleFunc = (gradient ?: string) => StyleValue
export const useStyle = () => {

    const { theme, mode } = useThemeStore();

    const colorFunc: ReturnColorStringFunc = (color: string): string => {
        const value: TinyColor = new TinyColor(color);
        if(value.isValid){
			if(LIGHT_MODE_ID !== mode.value) value.darken().toRgbString();
			return value.toRgbString()
		};
        return theme.value?.[color as SeedKey] as string;
    };
	
	const shadow = computed<StyleValue>((): StyleValue => {
		return { "box-shadow" : `0 2px 6px 0 ${theme.value?.colorShadowBase}`}	
	});
	
    const border = computed<StyleValue>((): StyleValue => {
		return { "border" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }
	});
    const borderTop = computed<StyleValue>((): StyleValue => {
		return { "border-top" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}`}
	});
    const borderLeft = computed<StyleValue>((): StyleValue => {
		return { "border-left" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }
	});
    const borderBottom = computed<StyleValue>((): StyleValue => {
		return { "border-bottom" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }
	});
    const borderRight = computed<StyleValue>((): StyleValue => {
		return { "border-right" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }
	});
    const borderColor = computed<ReturnColorStyleFunc>((): ReturnColorStyleFunc => {
        return (colorStr ?: string): StyleValue => {
            let color: string = colorFunc(colorStr || "colorText");
            return { 
                "color" : color
            }
        }
    });

    const text = computed<StyleValue>((): StyleValue => {
		return { "color" : theme.value?.colorText }
	});
    const infoText = computed<StyleValue>((): StyleValue => {
		return { "color" : theme.value?.colorInfoText }
	});
    const primaryText = computed<StyleValue>((): StyleValue => {
		return { "color" : theme.value?.colorPrimaryText }
	});
    const whiteText = computed<StyleValue>((): StyleValue => {
		return { "color" : theme.value?.colorWhiteTextBase }
	});
    const disabledText = computed<StyleValue>((): StyleValue => {
		return { "color" : theme.value?.colorTextQuaternary}
	});
    const placeHolderText = computed<StyleValue>((): StyleValue => {
		return { "color": theme.value?.colorTextQuaternary }
	});
    const font = computed<ReturnColorStyleFunc>(() : ReturnColorStyleFunc => {
        return (colorStr ?: string): StyleValue => {
            let color: string = colorFunc(colorStr || "colorText");
            return { 
                "color" : color
            }
        }
    });

    const container = computed<StyleValue>((): StyleValue => {
		return {"background-color": theme.value?.colorBgContainer}
	});
    const primaryBg = computed<StyleValue>((): StyleValue => {
		return { "background-color" : theme.value?.colorPrimary }
	});
    const bgi = computed<ReturnGradientStyleFunc>((): ReturnGradientStyleFunc => {
		return (gradient ?: string): StyleValue => ({ "background-image" : gradient })
	});
    const bg = computed<ReturnColorStyleFunc>((): ReturnColorStyleFunc => {
        return (colorStr ?: string, opacity?: number): StyleValue => {
            let color: string = colorFunc(colorStr || "colorBgContainer");
            if(typeof opacity !== "undefined") color = new TinyColor(color).setAlpha(opacity).toRgbString();
            return { 
                "background-color" : color  
            };
        }
    });

    const colorValue = computed<ReturnColorStringFunc>((): ReturnColorStringFunc => {
        return colorFunc
    });

    return {
        shadow,
        borderTop,
        borderLeft,
        border,
        placeHolderText,
        disabledText,
        text,
        container,
        whiteText,
        primaryText,
        primaryBg,
        infoText,
        font,
        bg,
        bgi,
        borderBottom,
        borderRight,
        colorValue
    }
};
