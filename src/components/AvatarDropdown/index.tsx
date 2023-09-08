/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-17 11:07:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:40:05
 * @FilePath: /test-project/src/components/AvatarDropdown/index.tsx
 * @Description:
 */
import type { FC } from 'react';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useAppSelector } from '@/store/hooks';
import ls from '@/utils/storage';
import { NJOY_TOKEN } from '@/utils/config';
import './index.less';

interface Props {
	menu?: MenuProps['items'];
	overlayClassName?: string;
	placement?:
		| 'bottomLeft'
		| 'bottomRight'
		| 'topLeft'
		| 'topCenter'
		| 'topRight'
		| 'bottomCenter';
}

const AvatarDropdown: FC = ({ menu, overlayClassName, placement }: Props) => {
	const navigate = useNavigate();
	const userInfo = useAppSelector((state) => state.userInfo.info);

	const logoutItem = {
		key: 'logout',
		label: (
			<a className="MenuItem" onClick={logoutHandler}>
				<LogoutOutlined />
				退出登录
			</a>
		),
	};

	const items: MenuProps['items'] = menu?.length ? [...menu, logoutItem] : [logoutItem];

	function logoutHandler() {
		ls.set(NJOY_TOKEN, false);
		navigate('/login');
		// logout().then(() => {
		//   clearUserInfo();
		//   // window.location.replace(process.env.REACT_APP_STATION_URL as string);
		// });
	}

	return (
		<>
			<Dropdown
				menu={{ items }}
				overlayClassName={classnames('avatarDropdown', { overlayClassName })}
				placement={placement || 'bottomLeft'}
			>
				<div className="avatarContainer">
					<Avatar
						size={32}
						className="avatar"
						src={userInfo.avatar}
						icon={<UserOutlined />}
						alt="avatar"
					/>
					<p>{userInfo.nickname}</p>
				</div>
			</Dropdown>
		</>
	);
};

export default AvatarDropdown;
