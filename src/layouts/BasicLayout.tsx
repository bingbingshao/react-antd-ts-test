/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:12:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:18:06
 * @FilePath: /test-project/src/layouts/BasicLayout.tsx
 * @Description:   基本布局
 */
import { Layout } from 'antd';
import type { FC } from 'react';

import './BasicLayout.less';
import RouterBeforeEach from '@/config/routes/RouterBeforeEach';
const { Content } = Layout;

const BasicLayout: FC = () => {
	// const currentYear = new Date().getFullYear();

	return (
		<Layout className="basiclayout">
			<Content className="content">
				<RouterBeforeEach />
			</Content>
			{/* <Footer className="footer">©{currentYear} 乐推网络科技有限公司</Footer> */}
		</Layout>
	);
};

export default BasicLayout;
