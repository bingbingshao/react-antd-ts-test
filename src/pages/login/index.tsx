/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:26:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:34:01
 * @FilePath: /test-project/src/pages/login/index.tsx
 * @Description:
 */
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.less';
import { store } from '@/store';
import { setUserInfo } from '@/store/features/userInfoSlice';
// import { login } from "@/config/api"; // 引入接口
import { NJOY_TOKEN } from '@/utils/config';
import ls from '@/utils/storage';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const jumpPage = async () => {
		//   const res: any = await login({}); // 调用接口
		// console.log("res", res);
		// 写入数据
		store.dispatch(
			setUserInfo({
				name: 'wolf.ma',
				phone: '13381765960',
				nickname: 'wolf',
				avatar: 'wolf.png',
			})
		);
		ls.set(NJOY_TOKEN, 'shaobing');
		navigate('/home');
	};

	return (
		<div className="home">
			<h1>{'登录'}</h1>
			<Button type="primary" className="button" onClick={() => jumpPage()}>
				{'登录'}
			</Button>
		</div>
	);
};

export default Login;
