import { baseApi } from "@/lib/axios";

export const Login = async (email: string, password: string) => {
  return await baseApi.post("auth/login", {
    email,
    password,
  });
};
