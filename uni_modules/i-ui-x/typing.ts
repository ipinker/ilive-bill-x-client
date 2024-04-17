/** @desc uts 导入 .d.ts 会报错， 这里就不用 .d.ts 了 **/

// 全局要用的类型放到这里
import { Ref } from "vue"
import { SeedOption } from "ipink-themejs";
import { HSLA, HSVA, Numberify, RGBA } from "@ctrl/tinycolor";
import type { Properties, PropertiesHyphen } from "csstype"

export interface StringObject { 
	[propName : string] : string 
};
export interface AnyObject { 
	[propName : string] : any 
};


export type SeedKey = keyof SeedOption;

/** @desc ColorKey : 颜色值的类型 SeedKey | string **/
export type ColorKey = string;

export type ThemeModeType = "dark" | "light";

export interface ColorInfo {
    hex?: string
    hex8?: string
    rgb?: string
    rgba?: Numberify<RGBA>
    hsl?: Numberify<HSLA>
    hsv?: Numberify<HSVA>
    r?: number
    g?: number
    b?: number
    a?: number
    h?: number
    s?: number
    l?: number
    v?: number
    source?: string
    oldHue?: number
}
export type ColorInfoKey = keyof ColorInfo;

export type OptionsKeyType = {
    label: string
    value: string
    children: string
}

/** @desc 设置主题样式用到的key； ThemeButton **/
export interface ThemeJsonOption {
    /** @desc uni.setNavigationBarColor backgroundColor **/
    navBgColor?: string
    /** @desc uni.setNavigationBarColor frontColor **/
    navTxtStyle?: "black" | "white"
    /** @desc uni.setBackgroundTextStyle textStyle **/
    bgTxtStyle?: "light" | "dark"
    /** @desc uni.setBackgroundColor backgroundColor **/
    bgColor?: string
    /** @desc uni.setBackgroundColor backgroundColorTop **/
    bgColorTop?: string
    /** @desc uni.setBackgroundColor backgroundColorBottom **/
    bgColorBottom?: string
    /** @desc uni.setTabBarStyle backgroundImage **/
    bgImage?: string
    /** @desc uni.setTabBarStyle color **/
    tabFontColor?: string
    /** @desc uni.setTabBarStyle selectedColor **/
    tabSelectedColor?: string
    /** @desc uni.setTabBarStyle backgroundColor **/
    tabBgColor?: string
    /** @desc uni.setTabBarStyle borderStyle **/
    tabBorderStyle?: "white" | "black"
}

export interface ThemeJson {
    dark: ThemeJsonOption
    light: ThemeJsonOption
}

export interface ElementRef {
	_ref: Ref<Element | null>
}

/**
 * @description 几何尺寸
 */
export type SizeStyle = { width?: string, height?: string, "line-height"?: string };

/**
 * @description 圆角
 */
export type RadiusStyle = { "border-radius"?: string };

export type {
    ResultStatus,
    PageStatus,
    NavigateType,
    EnumSizeType,
    SizeType,
    RadiusType,
    DirType,
    DefaultStyleType,
    DefaultStyleKeyType,
} from "./common/constants"


export interface StyleValue extends 
	Properties<string>, 
	PropertiesHyphen<string>
{
    [v: `--${string}`]: string;
};