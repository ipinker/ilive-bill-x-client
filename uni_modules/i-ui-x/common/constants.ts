import { SeedOption } from "ipink-themejs"
/** @desc light 模式标识， 用来判断是否时约定的 light **/
export const LIGHT_MODE_ID = "light";
/** @desc Theme mode : light | dark  **/
export const DEFAULT_THEME_MODE = LIGHT_MODE_ID;
/** @desc 内置的主题生成集合 SeedOption[] **/
export const THEME_LIST: SeedOption[] = [
    {"colorPrimary": "#16AD90", id: "gg"},
    {"colorPrimary": "#1677ff", id: "blue"},
    {"colorPrimary": "#2f54eb", id: "geekblue"},
    {"colorPrimary": "#13c2c2", id: "cyan"},
    {"colorPrimary": "#069b81", id: "gossamer"},
    {"colorPrimary": "#73d13d", id: "green"},
    {"colorPrimary": "#fadb14", id: "yellow"},
    {"colorPrimary": "#fa8c16", id: "orange"},
    {"colorPrimary": "#fa541c", id: "volcano"},
    {"colorPrimary": "#ff4d4f", id: "red"},
    {"colorPrimary": "#FC6572", id: "pink"},
    {"colorPrimary": "#818181", id: "gray"}
];

/** @desc 结果状态类型 **/
export type ResultStatus = "success" | "error" | "warning" | "info" | "E404" | "E403" | "E500";
/** @desc 页面级的状态分类 ：正常页面 | 无数据页面 ｜ 错误页 ｜ 成功页 ｜ 警告 ｜ 信息页 ｜ 403 ｜ 404 ｜ 500 **/
export type PageStatus = "success" | "error" | "warning" | "info" | "E404" | "E403" | "E500" | "default" | "empty";

export const NAVIGATE_LIST: NavigateType[] = [ "navigateTo", "reLaunch", "redirectTo", "switchTab" ];
/** @desc 页面级的跳转类型 **/
export type NavigateType = "navigateTo" | "reLaunch" | "redirectTo" | "switchTab"

/** @desc Event **/
export const UPDATE_MODEL_EVENT = "update:modelValue";
export const UPDATE_SHOW_EVENT = "update:show";
export const CHANGE_EVENT = "change";
export const CLICK_EVENT = "click";
export const CONFIRM_EVENT = "confirm";
export const CANCEL_EVENT = "cancel";
export const CLOSE_EVENT = "close";
export const OPEN_EVENT = "open";
export const CUSTOM_EVENT = "custom";

/** @desc Label 通用Key **/
export const LABEL_KEY = "label";
/** @desc Value 通用Key **/
export const VALUE_KEY = "value";
/** @desc 子集合 通用Key **/
export const CHILDREN_KEY = "children";

/** @desc 枚举 尺寸集合 ： "mini", "small", "normal", "big", "large"  **/
export const ENUM_SIZE_LIST: EnumSizeType[] = ["mini", "small", "normal", "big", "large"];
/** @desc 枚举 尺寸类型 ： "mini" ｜ "small" ｜ "normal" ｜ "big" ｜ "large"  **/
export type EnumSizeType = "mini" | "small" | "normal" | "big" | "large"
/** @desc 可食用的所有尺寸类型集合  **/
export const SIZE_LIST: SizeType[] = [
    "mini", "small", "normal", "big", "large",  "full",
    "xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl", "xxxxl",
];
/** @desc 可食用的所有尺寸的类型  **/
export type SizeType = "mini" | "small" | "normal" | "big" | "large" |  "full" |
    "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | "xxxxl"

/** @desc 可食用的圆角尺寸的集合  **/
export const RADIUS_LIST: RadiusType[] = [ "xs", "s", "m", "l" ];
/** @desc 可食用的圆角尺寸的类型  **/
export type RadiusType = "xs" | "s" | "m" | "l"
/** @desc 圆角尺寸 与 theme 共同的Key转化Map  **/
export const RadiusToSeedKey = {
    'xs': "borderRadius",
    's': "borderRadiusXS",
    'm': "borderRadiusSM",
    'l': "borderRadiusLG"
}

/** @desc 可食用的动画集合  **/
export const ANIMATION_LIST: Animation[] = [ "", "opacity", "default", "ripple", "color" ] ;
/** @desc 可食用的动画类型  **/
export type Animation = "" | "opacity" | "default" | "ripple" | "color"

/** @desc 方向 ： "top", "right", "bottom", "left"  **/
export const DIR_LIST: DirType[] = [ "top", "right", "bottom", "left" ];
/** @desc 方向的类型  **/
export type DirType = "top" | "right" | "bottom" | "left"


/** @desc 默认样式  **/
export const DEFAULT_STYLE = {
    radius: 8,
	borderWidth: 2,
	padding: 20,
	margin: 20,
	fontSize: 30,
	lineHeight: 40,
	zIndex: 99,
	zMaskIndex: 999,
	duration: 0.3,
	delay: 0
} as const;
/** @desc 默认样式的类型  **/
export type DefaultStyleType = typeof DEFAULT_STYLE;
/** @desc 默认样式的 key 类型  **/
export type DefaultStyleKeyType = keyof DefaultStyleType;
