/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-13 19:21:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:32:05
 * @FilePath: /test-project/src/config/routes/index.tsx
 * @Description:
 */
import { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

//layout
import BasicLayout from '@/layouts/BasicLayout';
import MainLayout from '@/layouts/MainLayout';
import Loading from '@/components/loading';

import Login from '@/pages/login/index';
import NotFoundPage from '@/pages/404';
const Home = lazy(() => import('@/pages/home'));
const User = lazy(() => import('@/pages/user'));

// 上层加载
const lazyComponent = (element: JSX.Element) => {
	return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

const baseRoutes: any = [
	{
		path: '/login',
		auth: false, // 是否需要登录
		element: <BasicLayout />,
		children: [
			{
				path: '/login',
				auth: false, // 是否需要登录
				element: <>{lazyComponent(<Login />)}</>,
			},
		],
	},
];

const layoutRoutes: any = [
	{ path: '/', element: <Navigate to="/home" /> },
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/home',
				name: '首页',
				auth: true, // 是否需要登录
				icon: <HomeOutlined className="menu-icon" />, // 菜单栏图标
				isMenu: true, // 是否菜单栏显示
				element: <>{lazyComponent(<Home />)}</>,
			},
			{
				path: '/user',
				name: '个人中心',
				auth: true, // 是否需要登录
				icon: <UserOutlined className="menu-icon" />,
				isMenu: true, // 是否菜单栏显示
				element: <>{lazyComponent(<User />)}</>,
			},
			{ path: '*', element: <Navigate to="/404" /> },
			{
				path: '/404',
				element: (
					<>
						<NotFoundPage />
					</>
				),
			},
		],
	},
];

export const routes: any = [
	...baseRoutes,
	...layoutRoutes,
	{ path: '*', element: <Navigate to="/404" /> },
	{
		path: '/404',
		element: (
			<>
				<NotFoundPage />
			</>
		),
	},
];

function Router() {
	return useRoutes(routes);
}

//根据路径获取路由
const checkAuth = (routers: any, path: String) => {
	for (const data of routers) {
		if (data.path === path) return data;
		if (data.children) {
			const res: any = checkAuth(data.children, path);
			if (res) return res;
		}
	}
	return null;
};

const checkRouterAuth = (path: string) => {
	let auth = null;
	auth = checkAuth(routes, path);
	return auth;
};

export default Router;
export { checkRouterAuth };
