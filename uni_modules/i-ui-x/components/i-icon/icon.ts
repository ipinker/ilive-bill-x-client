import {ExtractPropTypes, PropType} from "vue";
import {CLICK_EVENT} from "../../common/constants";
import {SeedKey} from "../../typing";
import type {IconEnum} from "./static/liveicon"

export const iconProps = {
    /**  @description For iconfont.css  **/
    icon: {
        type: String as PropType<IconEnum | string>,
        required: true
    },
    /**  @description SizeType s/m/l ｜ number ｜ stringNumber  **/
    size: String,
    color: String as PropType<SeedKey | string>,
    bgColor: String,
    /**  @description 开启本选项， color，bgColor 值应该为 SeedMap 类型内的属性  **/
    primary: Boolean
} as const;

export type IconPropsType = ExtractPropTypes<typeof iconProps>;

export type IconEmitsType = {
    [CLICK_EVENT]: () => void
}
