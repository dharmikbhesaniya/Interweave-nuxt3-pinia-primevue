import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", () => {
  const token = localStorage.getItem("nuxt-color-mode");
  const checkToken = () => {
    console.log("token", token);
  };
  return { token, checkToken };
});
