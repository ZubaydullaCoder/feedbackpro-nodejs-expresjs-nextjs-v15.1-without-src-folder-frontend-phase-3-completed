import { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register - FeedbackPro",
  description: "Create your FeedbackPro account",
};

export default function RegisterPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Start collecting valuable customer feedback today
        </p>
      </div>
      <RegisterForm />
    </>
  );
}
