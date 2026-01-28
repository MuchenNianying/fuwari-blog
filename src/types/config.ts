import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
	comments?: CommentConfig;
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};

/**
 * 评论功能配置类型
 * 支持 Giscus、Utterances 和 Disqus 三种评论系统
 */
export type CommentConfig = {
	/** 是否启用评论功能 */
	enable: boolean;
	/** 评论系统提供商：giscus、utterances、disqus 或 twikoo */
	provider: "giscus" | "utterances" | "disqus" | "twikoo";
	/** Giscus 评论系统配置（使用 Giscus 时需要） */
	giscus?: {
		/** GitHub 仓库名，格式：用户名/仓库名 */
		repo: string;
		/** 仓库 ID，从 Giscus 配置页面获取 */
		repoId: string;
		/** 评论分类名称 */
		category: string;
		/** 分类 ID，从 Giscus 配置页面获取 */
		categoryId: string;
		/** 评论映射方式：url、title、og:title 或 pathname */
		mapping: "url" | "title" | "og:title" | "pathname";
		/** 是否启用反应表情：1 启用，0 禁用 */
		reactionsEnabled: "1" | "0";
		/** 数据严格模式：1 启用，0 禁用 */
		dataStrict: "1" | "0";
		/** 输入框位置：top 或 bottom */
		inputPosition: "top" | "bottom";
		/** 主题：light、dark、transparent_dark 或 preferred_color_scheme */
		theme: "light" | "dark" | "transparent_dark" | "preferred_color_scheme";
		/** 语言 */
		lang: string;
		/** 加载方式：lazy 或 eager */
		loading: "lazy" | "eager";
	};
	/** Utterances 评论系统配置（使用 Utterances 时需要） */
	utterances?: {
		/** GitHub 仓库名，格式：用户名/仓库名 */
		repo: string;
		/** 评论映射方式：pathname、url、title 或 og:title */
		issueTerm: "pathname" | "url" | "title" | "og:title";
		/** 评论标签 */
		label: string;
		/** 主题 */
		theme:
			| "github-light"
			| "github-dark"
			| "preferred-color-scheme"
			| "github-dark-orange"
			| "icy-dark"
			| "dark-blue"
			| "photon-dark"
			| "boxy-light"
			| "gruvbox-dark";
		/** 跨域设置：anonymous 或 use-credentials */
		crossorigin: "anonymous" | "use-credentials";
	};
	/** Disqus 评论系统配置（使用 Disqus 时需要） */
	disqus?: {
		/** Disqus 站点 shortname，从 Disqus 管理面板获取 */
		shortname: string;
	};
	/** Twikoo 评论系统配置（使用 Twikoo 时需要） */
	twikoo?: {
		/** Twikoo 环境 ID，从 Twikoo 管理面板获取 */
		envId: string;
		/** Twikoo API 地址，如部署在 Vercel 上的地址 */
		apiUrl?: string;
		/** 评论区容器 ID */
		el?: string;
		/** 评论映射方式：pathname、url 或 title */
		path?: string;
		/** 语言 */
		lang?: string;
		/** 主题：light 或 dark */
		theme?: "light" | "dark" | "auto";
		/** 占位符 */
		placeholder?: string;
		/** 管理员邮箱 */
		admin?: string;
		/** 评论数量限制 */
		count?: number;
	};
};
