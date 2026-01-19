export const routes = {
  auth: {
    login: "/auth/login",
    verifyRegistration: (token: string) =>
      `/auth/verify-registration?token=${token}`,
    resetPassword: (token: string) => `/auth/reset-password?token=${token}`,
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
  },
  allChats: "/",
  newGroup: new URLSearchParams("new-group=true"),
  newContact: new URLSearchParams("new-contact=true"),
  contacts: new URLSearchParams("contacts=true"),
  archivedChats: "/archive",
};
