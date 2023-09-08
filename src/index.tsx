/*
 * @Author: Wolf.Ma
 * @Date: 2023-09-07 17:48:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 13:56:01
 * @FilePath: /test-project/src/index.tsx
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import reportWebVitals from './reportWebVitals'; // 设置语言

import Loading from '@/components/loading';
import { store, persistor } from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
