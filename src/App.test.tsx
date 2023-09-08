/*
 * @Author: Wolf.Ma
 * @Date: 2023-09-07 17:48:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 15:24:52
 * @FilePath: /test-project/src/App.test.tsx
 * @Description:
 */
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
