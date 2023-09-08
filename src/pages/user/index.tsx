/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:26:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 10:47:04
 * @FilePath: /test-project/src/pages/user/index.tsx
 * @Description:
 */
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

const User: React.FC = () => {
	const navigate = useNavigate();
	const jumpPage = () => {
		navigate('/home');
	};

	return (
		<div className="home">
			<h1>{'个人中心'}</h1>
			<Button type="primary" className="button" onClick={() => jumpPage()}>
				{'首页'}
			</Button>
		</div>
	);
};

export default User;
