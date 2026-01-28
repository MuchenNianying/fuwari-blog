import type {
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "暮晨念影",
	subtitle: "MuchenNianying",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/icon.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/MuchenNianying", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "暮晨念影",
	bio: "幸福是每一个微小的生活愿望达成。当你想吃的时候有得吃，想被爱的时候有人来爱你。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/MuchenNianying",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/MuchenNianying",
		},
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/17346728",
		},
		{
			name: "Email",
			icon: "fa6-regular:envelope",
			url: "mailto:muchennianying@gmail.com",
		},
		{
			name: "Rss",
			icon: "material-symbols:rss-feed",
			url: "/rss.xml",
		},
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		// 	// You will need to install the corresponding icon set if it's not already included
		// 	// `pnpm add @iconify-json/<icon-set-name>`
		// 	url: "https://twitter.com",
		// },
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://store.steampowered.com",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

/**
 * 评论功能配置
 * 支持 Giscus、Utterances、Disqus 和 Twikoo 四种评论系统
 */
export const commentConfig: CommentConfig = {
	/** 是否启用评论功能 */
	enable: true,
	/** 评论系统提供商：giscus、utterances、disqus 或 twikoo */
	provider: "giscus",
	/** Giscus 评论系统配置 */
	giscus: {
		/** GitHub 仓库名，格式：用户名/仓库名 */
		repo: "MuchenNianying/fuwari-blog",
		/** 仓库 ID，从 Giscus 配置页面获取 */
		repoId: "R_kgDORCQQjA",
		/** 评论分类名称 */
		category: "General",
		/** 分类 ID，从 Giscus 配置页面获取 */
		categoryId: "DIC_kwDORCQQjM4C1hYR",
		/** 评论映射方式 */
		mapping: "pathname",
		/** 是否启用反应表情 */
		reactionsEnabled: "1",
		/** 数据严格模式 */
		dataStrict: "0",
		/** 输入框位置 */
		inputPosition: "bottom",
		/** 主题 */
		theme: "preferred_color_scheme",
		/** 语言 */
		lang: "zh-CN",
		/** 加载方式 */
		loading: "lazy",
	},
	/** Utterances 评论系统配置 */
	utterances: {
		/** GitHub 仓库名，格式：用户名/仓库名 */
		repo: "",
		/** 评论映射方式 */
		issueTerm: "pathname",
		/** 评论标签 */
		label: "comment",
		/** 主题 */
		theme: "preferred-color-scheme",
		/** 跨域设置 */
		crossorigin: "anonymous",
	},
	/** Disqus 评论系统配置 */
	disqus: {
		/** Disqus 站点 shortname，从 Disqus 管理面板获取 */
		shortname: "",
	},
	/** Twikoo 评论系统配置 */
	twikoo: {
		/** Twikoo 环境 ID，从 Twikoo 管理面板获取 */
		envId: "",
		/** Twikoo API 地址，如部署在 Vercel 上的地址 */
		apiUrl: "",
		/** 评论区容器 ID */
		el: "twikoo-comments",
		/** 评论映射方式 */
		path: "pathname",
		/** 语言 */
		lang: "zh-CN",
		/** 主题 */
		theme: "auto",
		/** 占位符 */
		placeholder: "写下你的评论...",
		/** 管理员邮箱 */
		admin: "",
		/** 评论数量限制 */
		count: 10,
	},
};
