import {
    SIZE_LIST, SizeType,
    RadiusType, RADIUS_LIST,
    Animation, ANIMATION_LIST,
    DEFAULT_STYLE
} from "../../common/constants";
import type { ExtractPropTypes } from 'vue';
import type { ButtonPropsType } from "./button";
import { genRadius, genSize } from "../../common/style";
import { RadiusStyle, SizeStyle} from "../../typing"
import { ButtonType } from "./button";

/**
 * @description 根据按钮的类型 <type> 生成指定的 class 集合
 */
export const genButtonTypeClass = (props: ExtractPropTypes<ButtonPropsType>): string[] => {
    return [
        `button-type-${ props.type }`,
        props.link ? `button-type-link`: "",
        props.dashed ? "button-type-dashed" : "",
        props.plain ? "button-type--plain" : "",
        props.round ? `button-type-round`: "",
        props.text ? `button-type-text`: "",
        props.block ? `button-ele-block`: "",
        props.disabled ? `button-type-disabled`: "",
        props.loading ? `button-func-loading`: ""
    ];
};

/**
 * @description 根据按钮的尺寸 <size> 生成指定的 class 集合
 */
export const genButtonSizeClass = (props: ExtractPropTypes<ButtonPropsType>): string[] => {
    return [
        SIZE_LIST.includes(props.size as SizeType) ? `button-size-${ props.size }` : "",
    ];
};

export const genButtonSizeStyle = (props: ExtractPropTypes<ButtonPropsType>): SizeStyle => {
    if(SIZE_LIST.includes(props.size as SizeType)) return {};

    return genSize(props.size || "", props.round);
};

/**
 * @description 根据按钮的圆角 <radius> 生成指定的 class 集合
 */

export const genButtonRadiusStyle = (radius: string): RadiusStyle => {
    radius = radius || radius == "0" ? radius : ('' + DEFAULT_STYLE.radius);
    return RADIUS_LIST.includes(("" + radius) as RadiusType) ? {} : genRadius(radius);
};

/**
 * @description 根据按钮的各种动画 <Animation> 生成指定的 class 集合
 */
export const genButtonAnimationClass = (props: ExtractPropTypes<ButtonPropsType>): string[] => {
	if (props.disabled || props.loading) return [];
    return [
		ANIMATION_LIST.includes(props.animation as Animation) ? `button-animation-${ props.animation }` : "",
    ];
};

export type ColorStyle = {
    "background-color"?: string,
    "color"?: string,
    "border-color"?: string,
    "border"?: string
}
type ColorStyleMap = {
    bgColor: string;
    textColor: string;
    borderColor?: string;
    shadowColor?: string;
    activeBgColor?: string;
    activeTextColor?: string;
    disabled?: boolean;
    _type?: ButtonType;
    _custom?: boolean;
    plain?: boolean;
};
export const genColorMap = (props: ExtractPropTypes<ButtonPropsType>): ColorStyleMap => {
    const {
        bg = "", color = "",
        plain, disabled= false,
        link, text,
        primary, success, warning, info, error,
        type = "default"
    } = props;

    let bgColor: string = "colorBgContainer",
        textColor: string = "colorText",
        shadowColor: string = "colorShadowBase",
        activeBgColor: string = "colorInfoBgHover",
        borderColor: string = "",
        activeTextColor: string = "",
        _type: ButtonType = type,
        _custom: boolean = false;

    if(disabled && type != "link" && type != "text"){
        return {
            bgColor: "colorBlack",
            textColor: "colorTextQuaternary",
            borderColor: "colorBorder",
            disabled: true
        }
    }
    if(link || type == "link"){
        _type = "link";
        bgColor = "transparent";
        textColor = "colorLink";
        activeTextColor = "colorLinkHover";
        shadowColor = "";
        activeBgColor = "";
        if(disabled){
            textColor = "colorLinkHover";
            activeTextColor = "";
        }
    }
    else if(text || type == "text"){
        _type = "text";
        bgColor = "transparent";
        textColor = "colorText";
        activeTextColor = "colorTextTertiary";
        shadowColor = "";
        activeBgColor = "";
        if(disabled){
            activeTextColor = "";
        }
    }
    else if(primary || type == "primary") {
        _type = "primary";
        bgColor = "colorPrimary";
        activeTextColor = textColor = "colorWhiteTextBase";
        shadowColor = "colorPrimaryShadow";
        activeBgColor = "colorPrimaryActive";
        if(plain){
            textColor = "colorPrimaryText";
            borderColor = "colorPrimaryBorder";
            activeBgColor = "colorPrimaryBg";
            activeTextColor = "colorPrimaryTextActive";
        }
    }
    else if(success || type == "success") {
        _type = "success";
        bgColor = "colorSuccess";
        activeTextColor = textColor = "colorWhiteTextBase";
        shadowColor = "colorSuccessShadow";
        activeBgColor = "colorSuccessActive";
        if(plain){
            textColor = "colorSuccessText";
            borderColor = "colorSuccessBorder";
            activeBgColor = "colorSuccessBg";
            activeTextColor = "colorSuccessTextActive";
        }
    }
    else if(warning || type == "warning") {
        _type = "warning"
        bgColor = "colorWarning";
        activeTextColor = textColor = "colorWhiteTextBase";
        shadowColor = "colorWarningShadow";
        activeBgColor = "colorWarningActive";
        if(plain){
            textColor = "colorWarningText";
            borderColor = "colorWarningBorder";
            activeBgColor = "colorWarningBg";
            activeTextColor = "colorWarningTextActive";
        }
    }
    else if(error || type == "error") {
        _type = "error"
        bgColor = "colorError";
        activeTextColor = textColor = "colorWhiteTextBase";
        shadowColor = "colorErrorShadow";
        activeBgColor = "colorErrorActive";
        if(plain){
            textColor = "colorErrorText";
            borderColor = "colorErrorBorder";
            activeBgColor = "colorErrorBg";
            activeTextColor = "colorErrorTextActive";
        }
    }
    else if(info || type == "info") {
        _type = "info"
        bgColor = "colorInfo";
        activeTextColor = textColor = "colorWhiteTextBase";
        shadowColor = "colorInfoShadow";
        activeBgColor = "colorInfoActive";
        if(plain){
            textColor = "colorInfoText";
            borderColor = "colorInfoBorder";
            activeBgColor = "colorInfoBg";
            activeTextColor = "colorInfoTextActive";
        }
    }
    else if(bg) {
        _type = ""
        bgColor = bg;
        activeTextColor = textColor = color || "#ffffff";
        if(plain){
            textColor = bg;
        }
        _custom = true;
    }
    else {
        if(plain){
            textColor = "colorText";
        }
    }
    if(plain) bgColor = "transparent";
    return {
        bgColor,
        textColor,
        shadowColor,
        activeBgColor,
        borderColor,
        activeTextColor,
        disabled,
        _type,
        _custom,
        plain
    };
}

