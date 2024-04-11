import { ExtractPropTypes, PropType } from "vue"

export type ColJustifyType = "center" | "end" | "between" | "around" | "start";
export type ColAlignType = "center" | "end" | "start";
export const colProps = {
    justify: {
		type: String as unknown as PropType<ColJustifyType>,
		default: "start"
	},
    align: {
		type: String as unknown as PropType<ColAlignType>,
		default: "start"
	},
    width: String,
    height: String
}

export type ColPropsType = ExtractPropTypes<typeof colProps>;