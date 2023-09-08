/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-17 11:07:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:29:51
 * @FilePath: /test-project/src/components/Menu/index.tsx
 * @Description:
 */
import { Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setMenus } from '@/store/features/userInfoSlice';
import { store } from '@/store';
import { routes } from '@/config/routes';
import './index.less';

type MenuItem = Required<MenuProps>['items'][number];

type menuProps = {
	collapsed?: boolean;
};

const SideMenu: FC<menuProps> = (props) => {
	const navigateTo = useNavigate();
	const currentRoute = useLocation();
	const { collapsed = false }: any = props;
	const [items, setItems] = useState<MenuItem[]>([]);
	/**
	 * 处理菜单数据 用于显示菜单栏
	 * 最多只有三层 第一层不处理
	 */
	useEffect(() => {
		let tempItems: any = [];
		if (routes && routes.length > 0) {
			routes.forEach((el: any) => {
				// 第一层数据
				if (el.children) {
					// 是否有子项
					el.children.forEach((it: any) => {
						let tempObject: any = {};
						// 第二层
						if (it.isMenu) {
							// 是否菜单
							tempObject = {
								label: it.name,
								key: it.path,
								icon: it.icon,
							};
						}
						if (it.children) {
							tempObject.children = [];

							// 是否有子项
							it.children.forEach((item: any) => {
								// 第三层
								if (item.isMenu) {
									// 是否菜单
									tempObject.children.push({
										label: item.name,
										key: item.path,
										icon: item.icon,
									});
								}
							});
						}
						if (tempObject.label) {
							tempItems.push(tempObject);
						}
					});
				}
			});
		}
		setItems(tempItems);
	}, [routes]);

	/**
	 * 处理菜单数据 用于显示面包屑
	 */
	useEffect(() => {
		let menus: any[] = [];
		if (routes && routes.length > 0) {
			routes.forEach((el: any) => {
				// 第一层数据
				if (!el.children) {
					menus[el.path] = [el];
				} else {
					el.children.forEach((it: any) => {
						// 第二层数据
						menus[it.path] = [it];
						if (it.children) {
							it.children.forEach((item: any) => {
								menus[item.path] = [it, item];
							});
						}
					});
				}
			});
		}
		store.dispatch(setMenus(menus));
	}, [routes]);

	// 菜单点击
	const menuClick = (e: { key: string }) => {
		navigateTo(e.key);
	};

	//拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比,如果找到了相等,
	//就要他上一级的key,这个key给到openKeys数组的元素，作为初始值
	let firstOpenKey = '';
	function findKey(obj: { key: string }) {
		return obj.key === currentRoute.pathname;
	}
	// 对比的是多个children
	function findFirstOpenKey() {
		for (let i = 0; i < items.length; i++) {
			let itemT: any = items[i];
			if (
				itemT!['children'] &&
				itemT!['children'].length > 0 &&
				itemT!['children'].find(findKey)
			) {
				firstOpenKey = itemT!.key as string;
				break;
			}
		}
	}
	//设置展开项的初始值
	const [openKeys, setOpenKeys] = useState([firstOpenKey]);
	const handleOpenChange = (keys: string[]) => {
		setOpenKeys([keys[keys.length - 1]]);
	};

	useEffect(() => {
		findFirstOpenKey();
		setOpenKeys([firstOpenKey]);
	}, [currentRoute.pathname, items]);

	return (
		<Menu
			className="sider-menu"
			selectedKeys={[currentRoute.pathname]}
			mode="inline"
			theme="light"
			items={items}
			onClick={menuClick}
			onOpenChange={handleOpenChange}
			openKeys={openKeys}
		/>
	);
};
export default SideMenu;
