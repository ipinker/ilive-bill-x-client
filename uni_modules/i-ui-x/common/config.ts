import { Cache } from 'ipink-util';

const cache = new Cache('uiConfig');

export interface UIConfigBasicOption {
    /** @desc 外部通过 js props传入的单位依旧以 2倍图750标准传入，内部会自动转换为px， 如果设置unit 为 rpx则不会进行转px换算 **/
    unit?: "px" | "rpx"
    /** @desc 默认主题模式，仅在APP首次安装时设置有效 **/
    themeMode?: "light" | "dark"
    /** @desc 默认语言, 仅在APP首次安装时设置有效 **/
    lang?: "en" | "es" | "fr" | "ja" | "zh-Hans" | "zh-Hant" | "zh-Hans-US" | "zh-Hant-US"
    /** @desc 默认主题， 设置后将放置在内置主题列表的首个， 也可以通过themeStore.init重置内置主题列表设置默认主题，也可以通过。add & change(themeId) 方式 **/
    primary?: string
}

export interface UIConfigOption extends UIConfigBasicOption {
    /** @desc 外部通过 js props传入的单位依旧以 2倍图750标准传入，内部会自动转换为px， 如果设置unit 为 rpx则不会进行转px换算 **/
    unit: "px" | "rpx"
}

/** @desc 首次调用必须在 pinia 实例化之前 **/
class UIConfig {
    static instance: UIConfig;

    /** @desc 首次调用必须在 pinia 实例化之前 **/
    static createInstance(configOptions: UIConfigBasicOption) {
        if(UIConfig.instance) UIConfig.instance.updateConfig(configOptions);
        if(!UIConfig.instance) UIConfig.instance = new UIConfig(configOptions);
        return UIConfig.instance;
    }

    config: UIConfigOption = {
        unit: "px",
        themeMode: undefined,
        lang: undefined,
        primary: undefined, 
    }
    constructor(configOptions: UIConfigBasicOption) {
        this.reloadConfigByCache();
        this.updateConfig(configOptions);
        cache.set("UI_CONFIG_OPTION", this.config);
    }
    
    /**
     * @desc 用来更新组件库的全局配置
     * @param configOptions { UIConfigOption }
     * @return: 
     */
    updateConfig(configOptions: UIConfigBasicOption) {
        configOptions = configOptions || {}
        this.config = {
            ... this.config,
            ... configOptions
        }
    }

    // 每次初始化实例都要从本地缓存拿到缓存配置
    reloadConfigByCache() {
        const storage: UIConfigBasicOption = cache.get("UI_CONFIG_OPTION") || {};
        this.config = {
            ... this.config,
            ... storage
        }
    }

}

export const UIConfigInstance = UIConfig.createInstance({});