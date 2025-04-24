import { useAuthStore } from "@/store/authStore";
import { authApi } from "@/lib/apiClient/auth";

export const initializeAuth = async () => {
  const setUser = useAuthStore.getState().setUser;
  const setLoading = useAuthStore.getState().setLoading;

  try {
    setLoading(true);
    const user = await authApi.getCurrentUser();
    setUser(user);
  } catch (error) {
    setUser(null);
  } finally {
    setLoading(false);
  }
};

export const isAuthenticated = () => {
  return useAuthStore.getState().isAuthenticated;
};

export const getUser = () => {
  return useAuthStore.getState().user;
};
