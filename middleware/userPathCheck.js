export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return navigateTo("/");
  } else {
    if(from.path === '/user/register' && to.path === '/user/register/otp') return true;
    else if(from.path === '/user/register/otp' && to.path === '/user/register/details') return true;
    else if(from.path === '/user/register/details' && to.path === '/user/register/username') return true;
    else if(from.path === '/user/register/username' && to.path === '/user/register/bio') return true;
    else if(to.path === '/user/login') return true;
    else if(to.path === '/user/register') return true;
    else return false;
  }
});
