import { ExtractPropTypes } from "vue"

export const navigationProps = {
    custom: {
        type: Boolean,
        default: false
    },
    height: {  // 高度
        type: [Number , String],
        default: 100
    },
    title: {
        type: String,
        default: ""
    },
    titleAlign: { // 标题方向 center | start | end
        type: String,
        default: "center"
    },
    color: { // 字色 rgb #H ColorName
        type: String,
        default: ""
    },
    bgColor: {   // 背景色
        type: String,
        default: ""
    },
    statusColor: { // 状态条背景色, 传一个颜色值或渐变属性值 color | linear-gradient()
        type: String,
        default: ""
    },
    gradientType: { // 渐变类型 linear | radial
        type: String,
        default: ""
    },
    gradientValue: { // 渐变值内容
        type: String,
        default: ""
    },
    useBack: {
        type: Boolean,
        default: false
    },
    backTxt: {
        type: String,
        default: ""
    },
    // 优先使用
    backIcon: {       // 返回 按钮路径
        type: String,
        default: "back-new"
    },
    primary: {
        type: Boolean,
        default: true
    },
    /**  @desc 将status设置在内容中  **/
    statusBarInBody: Boolean,
    /** @desc 透明度 **/
    opacity: {
        type: [ Number, String ],
        default: 1
    }
}

export type NavigationBarPropsType = ExtractPropTypes< typeof navigationProps >