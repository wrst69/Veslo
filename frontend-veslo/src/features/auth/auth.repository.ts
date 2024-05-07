import { AuthFormDataDto, GetSessionInfoDto } from "./interfaces"
import { axiosInstance } from "@/shared/api/axios";



class AuthRepository {
	signIn = async (data: AuthFormDataDto) => await axiosInstance.post('/auth/sign-in', data);

	getSessionInfo = async ():Promise<GetSessionInfoDto> => await axiosInstance.get('/auth/session').then((res) => res.data);
}

export const authRepository = new AuthRepository();