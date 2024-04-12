import { ExtractPropTypes, PropType } from "vue"
export type { ColJustifyType, ColAlignType } from "../Col/col"

export const rowProps = {
    justify: {
		type: String as unknown as PropType<ColJustifyType>,
		default: "start" as ColJustifyType
	},
    align: {
		type: String as unknown as PropType<ColAlignType>,
		default: "start" as ColAlignType
	},
    width: String,
    height: String
};

export type RowPropsType = ExtractPropTypes<typeof rowProps>;