// store/theme.ts
import { createThemeList } from "ipink-themejs";
import type { SeedOption, ColorToken } from 'ipink-themejs';
import { THEME_LIST } from "./common/constants";
import { reactive, computed, ComputedRef } from "vue"
import { ThemeModeType } from "./typing"

const themeList: SeedOption[] = THEME_LIST;
const list: ColorToken[] = createThemeList({ themeList, useDark: true }) || [];
export type State = {
    /** @desc 主题ID **/
    id: string  
    /** @desc 模式ID light ｜ dark **/
    modeId: ThemeModeType
    /** @desc 生成后的主题列表： createThemeList({ themeList, useDark: true }) => MapToken[], useDark: boolean 默认不生成暗黑模式， 需要手动开启 **/
    themeList: ColorToken[]
}

export const state: State = reactive({
	id: "gg",    // 当前主题
	modeId: "light", // 当前模式 light | dark
	themeList: list
})

export const useThemeStore = () => {
    /** @desc Getters`s id **/
	const id = computed(() => state.id);
    /** @desc Getters`s theme **/
	const theme: ComputedRef<ColorToken> = computed((): ColorToken => {
		return state.themeList.find((theme) => `${id.value}-${state.modeId}` === theme.id || id.value === theme.id) as ColorToken
	});
    /** @desc Getters`s mode **/
	const mode = computed(() => state.modeId);
	
	/** @desc 切换主题暗黑模式 **/
	function changeMode(id?: ThemeModeType): void {
	    if (id) state.modeId = id
	    else state.modeId = state.modeId === "light" ? "dark" : "light";
	}
	/** @desc 切换主题 **/
	function change(id: string): void {
	    if(!id) return;
	    if(id.includes("-light")) id = id.split("-light")[0];
	    if(id.includes("-dark")) id = id.split("-dark")[0];
	    state.id = id;
	}
	/** @desc 获取主题 **/
	function get(id: string): ColorToken {
	    let theme = state.themeList.find((theme) => theme.id === `${id}-${state.modeId}` || theme.id === id);
	    if (!theme) theme = state.themeList.find((theme) => theme.id === `${id}-${state.modeId === "light" ? "light" : "dark"}`)
	    return theme as ColorToken;
	}
	/**
	 * @desc 添加单个主题
	 * @param seed { SeedOption }
	 * @param dir 添加的方向 { "push" | "unshift" }
	 * @return: -1 | 1
	 */
	function add(seed: SeedOption, dir?: "push" | "unshift" | undefined): number {
	    return addList([seed], dir);
	}
	/**
	 * @desc 添加多个主题
	 * @param seedList { SeedOption[] }
	 * @param dir 添加的方向 { "push" | "unshift" }
	 * @return: -1 | 1
	 */
	function addList(seedList: SeedOption[], dir?: "push" | "unshift" | undefined): number {
	    type SeedKeyType = keyof SeedOption;
	    (seedList || []).forEach((item: SeedOption) => {
	        Object.keys(item).forEach((key) => {
	            if(!item[key as unknown as SeedKeyType]) delete item[key as unknown as SeedKeyType];
	        })
	    })
	    const newList: ColorToken[] = createThemeList({ themeList: seedList, useDark: true }) || [];
	    if(!newList.length) return -1;
	    if(dir == "unshift") state.themeList = newList.concat(state.themeList)
	    else state.themeList = state.themeList.concat(newList);
	    return 1
	}
	/**
	 * @desc 删除指定主题， 不可删除当前使用的主题
	 * @param id { string }
	 * @return: -1 | 1
	 */
	function del(id: string): number {
	    if(id == state.modeId) return -1;
	    const newList: ColorToken[] = [];
	    state.themeList.forEach((theme: ColorToken) => {
	        if (theme.id != id && theme.id != `${id}-dark` && theme.id != `${id}-light`) newList.push(theme);
	    })
	    const status = newList.length === state.themeList.length ? -1 : 1;
	    if(status == 1) state.themeList = newList;
	    return status;
	}
	function sort(func: Function): ColorToken[] {
	    return state.themeList = state.themeList.sort(func as any);
	}
	/**
	 * @desc 初始化主题列表， 会覆盖原有的
	 * @param seedList { SeedOption[] }
	 * @return: -1 | 1
	 */
	function init(seedList: SeedOption[]): number {
	    const newList = createThemeList({ themeList: seedList, useDark: true }) || [];
	    if(!newList.length) return -1
	    state.themeList = newList;
	    change(state.themeList[0].id);
	    return 1;
	}
	
	return {
		id,
		theme,
		mode,
		
		changeMode,
		change,
		get,
		add,
		addList,
		del,
		sort,
		init,
	}
}


