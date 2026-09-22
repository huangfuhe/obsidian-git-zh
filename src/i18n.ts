import { ButtonComponent, Setting, TextComponent } from "obsidian";

const translations: Record<string, string> = {
    Automatic: "自动化",
    "Git is not ready. When all settings are correct you can configure commit-sync, etc.":
        "Git 尚未准备就绪。设置正确后即可配置自动提交和同步。",
    "Split timers for automatic commit and sync":
        "分开设置自动提交和同步计时器",
    "Enable to use one interval for commit and another for sync.":
        "启用后，可分别设置提交和同步的时间间隔。",
    "Auto pull interval (minutes)": "自动拉取间隔（分钟）",
    "Auto push interval (minutes)": "自动推送间隔（分钟）",
    "Stage all changes when nothing is staged": "没有暂存内容时暂存全部变更",
    "Commit message on manual commit": "手动提交时的提交信息",
    "Commit message script": "提交信息脚本",
    "{{date}} placeholder format": "{{date}} 占位符格式",
    "{{hostname}} placeholder replacement": "{{hostname}} 占位符替换",
    "List filenames affected by commit in the commit body":
        "在提交正文中列出受影响的文件名",
    "Auto-stash changes when rebasing": "变基时自动暂存变更",
    "Status bar with summary of line changes": "在状态栏显示行变更摘要",
    "Show the author of the commit in the history view.":
        "在历史视图中显示提交作者。",
    "Show the date of the commit in the history view.":
        "在历史视图中显示提交日期。",
    "Source control view refresh interval": "源代码管理视图刷新间隔",
    "Show commit authoring information next to each line":
        "在每行旁显示提交作者信息",
    "Show commit hash": "显示提交哈希",
    "Author name display": "作者名称显示方式",
    "Authoring date display": "创作日期显示方式",
    "Custom authoring date format": "自定义创作日期格式",
    "Authoring date display timezone": "创作日期显示时区",
    "Oldest age in coloring": "颜色标记的最早时间",
    "Text color": "文本颜色",
    "Ignore whitespace and newlines in changes": "忽略变更中的空格和换行",
    "Follow movement and copies across files and commits":
        "跟踪跨文件和提交的移动与复制",
    "Do not follow (default)": "不跟踪（默认）",
    "Follow within same commit": "在同一提交内跟踪",
    "Follow within all commits (maybe slow)": "在所有提交内跟踪（可能较慢）",
    Hide: "隐藏",
    Full: "完整名称",
    Initials: "首字母",
    "Initials (default)": "首字母（默认）",
    "First name": "名字",
    "Last name": "姓氏",
    "Date (default)": "日期（默认）",
    "Date and time": "日期和时间",
    "Natural language": "自然语言",
    Custom: "自定义",
    "My local (default)": "我的本地时区（默认）",
    "Author's local": "作者本地时区",
    "Automatic routines are currently paused.": "自动任务当前已暂停。",
    "Paused automatic routines.": "已暂停自动任务。",
    "Resumed automatic routines.": "已恢复自动任务。",
    "Initialized new repo": "已初始化新仓库",
    "Cloned new repo.": "已克隆新仓库。",
    "Please restart Obsidian": "请重启 Obsidian",
    "No repository found": "未找到仓库",
    "Too many changes to display": "变更太多，无法显示",
    "CAUTION: Delete repository": "注意：删除仓库",
    "CAUTION: Discard all changes": "注意：丢弃全部变更",
    "Amend staged": "修订已暂存提交",
    "Commit-and-sync and then close Obsidian": "提交并同步，然后关闭 Obsidian",
    "Commit all changes and sync": "提交全部变更并同步",
    "Commit all changes with specific message": "使用指定信息提交全部变更",
    "Commit staged and sync": "提交已暂存变更并同步",
    "Toggle line author information": "切换行作者信息",
    "Pull on startup": "启动时拉取",
    "Automatically pull commits when Obsidian starts.":
        "Obsidian 启动时自动拉取提交。",
    "Commit-and-sync": "提交并同步",
    Commit: "提交",
    Pull: "拉取",
    Push: "推送",
    Fetch: "获取",
    "Merge strategy": "合并策略",
    Merge: "合并",
    Rebase: "变基",
    Enabled: "启用",
    Disabled: "停用",
    "Use Git configuration": "使用 Git 配置",
    "Merge strategy on conflicts": "冲突时的合并策略",
    "None (git default)": "无（Git 默认）",
    "Our changes": "保留本地修改",
    "Their changes": "保留远程修改",
    "Push on commit-and-sync": "提交并同步时推送",
    "Pull on commit-and-sync": "提交并同步前拉取",
    "Squash commits before push": "推送前合并提交",
    "Hunk management": "代码块管理",
    Signs: "变更标记",
    "Hunk commands": "代码块命令",
    "Line author information": "行作者信息",
    "History view": "历史视图",
    "Show Author": "显示作者",
    "Show Date": "显示日期",
    "Source control view": "源代码管理视图",
    "Automatically refresh source control view on file changes":
        "文件变更时自动刷新源代码管理视图",
    Miscellaneous: "其他",
    "Diff view style": "差异视图样式",
    Split: "分栏",
    Unified: "统一",
    "Disable informative notifications": "禁用提示通知",
    "Disable error notifications": "禁用错误通知",
    "Hide notifications for no changes": "没有变更时隐藏通知",
    "Show status bar": "显示状态栏",
    "Show branch status bar": "显示分支状态栏",
    "Show the count of modified files in the status bar":
        "在状态栏显示修改文件数",
    "File menu integration": "文件菜单集成",
    "Authentication/commit author": "认证和提交作者",
    "Commit author": "提交作者",
    "Username on your git server. E.g. your username on GitHub":
        "Git 服务器用户名，例如 GitHub 用户名",
    "Password/Personal access token": "密码或 Personal Access Token",
    "Author name for commit": "提交作者名称",
    "Author email for commit": "提交作者邮箱",
    Advanced: "高级",
    "Update submodules": "更新子模块",
    "Submodule recurse checkout/switch": "子模块递归检出或切换",
    "Custom Git binary path": "自定义 Git 可执行文件路径",
    "Additional environment variables": "附加环境变量",
    "Additional PATH environment variable paths": "附加 PATH 环境变量路径",
    "Reload with new environment variables": "使用新的环境变量重新加载",
    Reload: "重新加载",
    "Custom base path (Git repository path)": "自定义基路径（Git 仓库路径）",
    "Custom Git directory path (Instead of '.git')":
        "自定义 Git 目录路径（替代 .git）",
    "Disable on this device": "在此设备上停用",
    Support: "支持",
    Donate: "捐赠",
    Preview: "预览",
    "Preview commit message": "预览提交信息",
    "Copy Debug Information": "复制调试信息",
    "Open source control view": "打开源代码管理视图",
    "Open history view": "打开历史视图",
    "Open diff view": "打开差异视图",
    "Open file on GitHub": "在 GitHub 上打开文件",
    "Open file history on GitHub": "在 GitHub 上打开文件历史",
    "Edit .gitignore": "编辑 .gitignore",
    "Edit remotes": "编辑远程仓库",
    "Remove remote": "删除远程仓库",
    "Set upstream branch": "设置上游分支",
    "Initialize a new repo": "初始化新仓库",
    "Clone an existing remote repo": "克隆远程仓库",
    "List changed files": "列出变更文件",
    "Switch branch": "切换分支",
    "Create new branch": "创建新分支",
    "Delete branch": "删除分支",
    "Stage current file": "暂存当前文件",
    "Unstage current file": "取消暂存当前文件",
    "Stage hunk": "暂存代码块",
    "Unstage hunk": "取消暂存代码块",
    "Reset hunk": "重置代码块",
    "Preview hunk": "预览代码块",
    "Go to next hunk": "前往下一个代码块",
    "Go to previous hunk": "前往上一个代码块",
    "Pause/Resume automatic routines": "暂停或恢复自动任务",
    "Raw command": "执行原始命令",
    "Commit all changes": "提交全部变更",
    "Commit staged": "提交已暂存变更",
    "Commit with specific message": "使用指定信息提交",
    "Commit staged with specific message": "使用指定信息提交已暂存变更",
    "Commit-and-sync with specific message": "使用指定信息提交并同步",
    "Stage all": "全部暂存",
    "Unstage all": "全部取消暂存",
    Discard: "丢弃",
    "Open File": "打开文件",
    Refresh: "刷新",
    "Change Layout": "切换布局",
    "More commit actions": "更多提交操作",
    "Commit Message": "提交信息",
    Save: "保存",
    Cancel: "取消",
    Delete: "删除",
    "Select all": "全选",
    Cut: "剪切",
    Copy: "复制",
    Paste: "粘贴",
    "Paste as plain text": "粘贴为纯文本",
};

export function t(value: string): string {
    if (translations[value]) return translations[value];
    const autoMatch = value.match(
        /^Auto (commit-and-sync|commit|push|pull)(.*)$/
    );
    if (autoMatch) {
        const action: Record<string, string> = {
            commit: "提交",
            "commit-and-sync": "提交并同步",
            push: "推送",
            pull: "拉取",
        };
        return `自动${action[autoMatch[1] ?? "commit"]}${autoMatch[2]}`;
    }
    const fragments: Array<[string, string]> = [
        [
            "Enable to use one interval for commit and another for sync.",
            "启用后，可分别设置提交和同步的时间间隔。",
        ],
        ["Set to 0 (default) to disable.", "设置为 0（默认）以停用。"],
        [
            "Automatically pull commits when Obsidian starts.",
            "Obsidian 启动时自动拉取提交。",
        ],
        ["Please specify a valid number.", "请输入有效数字。"],
        [
            "You will get a pop up to specify your message.",
            "将弹出窗口让你填写提交信息。",
        ],
        ["Available placeholders:", "可用占位符："],
        [
            "Show the author of the commit in the history view.",
            "在历史视图中显示提交作者。",
        ],
        [
            "Show the date of the commit in the history view.",
            "在历史视图中显示提交日期。",
        ],
        [
            "Obsidian must be restarted for the changes to take affect.",
            "需要重启 Obsidian 才能使更改生效。",
        ],
        ["Only available on desktop currently.", "目前仅支持桌面端。"],
        ["Use each line for one path", "每行填写一个路径"],
        [
            "Use each line for a new environment variable",
            "每行填写一个新的环境变量",
        ],
    ];
    return fragments.reduce(
        (result, [from, to]) => result.replaceAll(from, to),
        value
    );
}

/** Translate common Obsidian controls created by this plugin. */
export function installUiLocalization(): void {
    const marker = "__obsidianGitZhInstalled";
    const global = window as unknown as Record<string, boolean>;
    if (global[marker]) return;
    global[marker] = true;
    const settingPrototype = Setting.prototype as SettingPrototype;
    const originalName = settingPrototype.setName;
    const originalDesc = settingPrototype.setDesc;
    settingPrototype.setName = function (name: string) {
        return originalName.call(this, t(name));
    };
    settingPrototype.setDesc = function (desc: string) {
        return originalDesc.call(this, t(desc));
    };

    const textPrototype = TextComponent.prototype as TextPrototype;
    const originalPlaceholder = textPrototype.setPlaceholder;
    textPrototype.setPlaceholder = function (placeholder: string) {
        return originalPlaceholder.call(this, t(placeholder));
    };

    const buttonPrototype = ButtonComponent.prototype as ButtonPrototype;
    const originalButtonText = buttonPrototype.setButtonText;
    buttonPrototype.setButtonText = function (text: string) {
        return originalButtonText.call(this, t(text));
    };
}

type SettingPrototype = {
    setName: (this: Setting, name: string) => Setting;
    setDesc: (this: Setting, desc: string) => Setting;
};

type TextPrototype = {
    setPlaceholder: (this: TextComponent, placeholder: string) => TextComponent;
};

type ButtonPrototype = {
    setButtonText: (this: ButtonComponent, text: string) => ButtonComponent;
};
