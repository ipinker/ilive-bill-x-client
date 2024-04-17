import { PropType, ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, CLOSE_EVENT, OPEN_EVENT } from '../../common/constants';
import { StyleValue, ElementRef } from '../../typing';

export const config = {
	'slide-top': "top",
    top: 'top',
    message: 'top',
	
    'slide-bottom': 'bottom',
    bottom: 'bottom',
    share: 'bottom',
	
	'zoom-in': 'center',
    dialog: 'center',
    center: 'center',
	
	'zoom-out': 'reverseCenter',
	reverseCenter: "reverseCenter",
	
	'slide-left': 'left',
    left: 'left',
    'slide-right': 'right',
    right: 'right',
	
	fade: "opacity",
	opacity: "opacity",
} as const;
export type PopupType = typeof config;
export type PopupTypeItem = keyof (typeof config)
export interface PopupRef extends ElementRef {
    open: (type?: PopupTypeItem) => void
	close: () => void
}
export const popupProps = {
	show: Boolean,
	/* @desc 弹出层类型，{ PopupTypeType } */
    type: String as unknown as PropType<PopupTypeItem>,
	/* @desc 点击遮罩是否关闭 */ 
    isMaskClick: {
		type: Boolean,
		default: true
	},
	/* @desc 背景色 */ 
    bgColor: {
		type: String,
		default: "#fff"
	},
	/* @desc 过渡时间 */
	duration: Number,
	styles: Object as unknown as PropType<StyleValue>,
    safeArea: {
        type: Boolean,
        default: true
    },
	/* @desc 遮罩背景色*/
    maskBgColor: String,
	/* @desc 遮罩背景色*/
    zIndex: Number,
	/* @desc 圆角 */
    radius: Number,
}

export type PopupPropsType = ExtractPropTypes<typeof popupProps>;

export type PopupEmitsType = {
	[CLOSE_EVENT]: () => void
	[OPEN_EVENT]: () => void
	[CHANGE_EVENT]: (option : { show : boolean }) => void
}


export class Animation {
	type: PopupTypeItem = "center";
	
	constructor(type?: PopupTypeItem) {
		if(type) this.type = type;
	}
	
	/**
	 * 顶部弹出样式处理
	 */
	top(show: boolean): StyleValue {
		if(!show){
			return {
				"transform" : "translateY(-100%)"
			};
		}
		return {
			"transform" : "translateY(0)"
		};
	}
	/**
	 * 底部弹出样式处理
	 */
	bottom(show: boolean): StyleValue {
		if(!show){
			return {
				"transform" : "translateY(100%)"
			};
		}
		return {
			"transform" : "translateY(0)"
		};
	}
	/**
	 * 中间弹出样式处理
	 */
	center(show: boolean): StyleValue {
		if(!show){
			return {
				"transform" : "scaleX(0.7) scaleY(0.7)"
			};
		}
		return {
			"transform" : "scaleX(1) scaleY(1)"
		};
	}
	/**
	 * 中间弹出样式处理
	 */
	reverseCenter(show: boolean): StyleValue {
		if(!show){
			return {
				"transform" : "scaleX(1.3) scaleY(1.3)"
			};
		}
		return {
			"transform" : "scaleX(1) scaleY(1)"
		};
	}
	left(show: boolean): StyleValue {
	
		if(!show){
			return {
				"transform" : "translateX(-100%)"
			};
		}
		return {
			"transform" : "translateX(0)"
		};
	}
	right(show: boolean): StyleValue {		
		if(!show){
			return {
				"transform" : "translateX(100%)"
			};
		}
		return {
			"transform" : "translateX(0)"
		};
	}
	opacity(show: boolean): StyleValue {		
		if(!show){
			return {
				"opacity" : 0
			};
		}
		return {
			"opacity" : 1
		};
	}
}