export const routes = {
  auth: {
    login: "/auth/login",
    verifyRegistration: (token: string) =>
      `/auth/verify-registration?token=${token}`,
    resetPassword: (token: string) => `/auth/reset-password?token=${token}`,
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
  },
  home: "/",
};
