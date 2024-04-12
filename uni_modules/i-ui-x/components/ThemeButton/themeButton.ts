import type { ThemeModeType, ThemeJson } from "../../typing";
import { CHANGE_EVENT, LIGHT_MODE_ID } from "../../index";
import json from "./theme.json";
import { ExtractPropTypes } from "vue";
const localThemeJson = json as ThemeJson;
/**
 * @desc 设置Tabbar的字体色背景色
 * @param mode 当前主题模式 { ThemeModeType }
 * @param themeJson 覆盖原主题方案的JSON { ThemeJson }
 * @return: 
 */
export function setAppStyle(mode: ThemeModeType, themeJson?: ThemeJson) {
    if(!themeJson) themeJson = localThemeJson as ThemeJson;
    let colorMap = themeJson[mode];
    let localColorMap = localThemeJson[mode];
    const styleMap: any = {
        color: colorMap?.tabFontColor || localColorMap?.tabFontColor,
        selectedColor: colorMap?.tabSelectedColor || localColorMap?.tabSelectedColor,
        borderStyle: colorMap?.tabBorderStyle || localColorMap?.tabBorderStyle
    }
    styleMap.backgroundColor = colorMap?.tabBgColor || localColorMap?.tabBgColor;
    try {
        uni.setBackgroundColor && uni.setBackgroundColor({
            backgroundColor: colorMap.bgColor || localColorMap?.bgColor,
            backgroundColorTop: colorMap.bgColorTop || localColorMap?.bgColorTop,
            backgroundColorBottom: colorMap.bgColorBottom || localColorMap?.bgColorBottom
        });
    } catch (error) {}
    try {
        uni.setNavigationBarColor && uni.setNavigationBarColor({
            frontColor: (colorMap.navTxtStyle || localColorMap.navTxtStyle) == "white" ? '#ffffff' : "#000000",
            backgroundColor: colorMap.navBgColor || localColorMap.navBgColor,
        }) 
    } catch (error) {}
    try { 
        uni.setBackgroundTextStyle && uni.setBackgroundTextStyle({ 
            textStyle: (colorMap.bgTxtStyle || localColorMap.bgTxtStyle) as string 
        }) 
    } catch (error) {}
    try { 
        uni.setTabBarStyle && uni.setTabBarStyle(styleMap) 
    } catch (error) {}
}
/**
 * @desc 设置系统暗色模式
 * @param mode { ThemeModeType }
 * @return: 
 */
export function setDarkMode(mode: ThemeModeType) {
    const isDark = mode != LIGHT_MODE_ID
    // #ifdef H5
    if (document?.documentElement) {
        document.documentElement.classList.remove('dark-theme');
        if (isDark) document.documentElement.classList.add('dark-theme');
    }
    // #endif
    // #ifdef APP
    if(uni?.getSystemInfoSync) {
        try {
            if (uni.getSystemInfoSync().platform === 'android') {
                // 安卓系统
                const Context: any = plus.android.importClass('android.content.Context');
                const UiModeManager: any = plus.android.importClass('android.app.UiModeManager');
                const main: any = plus.android.runtimeMainActivity();
                const uiModeManager = main.getSystemService(Context.UI_MODE_SERVICE);
                if (uiModeManager && uiModeManager.getType() === UiModeManager.MODE_TYPE_DAYNIGHT) {
                    if (isDark) {
                        uiModeManager.setNightMode(UiModeManager.MODE_NIGHT_YES);
                    } else {
                        uiModeManager.setNightMode(UiModeManager.MODE_NIGHT_NO);
                    }
                }
            } else if (uni.getSystemInfoSync().platform === 'ios') {
                // iOS系统
                const UIViewControllerBasedStatusBarAppearance: any = plus.ios.importClass('UIViewControllerBasedStatusBarAppearance');
                // @ts-ignore
                const application = plus.ios.runtimeApplication();
                const key = UIViewControllerBasedStatusBarAppearance.key;
                const value = isDark ? 1 : 0;
                application.setInfoDictionaryValue(value, key);
                plus.ios.invoke('UIApplication', 'sharedApplication').setStatusBarStyle(isDark ? 3 : 2);
            }
        } catch (error) {
            
        }
    }
    // #endif
    setAppStyle(mode);
}

export const themeButtonProps = {
    /** @desc 按钮尺寸 **/
    size: {
        type: String,
        default: "50"
    },
    /** @desc 使用内置的设置全局暗黑模式 **/
    useBuiltIn: {
        type: Boolean,
        default: true
    }
}
export type ThemeButtonPropsType = ExtractPropTypes<typeof themeButtonProps>;

export type ThemeButtonEmitsType = {
    [CHANGE_EVENT] : (mode: ThemeModeType) => void
}