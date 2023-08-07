import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm: React.FC = () => {
  const { registerAccount } = useAuth();
  const navigate = useNavigate();

  const schema = z
    .object({
      email: z.string().email({ message: "Must be a valid email" }),
      password: z.string().min(8, { message: "Must be at least 8 characters" }),
      confirmPassword: z
        .string()
        .min(8, { message: "Must be at least 8 characters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerAccount(data.email, data.password);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  return (
    <form
      className="flex flex-col shadow-lg p-12 rounded-md gap-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-3xl font-bold mb-4">Register Page</h1>
      <input
        className="input input-bordered"
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        className="input input-bordered"
        type="password"
        {...register("password", { required: true })}
        placeholder="Password"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <input
        className="input input-bordered"
        type="password"
        {...register("confirmPassword", { required: true })}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && (
        <span className="text-red-500">{errors.confirmPassword.message}</span>
      )}
      <a href="/login" className="text-blue-500 text-center hover:underline">
        Already have an account?
      </a>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
};
