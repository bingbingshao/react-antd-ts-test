/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:26:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 13:59:57
 * @FilePath: /test-project/src/pages/home/index.tsx
 * @Description:
 */
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.less';
import { useAppSelector } from '@/store/hooks';

const Home: React.FC = () => {
	// 读取数据
	const userInfo = useAppSelector((state) => state.userInfo.info);
	const navigate = useNavigate();
	console.log('userInfo', userInfo);
	const jumpPage = () => {
		navigate('/user');
	};

	return (
		<div className="home">
			<h1>{'首页'}</h1>
			<h1>{userInfo.name}</h1>
			<Button type="primary" className="button" onClick={() => jumpPage()}>
				{'个人中心'}
			</Button>
		</div>
	);
};

export default Home;
