/*
 * @Author: Wolf.Ma
 * @Date: 2023-09-07 17:48:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 11:57:19
 * @FilePath: /test-project/src/App.tsx
 * @Description:
 */
import '@/App.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import { BrowserRouter } from 'react-router-dom';

import Router from '@/config/routes';
import { themeConfig } from '@/config/style/themeConfig';

dayjs.locale('zh-cn');

function App() {
	return (
		<ConfigProvider locale={zhCN} theme={themeConfig}>
			<BrowserRouter>
				{/* The rest of your app goes here */}
				<Router />
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
