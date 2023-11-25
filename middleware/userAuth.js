export default defineNuxtRouteMiddleware((to, from) => {
  const token = true;

  if (!token) {
    if (to.path === "/auth/login" || to.path === "/auth/register") return true;
    return navigateTo("/auth/login");
  } else {
    if (to.path === "/auth/register" || to.path === "/auth/login")
      return navigateTo("/");
    return true;
  }
});
