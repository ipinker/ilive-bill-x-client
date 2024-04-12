import { PropType } from 'vue'
// @ts-ignore
type ParentType = globalThis.ComponentPublicInstance | null;
export const config = {
    top: 'top',
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    right: 'right',
    message: 'top',
    dialog: 'center',
    share: 'bottom'
} as const;
export type PopupType = typeof config;
export type PopupTypeType = keyof (typeof config)
export type PopupRefType = {
    open: (type?: PopupTypeType) => void
    close: (type?: PopupTypeType) => void
}
export const popupProps = {
    // 开启动画
    animation: {
        type: Boolean,
        default: true
    },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    // message: 消息提示 ; dialog : 对话框
    type: {
        type: String as unknown as PropType<PopupTypeType>,
        default: 'center' as PopupTypeType
    },
    isMaskClick: Boolean,
    backgroundColor: String,
    safeArea: {
        type: Boolean,
        default: true
    },
    maskBackgroundColor: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)'
    },
}
export default {
	data() {
		return {
			popup: null as ParentType
		}
	},
	created(){
        // @ts-ignore
		this.popup = this.getParent()
	},
	methods:{
		/**
		 * 获取父元素实例
		 */
		getParent(name = 'uniPopup'): ParentType {
            // @ts-ignore
			let parent = this.$parent;
			let parentName = parent.$options.name;
			while (parentName !== name) {
				parent = parent.$parent;
				if (!parent) return null
				parentName = parent.$options.name;
			}
			return parent;
		},
	}
}
