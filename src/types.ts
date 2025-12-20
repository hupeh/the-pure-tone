export type AppearanceContent = "light" | "dark";
export type AccentContent = string | null;

/**
 * The background appearance of the window.
 * 窗口的背景外观。
 */
export type WindowBackgroundContent = "opaque" | "transparent" | "blurred";
export type FontStyleContent = "normal" | "italic" | "oblique";

/**
 * The content of a serialized theme family.
 * 序列化主题族的内容。
 */
export interface ThemeFamilyContent {
	$schema: string;
	author: string;
	name: string;
	themes: ThemeContent[];
	[k: string]: unknown;
}

/**
 * The content of a serialized theme.
 * 序列化主题的内容。
 */
export interface ThemeContent {
	appearance: AppearanceContent;
	name: string;
	style: ThemeStyleContent;
	[k: string]: unknown;
}

/**
 * The content of a serialized theme.
 */
export interface ThemeStyleContent {
	"accents"?: AccentContent[];
	/**
	 * Background Color. Used for the app background and blank panels or windows.
	 * 背景颜色。用于应用背景和空白面板或窗口。
	 */
	"background"?: string | null;
	"background.appearance"?: WindowBackgroundContent | null;
	/**
	 * Border color. Used for most borders, is usually a high contrast color.
	 * 边框颜色。用于大多数边框，通常是高对比度颜色。
	 */
	"border"?: string | null;
	/**
	 * Border color. Used for disabled elements, like a disabled input or button.
	 * 边框颜色。用于禁用元素，如禁用的输入框或按钮。
	 */
	"border.disabled"?: string | null;
	/**
	 * Border color. Used for focused elements, like keyboard focused list item.
	 * 边框颜色。用于聚焦元素，如键盘聚焦的列表项。
	 */
	"border.focused"?: string | null;
	/**
	 * Border color. Used for selected elements, like an active search filter or selected checkbox.
	 * 边框颜色。用于选中元素，如活动搜索过滤器或选中的复选框。
	 */
	"border.selected"?: string | null;
	/**
	 * Border color. Used for transparent borders. Used for placeholder borders when an element gains a border on state change.
	 * 边框颜色。用于透明边框。当元素在状态改变时获得边框时用作占位符边框。
	 */
	"border.transparent"?: string | null;
	/**
	 * Border color. Used for deemphasized borders, like a visual divider between two sections
	 * 边框颜色。用于弱化的边框，如两个部分之间的视觉分隔线。
	 */
	"border.variant"?: string | null;
	/**
	 * Indicates some kind of conflict, like a file changed on disk while it was open, or merge conflicts in a Git repository.
	 * 表示某种冲突，如文件在打开时在磁盘上被更改，或 Git 仓库中的合并冲突。
	 */
	"conflict"?: string | null;
	"conflict.background"?: string | null;
	"conflict.border"?: string | null;
	/**
	 * Indicates something new, like a new file added to a Git repository.
	 * 表示新内容，如添加到 Git 仓库的新文件。
	 */
	"created"?: string | null;
	"created.background"?: string | null;
	"created.border"?: string | null;
	/**
	 * Indicates that something no longer exists, like a deleted file.
	 * 表示某些内容不再存在，如被删除的文件。
	 */
	"deleted"?: string | null;
	"deleted.background"?: string | null;
	"deleted.border"?: string | null;
	/**
	 * Background Color. Used for the area that shows where a dragged element will be dropped.
	 * 背景颜色。用于显示拖动元素将被放置位置的区域。
	 */
	"drop_target.background"?: string | null;
	"editor.active_line.background"?: string | null;
	/**
	 * Text Color. Used for the text of the line number in the editor gutter when the line is highlighted.
	 * 文本颜色。用于编辑器行号栏中高亮行的行号文本。
	 */
	"editor.active_line_number"?: string | null;
	"editor.active_wrap_guide"?: string | null;
	"editor.background"?: string | null;
	/**
	 * Highlighted brackets background color.
	 *
	 * Matching brackets in the cursor scope are highlighted with this background color.
	 * 高亮括号背景颜色。
	 *
	 * 光标范围内匹配的括号将使用此背景颜色高亮。
	 */
	"editor.document_highlight.bracket_background"?: string | null;
	/**
	 * Read-access of a symbol, like reading a variable.
	 *
	 * A document highlight is a range inside a text document which deserves special attention. Usually a document highlight is visualized by changing the background color of its range.
	 * 符号的读取访问，如读取变量。
	 *
	 * 文档高亮是文本文档中需要特别关注的范围。通常通过更改其范围的背景颜色来可视化文档高亮。
	 */
	"editor.document_highlight.read_background"?: string | null;
	/**
	 * Write-access of a symbol, like writing a variable.
	 *
	 * A document highlight is a range inside a text document which deserves special attention. Usually a document highlight is visualized by changing the background color of its range.
	 * 符号的写入访问，如写入变量。
	 *
	 * 文档高亮是文本文档中需要特别关注的范围。通常通过更改其范围的背景颜色来可视化文档高亮。
	 */
	"editor.document_highlight.write_background"?: string | null;
	"editor.foreground"?: string | null;
	"editor.gutter.background"?: string | null;
	"editor.highlighted_line.background"?: string | null;
	"editor.indent_guide"?: string | null;
	"editor.indent_guide_active"?: string | null;
	/**
	 * Text Color. Used to mark invisible characters in the editor.
	 *
	 * Example: spaces, tabs, carriage returns, etc.
	 * 文本颜色。用于标记编辑器中的不可见字符。
	 *
	 * 例如：空格、制表符、回车符等。
	 */
	"editor.invisible"?: string | null;
	/**
	 * Text Color. Used for the text of the line number in the editor gutter.
	 * 文本颜色。用于编辑器行号栏中的行号文本。
	 */
	"editor.line_number"?: string | null;
	"editor.subheader.background"?: string | null;
	"editor.wrap_guide"?: string | null;
	/**
	 * Background Color. Used for the active state of an element that should have a different background than the surface it's on.
	 *
	 * Active states are triggered by the mouse button being pressed down on an element, or the Return button or other activator being pressd.
	 * 背景颜色。用于应该具有与其所在表面不同背景的元素的活动状态。
	 *
	 * 活动状态由鼠标按钮按下元素或按下 Return 键或其他激活器触发。
	 */
	"element.active"?: string | null;
	/**
	 * Background Color. Used for the background of an element that should have a different background than the surface it's on.
	 *
	 * Elements might include: Buttons, Inputs, Checkboxes, Radio Buttons...
	 *
	 * For an element that should have the same background as the surface it's on, use `ghost_element_background`.
	 * 背景颜色。用于应该具有与其所在表面不同背景的元素的背景。
	 *
	 * 元素可能包括：按钮、输入框、复选框、单选按钮...
	 *
	 * 对于应该具有与其所在表面相同背景的元素，请使用 `ghost_element_background`。
	 */
	"element.background"?: string | null;
	/**
	 * Background Color. Used for the disabled state of an element that should have a different background than the surface it's on.
	 *
	 * Disabled states are shown when a user cannot interact with an element, like a disabled button or input.
	 * 背景颜色。用于应该具有与其所在表面不同背景的元素的禁用状态。
	 *
	 * 当用户无法与元素交互时显示禁用状态，如禁用的按钮或输入框。
	 */
	"element.disabled"?: string | null;
	/**
	 * Background Color. Used for the hover state of an element that should have a different background than the surface it's on.
	 *
	 * Hover states are triggered by the mouse entering an element, or a finger touching an element on a touch screen.
	 * 背景颜色。用于应该具有与其所在表面不同背景的元素的悬停状态。
	 *
	 * 悬停状态由鼠标进入元素或手指触摸触摸屏上的元素触发。
	 */
	"element.hover"?: string | null;
	/**
	 * Background Color. Used for the selected state of an element that should have a different background than the surface it's on.
	 *
	 * Selected states are triggered by the element being selected (or "activated") by the user.
	 *
	 * This could include a selected checkbox, a toggleable button that is toggled on, etc.
	 * 背景颜色。用于应该具有与其所在表面不同背景的元素的选中状态。
	 *
	 * 选中状态由用户选择（或"激活"）元素触发。
	 *
	 * 这可能包括选中的复选框、切换到打开状态的可切换按钮等。
	 */
	"element.selected"?: string | null;
	/**
	 * Background color. Used for elevated surfaces, like a context menu, popup, or dialog.
	 * 背景颜色。用于悬浮表面，如上下文菜单、弹出窗口或对话框。
	 */
	"elevated_surface.background"?: string | null;
	/**
	 * Indicates a system error, a failed operation or a diagnostic error.
	 * 表示系统错误、失败的操作或诊断错误。
	 */
	"error"?: string | null;
	"error.background"?: string | null;
	"error.border"?: string | null;
	/**
	 * Background Color. Used for the active state of a ghost element that should have the same background as the surface it's on.
	 *
	 * Active states are triggered by the mouse button being pressed down on an element, or the Return button or other activator being pressd.
	 * 背景颜色。用于应该具有与其所在表面相同背景的幽灵元素的活动状态。
	 *
	 * 活动状态由鼠标按钮按下元素或按下 Return 键或其他激活器触发。
	 */
	"ghost_element.active"?: string | null;
	/**
	 * Used for the background of a ghost element that should have the same background as the surface it's on.
	 *
	 * Elements might include: Buttons, Inputs, Checkboxes, Radio Buttons...
	 *
	 * For an element that should have a different background than the surface it's on, use `element_background`.
	 * 用于应该具有与其所在表面相同背景的幽灵元素的背景。
	 *
	 * 元素可能包括：按钮、输入框、复选框、单选按钮...
	 *
	 * 对于应该具有与其所在表面不同背景的元素，请使用 `element_background`。
	 */
	"ghost_element.background"?: string | null;
	/**
	 * Background Color. Used for the disabled state of a ghost element that should have the same background as the surface it's on.
	 *
	 * Disabled states are shown when a user cannot interact with an element, like a disabled button or input.
	 * 背景颜色。用于应该具有与其所在表面相同背景的幽灵元素的禁用状态。
	 *
	 * 当用户无法与元素交互时显示禁用状态，如禁用的按钮或输入框。
	 */
	"ghost_element.disabled"?: string | null;
	/**
	 * Background Color. Used for the hover state of a ghost element that should have the same background as the surface it's on.
	 *
	 * Hover states are triggered by the mouse entering an element, or a finger touching an element on a touch screen.
	 * 背景颜色。用于应该具有与其所在表面相同背景的幽灵元素的悬停状态。
	 *
	 * 悬停状态由鼠标进入元素或手指触摸触摸屏上的元素触发。
	 */
	"ghost_element.hover"?: string | null;
	/**
	 * Background Color. Used for the selected state of a ghost element that should have the same background as the surface it's on.
	 *
	 * Selected states are triggered by the element being selected (or "activated") by the user.
	 *
	 * This could include a selected checkbox, a toggleable button that is toggled on, etc.
	 * 背景颜色。用于应该具有与其所在表面相同背景的幽灵元素的选中状态。
	 *
	 * 选中状态由用户选择（或"激活"）元素触发。
	 *
	 * 这可能包括选中的复选框、切换到打开状态的可切换按钮等。
	 */
	"ghost_element.selected"?: string | null;
	/**
	 * Represents a hidden status, such as a file being hidden in a file tree.
	 * 表示隐藏状态，如文件树中被隐藏的文件。
	 */
	"hidden"?: string | null;
	"hidden.background"?: string | null;
	"hidden.border"?: string | null;
	/**
	 * Indicates a hint or some kind of additional information.
	 * 表示提示或某种附加信息。
	 */
	"hint"?: string | null;
	"hint.background"?: string | null;
	"hint.border"?: string | null;
	/**
	 * Fill Color. Used for the default fill color of an icon.
	 * 填充颜色。用于图标的默认填充颜色。
	 */
	"icon"?: string | null;
	/**
	 * Fill Color. Used for the accent fill color of an icon.
	 *
	 * This might be used to show when a toggleable icon button is selected.
	 * 填充颜色。用于图标的强调填充颜色。
	 *
	 * 这可能用于显示可切换图标按钮被选中时的状态。
	 */
	"icon.accent"?: string | null;
	/**
	 * Fill Color. Used for the disabled fill color of an icon.
	 *
	 * Disabled states are shown when a user cannot interact with an element, like a icon button.
	 * 填充颜色。用于图标的禁用填充颜色。
	 *
	 * 当用户无法与元素交互时显示禁用状态，如图标按钮。
	 */
	"icon.disabled"?: string | null;
	/**
	 * Fill Color. Used for the muted or deemphasized fill color of an icon.
	 *
	 * This might be used to show an icon in an inactive pane, or to demphasize a series of icons to give them less visual weight.
	 * 填充颜色。用于图标的柔和或弱化填充颜色。
	 *
	 * 这可能用于在非活动窗格中显示图标，或弱化一系列图标以减少视觉权重。
	 */
	"icon.muted"?: string | null;
	/**
	 * Fill Color. Used for the placeholder fill color of an icon.
	 *
	 * This might be used to show an icon in an input that disappears when the user enters text.
	 * 填充颜色。用于图标的占位符填充颜色。
	 *
	 * 这可能用于在输入框中显示当用户输入文本时消失的图标。
	 */
	"icon.placeholder"?: string | null;
	/**
	 * Indicates that something is deliberately ignored, such as a file or operation ignored by Git.
	 * 表示某些内容被故意忽略，如被 Git 忽略的文件或操作。
	 */
	"ignored"?: string | null;
	"ignored.background"?: string | null;
	"ignored.border"?: string | null;
	/**
	 * Represents informational status updates or messages.
	 * 表示信息状态更新或消息。
	 */
	"info"?: string | null;
	"info.background"?: string | null;
	"info.border"?: string | null;
	"link_text.hover"?: string | null;
	/**
	 * Indicates a changed or altered status, like a file that has been edited.
	 * 表示更改或修改状态，如已编辑的文件。
	 */
	"modified"?: string | null;
	"modified.background"?: string | null;
	"modified.border"?: string | null;
	"pane.focused_border"?: string | null;
	"pane_group.border"?: string | null;
	"panel.background"?: string | null;
	"panel.focused_border"?: string | null;
	"panel.indent_guide"?: string | null;
	"panel.indent_guide_active"?: string | null;
	"panel.indent_guide_hover"?: string | null;
	"players"?: PlayerColorContent[];
	/**
	 * Indicates something that is predicted, like automatic code completion, or generated code.
	 * 表示预测的内容，如自动代码补全或生成的代码。
	 */
	"predictive"?: string | null;
	"predictive.background"?: string | null;
	"predictive.border"?: string | null;
	/**
	 * Represents a renamed status, such as a file that has been renamed.
	 * 表示重命名状态，如已重命名的文件。
	 */
	"renamed"?: string | null;
	"renamed.background"?: string | null;
	"renamed.border"?: string | null;
	/**
	 * The color of the scrollbar thumb.
	 * 滚动条滑块的颜色。
	 */
	"scrollbar.thumb.background"?: string | null;
	/**
	 * The border color of the scrollbar thumb.
	 * 滚动条滑块的边框颜色。
	 */
	"scrollbar.thumb.border"?: string | null;
	/**
	 * The color of the scrollbar thumb when hovered over.
	 * 鼠标悬停时滚动条滑块的颜色。
	 */
	"scrollbar.thumb.hover_background"?: string | null;
	/**
	 * The background color of the scrollbar track.
	 * 滚动条轨道的背景颜色。
	 */
	"scrollbar.track.background"?: string | null;
	/**
	 * The border color of the scrollbar track.
	 * 滚动条轨道的边框颜色。
	 */
	"scrollbar.track.border"?: string | null;
	"search.match_background"?: string | null;
	"status_bar.background"?: string | null;
	/**
	 * Indicates a successful operation or task completion.
	 * 表示成功的操作或任务完成。
	 */
	"success"?: string | null;
	"success.background"?: string | null;
	"success.border"?: string | null;
	/**
	 * Background Color. Used for grounded surfaces like a panel or tab.
	 * 背景颜色。用于接地表面，如面板或标签页。
	 */
	"surface.background"?: string | null;
	/**
	 * The styles for syntax nodes.
	 * 语法节点的样式。
	 */
	"syntax"?: { [k: string]: HighlightStyleContent };
	"tab.active_background"?: string | null;
	"tab.inactive_background"?: string | null;
	"tab_bar.background"?: string | null;
	/**
	 * Terminal ANSI background color.
	 * 终端 ANSI 背景颜色。
	 */
	"terminal.ansi.background"?: string | null;
	/**
	 * Black ANSI terminal color.
	 * 黑色 ANSI 终端颜色。
	 */
	"terminal.ansi.black"?: string | null;
	/**
	 * Blue ANSI terminal color.
	 * 蓝色 ANSI 终端颜色。
	 */
	"terminal.ansi.blue"?: string | null;
	/**
	 * Bright black ANSI terminal color.
	 * 亮黑色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_black"?: string | null;
	/**
	 * Bright blue ANSI terminal color.
	 * 亮蓝色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_blue"?: string | null;
	/**
	 * Bright cyan ANSI terminal color.
	 * 亮青色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_cyan"?: string | null;
	/**
	 * Bright green ANSI terminal color.
	 * 亮绿色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_green"?: string | null;
	/**
	 * Bright magenta ANSI terminal color.
	 * 亮品红色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_magenta"?: string | null;
	/**
	 * Bright red ANSI terminal color.
	 * 亮红色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_red"?: string | null;
	/**
	 * Bright white ANSI terminal color.
	 * 亮白色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_white"?: string | null;
	/**
	 * Bright yellow ANSI terminal color.
	 * 亮黄色 ANSI 终端颜色。
	 */
	"terminal.ansi.bright_yellow"?: string | null;
	/**
	 * Cyan ANSI terminal color.
	 * 青色 ANSI 终端颜色。
	 */
	"terminal.ansi.cyan"?: string | null;
	/**
	 * Dim black ANSI terminal color.
	 * 暗黑色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_black"?: string | null;
	/**
	 * Dim blue ANSI terminal color.
	 * 暗蓝色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_blue"?: string | null;
	/**
	 * Dim cyan ANSI terminal color.
	 * 暗青色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_cyan"?: string | null;
	/**
	 * Dim green ANSI terminal color.
	 * 暗绿色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_green"?: string | null;
	/**
	 * Dim magenta ANSI terminal color.
	 * 暗品红色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_magenta"?: string | null;
	/**
	 * Dim red ANSI terminal color.
	 * 暗红色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_red"?: string | null;
	/**
	 * Dim white ANSI terminal color.
	 * 暗白色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_white"?: string | null;
	/**
	 * Dim yellow ANSI terminal color.
	 * 暗黄色 ANSI 终端颜色。
	 */
	"terminal.ansi.dim_yellow"?: string | null;
	/**
	 * Green ANSI terminal color.
	 * 绿色 ANSI 终端颜色。
	 */
	"terminal.ansi.green"?: string | null;
	/**
	 * Magenta ANSI terminal color.
	 * 品红色 ANSI 终端颜色。
	 */
	"terminal.ansi.magenta"?: string | null;
	/**
	 * Red ANSI terminal color.
	 * 红色 ANSI 终端颜色。
	 */
	"terminal.ansi.red"?: string | null;
	/**
	 * White ANSI terminal color.
	 * 白色 ANSI 终端颜色。
	 */
	"terminal.ansi.white"?: string | null;
	/**
	 * Yellow ANSI terminal color.
	 * 黄色 ANSI 终端颜色。
	 */
	"terminal.ansi.yellow"?: string | null;
	/**
	 * Terminal background color.
	 * 终端背景颜色。
	 */
	"terminal.background"?: string | null;
	/**
	 * Bright terminal foreground color.
	 * 亮色终端前景颜色。
	 */
	"terminal.bright_foreground"?: string | null;
	/**
	 * Dim terminal foreground color.
	 * 暗色终端前景颜色。
	 */
	"terminal.dim_foreground"?: string | null;
	/**
	 * Terminal foreground color.
	 * 终端前景颜色。
	 */
	"terminal.foreground"?: string | null;
	/**
	 * Text Color. Default text color used for most text.
	 * 文本颜色。用于大多数文本的默认文本颜色。
	 */
	"text"?: string | null;
	/**
	 * Text Color. Color used for emphasis or highlighting certain text, like an active filter or a matched character in a search.
	 * 文本颜色。用于强调或高亮某些文本的颜色，如活动过滤器或搜索中的匹配字符。
	 */
	"text.accent"?: string | null;
	/**
	 * Text Color. Color used for text denoting disabled elements. Typically, the color is faded or grayed out to emphasize the disabled state.
	 * 文本颜色。用于表示禁用元素的文本颜色。通常，颜色会褪色或变灰以强调禁用状态。
	 */
	"text.disabled"?: string | null;
	/**
	 * Text Color. Color of muted or deemphasized text. It is a subdued version of the standard text color.
	 * 文本颜色。柔和或弱化文本的颜色。它是标准文本颜色的柔和版本。
	 */
	"text.muted"?: string | null;
	/**
	 * Text Color. Color of the placeholder text typically shown in input fields to guide the user to enter valid data.
	 * 文本颜色。通常在输入框中显示的占位符文本的颜色，用于引导用户输入有效数据。
	 */
	"text.placeholder"?: string | null;
	"title_bar.background"?: string | null;
	"title_bar.inactive_background"?: string | null;
	"toolbar.background"?: string | null;
	/**
	 * Indicates some kind of unreachable status, like a block of code that can never be reached.
	 * 表示某种不可达状态，如永远无法到达的代码块。
	 */
	"unreachable"?: string | null;
	"unreachable.background"?: string | null;
	"unreachable.border"?: string | null;
	/**
	 * Represents a warning status, like an operation that is about to fail.
	 * 表示警告状态，如即将失败的操作。
	 */
	"warning"?: string | null;
	"warning.background"?: string | null;
	"warning.border"?: string | null;
	[k: string]: unknown;
}

export interface PlayerColorContent {
	background?: string | null;
	cursor?: string | null;
	selection?: string | null;
	[k: string]: unknown;
}

export interface HighlightStyleContent {
	background_color?: string | null;
	color?: string | null;
	font_style?: FontStyleContent | null;
	font_weight?: (100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900) | null;
	[k: string]: unknown;
}
