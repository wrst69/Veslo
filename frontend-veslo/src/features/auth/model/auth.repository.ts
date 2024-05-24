import { AuthFormDataDto, GetSessionInfoDto } from "./dto"
import { axiosInstance } from "@/shared/api/axios";

class AuthRepository {
	signIn = async (data: AuthFormDataDto) => await axiosInstance.post('/auth/sign-in', data);

	signOut = async () => await axiosInstance.post('/auth/sign-out');

	getSessionInfo = async ():Promise<GetSessionInfoDto> => await axiosInstance.get('/auth/session').then((res) => res.data);
}

export const authRepository = new AuthRepository();
