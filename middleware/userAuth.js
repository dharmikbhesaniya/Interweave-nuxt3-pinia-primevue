export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    if (to.path === "/auth/register") return true;
    else {
      if (to.path === "/auth/login") {
        return true;
      }
      return navigateTo("/auth/login");
    }
  } else {
    if (to.path === "/auth/register") return navigateTo("/");
    if (to.path === "/auth/login") return navigateTo("/");
    else return true;
  }
});
