/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-18 10:11:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-23 10:16:47
 * @FilePath: /njoy-cli-template-ceiling/src/components/NjoyBreadcrumb/index.tsx
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, NavLink } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import './index.less';

const NjoyBreadcrumb: React.FC = () => {
	const menus = useAppSelector((state) => state.userInfo.menus);
	const history = useLocation();
	const [breadcrumbMeuns, setBreadcrumbMeuns] = useState<any>();

	/**
	 * 处理历史信息
	 */
	useEffect(() => {
		const tempArray = menus[history.pathname];
		setBreadcrumbMeuns(tempArray);
	}, [history, menus]);

	return (
		<div className="n-breadcrumb">
			<div className="breadcrumb">
				<Breadcrumb>
					<Breadcrumb.Item>
						<NavLink className={'last-color'} to="/home">
							首页
						</NavLink>
					</Breadcrumb.Item>
					{breadcrumbMeuns &&
						breadcrumbMeuns.length > 0 &&
						breadcrumbMeuns.map((item: any, index: number) => {
							if (item.path === '/home') return;
							return (
								<Breadcrumb.Item>
									<NavLink
										className={
											breadcrumbMeuns.length - 1 === index
												? 'last-color-active'
												: 'last-color'
										}
										to={item.path}
									>
										{item.name}
									</NavLink>
								</Breadcrumb.Item>
							);
						})}
				</Breadcrumb>
			</div>
		</div>
	);
};

export default NjoyBreadcrumb;
