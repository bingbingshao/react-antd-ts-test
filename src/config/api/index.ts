/*
 * @Author: Wolf.Ma
 * @Date: 2023-09-08 14:05:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-08 14:05:21
 * @FilePath: /test-project/src/config/api/index.ts
 * @Description:
 */
import { $post } from '@/utils/axios';

// 用户登录
export async function login(parameter: any): Promise<any> {
	return $post('/user/login', parameter);
}
