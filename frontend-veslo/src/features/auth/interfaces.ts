export interface AuthFormDataDto{
  login: string,
  password: string,
};

export interface GetSessionInfoDto {
	id: number;
	login: string;
	iat: number;
	exp: number;
}
