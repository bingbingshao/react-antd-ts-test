/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-17 11:07:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:30:33
 * @FilePath: /test-project/src/components/Header/index.tsx
 * @Description:
 */
import type { FC } from 'react';
import logo from '@/assets/logo.png';
import './index.less';
// 组件
import AvatarDropdown from '@/components/AvatarDropdown';

const Header: FC = () => {
	return (
		<div className="headerContainer">
			<img src={logo} className="appLogo" alt="logo" />
			<div className="rightContent">
				<AvatarDropdown />
			</div>
		</div>
	);
};
export default Header;
