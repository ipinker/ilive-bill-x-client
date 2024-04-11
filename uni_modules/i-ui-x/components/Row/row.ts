import { ExtractPropTypes, PropType } from "vue"
export type { ColJustifyType, ColAlignType } from "../Col/col"

export const rowProps = {
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
};

export type RowPropsType = ExtractPropTypes<typeof rowProps>;