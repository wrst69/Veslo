import { SessionEntity } from "@/entities/user/_domain/types";
import { IAuthFormData, IUser } from "./model/types"

interface IAuthResponse {
	accessToken: string
	user: IUser
}

const API_URL = 'http://localhost:3003';

class AuthRepository {
	async signIn(data: IAuthFormData) {
		const response = await fetch(`${API_URL}/auth/sign-in`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			credentials: 'include'
		});
        
		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса');
		}
		
		//const responseData: IAuthResponse = await response.json();
        
		//return responseData;
	};

	async getProfile() {
		const response = await fetch(`${API_URL}/auth/profile`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			//body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса');
		}

		const session: SessionEntity = await response.json();
		
		return session;	
	};

	/* async register(data: IFormData): Promise<IAuthResponse> {
		const response = await fetch(`${API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	} */

	async profile(): Promise<IUser> {
		const token = localStorage.getItem('token')

		const response = await fetch(`${API_URL}/auth/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса');
		}

		const responseData: IUser = await response.json();
		return responseData;
	};

	/* async users(): Promise<IUser[]> {
		const token = localStorage.getItem('token')

		const response = await fetch(`${API_URL}/auth/users`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		if (!response.ok) {
			throw new Error('Ошибка при выполнении запроса')
		}

		const responseData: IUser[] = await response.json()
		return responseData
	} */
}

export const authRepository = new AuthRepository();