import {ExtractPropTypes, PropType} from "vue";
import {CLICK_EVENT} from "../../common/constants";

export const iconProps = {
    /**  @description For iconfont.css  **/
    icon: {
        type: String,
        required: true
    },
    /**  @description SizeType s/m/l ｜ number ｜ stringNumber  **/
    size: String,
    color: String,
    bgColor: String,
    /**  @description 开启本选项， color，bgColor 值应该为 SeedMap 类型内的属性  **/
    primary: Boolean,
	fontFamily: String,
	classes: String
} as const;

export type IconPropsType = ExtractPropTypes<typeof iconProps>;

export type IconEmitsType = {
    [CLICK_EVENT]: () => void
}
