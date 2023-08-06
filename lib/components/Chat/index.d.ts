import React from 'react';
import { ConfigContextType } from '../ConfigProvider';
import { NavbarProps } from '../Navbar';
import { MessageContainerProps, MessageContainerHandle } from '../MessageContainer';
import { QuickReplyItemProps } from '../QuickReplies';
import { ComposerProps, ComposerHandle } from '../Composer';
export type ChatProps = Omit<ComposerProps, 'onFocus' | 'onChange' | 'onBlur'> & ConfigContextType & MessageContainerProps & {
    /**
     * 宽版模式断点
     */
    /**
     * ——————> 自定义修改：决定是否渲染 Composer 组件的属性 <——————
     */
    inputable?: boolean;
    /**
     * ———————> 自定义修改：安全区高度 <——————
     */
    safetyAreaHeight?: number;
    /**
     * 导航栏配置
     */
    navbar?: NavbarProps;
    /**
     * 导航栏渲染函数
     */
    renderNavbar?: () => React.ReactNode;
    /**
     * 加载更多文案
     */
    /**
     * 在消息列表上面的渲染函数
     */
    /**
     * 消息列表 ref
     */
    messagesRef?: React.RefObject<MessageContainerHandle>;
    /**
     * 下拉加载回调
     */
    /**
     * 滚动消息列表回调
     */
    /**
     * 消息列表
     */
    /**
     * 消息内容渲染函数
     */
    /**
     * 快捷短语
     */
    quickReplies?: QuickReplyItemProps[];
    /**
     * 快捷短语是否可见
     */
    quickRepliesVisible?: boolean;
    /**
     * 快捷短语的点击回调
     */
    onQuickReplyClick?: (item: QuickReplyItemProps, index: number) => void;
    /**
     * 快捷短语的滚动回调
     */
    onQuickReplyScroll?: () => void;
    /**
     * 快捷短语渲染函数
     */
    renderQuickReplies?: () => void;
    /**
     * 输入区 ref
     */
    composerRef?: React.RefObject<ComposerHandle>;
    /**
     * 输入框初始内容
     */
    /**
     * 输入框占位符
     */
    /**
     * 输入框聚焦回调
     */
    onInputFocus?: ComposerProps['onFocus'];
    /**
     * 输入框更新回调
     */
    onInputChange?: ComposerProps['onChange'];
    /**
     * 输入框失去焦点回调
     */
    onInputBlur?: ComposerProps['onBlur'];
    /**
     * 发送消息回调
     */
    /**
     * 发送图片回调
     */
    /**
     * 输入方式
     */
    /**
     * 输入方式切换回调
     */
    /**
     * 语音输入
     */
    /**
     * 工具栏
     */
    /**
     * 点击工具栏回调
     */
    /**
     * 点击附加内容回调
     */
    /**
     * 输入组件
     */
    Composer?: React.ElementType;
};
export declare const Chat: React.ForwardRefExoticComponent<Omit<ComposerProps, "onFocus" | "onBlur" | "onChange"> & ConfigContextType & MessageContainerProps & {
    /**
     * 宽版模式断点
     */
    /**
     * ——————> 自定义修改：决定是否渲染 Composer 组件的属性 <——————
     */
    inputable?: boolean | undefined;
    /**
     * ———————> 自定义修改：安全区高度 <——————
     */
    safetyAreaHeight?: number | undefined;
    /**
     * 导航栏配置
     */
    navbar?: NavbarProps | undefined;
    /**
     * 导航栏渲染函数
     */
    renderNavbar?: (() => React.ReactNode) | undefined;
    /**
     * 加载更多文案
     */
    /**
     * 在消息列表上面的渲染函数
     */
    /**
     * 消息列表 ref
     */
    messagesRef?: React.RefObject<MessageContainerHandle> | undefined;
    /**
     * 下拉加载回调
     */
    /**
     * 滚动消息列表回调
     */
    /**
     * 消息列表
     */
    /**
     * 消息内容渲染函数
     */
    /**
     * 快捷短语
     */
    quickReplies?: QuickReplyItemProps[] | undefined;
    /**
     * 快捷短语是否可见
     */
    quickRepliesVisible?: boolean | undefined;
    /**
     * 快捷短语的点击回调
     */
    onQuickReplyClick?: ((item: QuickReplyItemProps, index: number) => void) | undefined;
    /**
     * 快捷短语的滚动回调
     */
    onQuickReplyScroll?: (() => void) | undefined;
    /**
     * 快捷短语渲染函数
     */
    renderQuickReplies?: (() => void) | undefined;
    /**
     * 输入区 ref
     */
    composerRef?: React.RefObject<ComposerHandle> | undefined;
    /**
     * 输入框初始内容
     */
    /**
     * 输入框占位符
     */
    /**
     * 输入框聚焦回调
     */
    onInputFocus?: ComposerProps['onFocus'];
    /**
     * 输入框更新回调
     */
    onInputChange?: ComposerProps['onChange'];
    /**
     * 输入框失去焦点回调
     */
    onInputBlur?: ComposerProps['onBlur'];
    /**
     * 发送消息回调
     */
    /**
     * 发送图片回调
     */
    /**
     * 输入方式
     */
    /**
     * 输入方式切换回调
     */
    /**
     * 语音输入
     */
    /**
     * 工具栏
     */
    /**
     * 点击工具栏回调
     */
    /**
     * 点击附加内容回调
     */
    /**
     * 输入组件
     */
    Composer?: React.ElementType<any> | undefined;
} & React.RefAttributes<HTMLDivElement>>;
