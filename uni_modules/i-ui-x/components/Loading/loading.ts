import { PropType } from "vue"
export const loadingTypeList = [
    "0", "1", "2", "3"
] as const;
export type LoadingType = "0" | "1" | "2" | "3";


/**
 * @description Loading的属性
 */
export const loadingProps = {
    /** @desc Loading 尺寸 **/
    size: String,
    /** @desc Loading 类型 **/
    type: {
        type: String as unknown as PropType<LoadingType>,
        default: "0"
    },
    /** @desc Loading的填充色 **/
    color: String,
    /** @desc 开启遮罩, 权重最高 **/
    useMask: Boolean,
    /** @desc 开启局部遮罩 **/
    usePartMask: Boolean,
    markIndex: String

} as const;

export type LoadingPropsType = typeof loadingProps;
