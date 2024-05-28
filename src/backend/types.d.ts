interface SiteOptions {
    // 网站名称
    siteName: string

    // 网站首页加载的文件
    indexFile: string

    // 网站logo
    logo: string

    // 默认主题
    defaultTheme: "light" | "dark" | "system"

    // 是否显示主题切换组件
    showThemeToggle: boolean

    // 是否显示 Hover 预览
    showHoverPreview: boolean

    // Limit maximum line length.
    // Fits less content on the screen, but makes long paragraphs more readable.
    readableLineLength: boolean

    // Markdown specs ignore single line breaks in reading view.
    // Turn this off to make single line breaks visible.
    strictLineBreaks: boolean

    // 是否隐藏页面内标题
    hideTitle: boolean

    // 是否在左侧显示所有发布的文章
    showNavigation: boolean

    // 是否显示搜索组件
    showSearch: boolean

    // 是否显示文章目录/大纲
    showOutline: boolean

    // 是否显示反链
    showBacklinks: boolean

    // 是否显示关系图谱
    showGraph: boolean

    // 滑动窗口模式
    slidingWindowMode: boolean
}
