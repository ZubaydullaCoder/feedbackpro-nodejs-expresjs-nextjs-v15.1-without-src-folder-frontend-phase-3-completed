import axios from "axios";
import { toast } from "@/hooks/use-toast";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookie handling
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "An error occurred";
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
    });
    throw error;
  }
);

export default apiClient;
