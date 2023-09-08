/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-17 11:22:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:25:45
 * @FilePath: /test-project/src/layouts/MainLayout.tsx
 * @Description:
 */

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import HeadTop from '@/components/Header';
import SideMenu from '@/components/Menu';
import NjoyBreadcrumb from '@/components/NjoyBreadcrumb';
import RouterBeforeEach from '@/config/routes/RouterBeforeEach';
import { themeConfig } from '@/config/style/themeConfig';

import './MainLayout.less';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const [collapsed, setCollapsed] = useState(false);

	// 修改布局
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout className={'mainLayout'}>
			<Header className={'header'}>
				<HeadTop />
			</Header>
			<Layout>
				<Sider
					width={208}
					collapsedWidth={50}
					className={classNames('sider', { padding0: collapsed })}
					collapsed={collapsed}
				>
					<SideMenu collapsed={collapsed} />
					<div className="collapsed" onClick={toggleCollapsed}>
						{collapsed ? (
							<MenuUnfoldOutlined style={{ color: themeConfig.token.colorPrimary }} />
						) : (
							<MenuFoldOutlined style={{ color: themeConfig.token.colorPrimary }} />
						)}
					</div>
				</Sider>
				<Layout className={'layoutContent'}>
					<NjoyBreadcrumb />
					<Content className={'content'}>
						<RouterBeforeEach />
					</Content>
					<Footer className={'footer'}>©{currentYear} 乐推网络科技有限公司</Footer>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
