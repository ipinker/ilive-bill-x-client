/*
 * @Author: Gavin New
 * @Date: 2024-02-19 10:21:24
 * @LastEditors: Gavin New
 * @LastEditTime: 2024-02-22 14:36:26
 * @FilePath: /renovation/src/hooks/useStyle.ts
 * @Description: 描述
 */
import { computed, toRefs } from "vue";
import { TinyColor } from "@ctrl/tinycolor";
import type { SeedKey } from "../typing";
import { useThemeStore } from "../theme";


export const useStyle = () => {

    const { theme } = useThemeStore();

    const colorFunc = (color: SeedKey | string): string => {
        const value: TinyColor = new TinyColor(color);
        if(value.isValid) return value.toRgbString();
        return theme.value?.[color as SeedKey] as string;
    };

    const shadow = computed(() => ({ "box-shadow" : `0 2px 6px 0 ${theme.value?.colorShadowBase}`}));


    const border = computed(() => ({ "border" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }));
    const borderTop = computed(() => ({ "border-top" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}`}));
    const borderLeft = computed(() => ({ "border-left" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }));
    const borderBottom = computed(() => ({ "border-bottom" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }));
    const borderRight = computed(() => ({ "border-right" : `${theme.value?.borderWidth}px solid ${theme.value?.colorBorder}` }));

    const placeHolder = computed(() => ({ "color": theme.value?.colorTextQuaternary })) ;
    const disabledFont = computed(() => ({ "color" : theme.value?.colorTextQuaternary}));
    const primaryText = computed(() => ({ "color" : theme.value?.colorPrimaryText }));
    const infoText = computed(() => ({ "color" : theme.value?.colorInfoText }));
    const text = computed(() => ({ "color" : theme.value?.colorText }));
    const whiteText = computed(() => ({ "color" : theme.value?.colorWhiteTextBase }));
    const font = computed(() => {
        return (colorStr ?: string) => {
            let color: string = colorFunc(colorStr || "colorText");
            return { 
                "color" : color
            }
        }
    });

    const container = computed(() => ({"background-color": theme.value?.colorBgContainer}));
    const primaryBg = computed(() => ({ "background-color" : theme.value?.colorPrimary }));
    const bgi = computed(() => ((gradient ?: string) => ({ "background-image" : gradient })));
    const bg = computed(() => {
        return (colorStr ?: string, opacity?: number) => {
            let color: string = colorFunc(colorStr || "colorBgContainer");
            if(typeof opacity !== "undefined") color = new TinyColor(color).setAlpha(opacity).toRgbString();
            return { 
                "background-color" : color  
            };
        }
    });

    const colorValue = computed(() => {
        return colorFunc
    });

    return toRefs({
        shadow,
        borderTop,
        borderLeft,
        border,
        placeHolder,
        disabledFont,
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
    })
};
