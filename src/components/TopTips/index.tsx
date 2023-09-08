/*
 * @Author: Wolf.Ma
 * @Date: 2023-04-20 15:52:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-20 15:54:53
 * @FilePath: /njoy-cli-template-unceiling/src/components/TopTips/index.tsx
 * @Description:
 */
import React from 'react';
import './index.less';

type topTipsProps = {
	title?: string;
};

const TopTips: React.FC<topTipsProps> = (props) => {
	const { title } = props;

	return (
		<div className="top-tips">
			<span>{title}</span>
		</div>
	);
};

export default TopTips;
