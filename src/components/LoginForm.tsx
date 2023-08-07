import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { loginAccount } = useAuth();

  const schema = z.object({
    email: z.string().email({ message: "Must be a valid email" }),
    password: z.string().min(8, { message: "Must be at least 8 characters" }),
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
      await loginAccount(data.email, data.password);
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  });

  return (
    <form
      className="flex flex-col shadow-lg p-12 rounded-md gap-4"
      onSubmit={onSubmit}
    >
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input
        className="input input-bordered"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        className="input border input-bordered"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <a href="/register" className="text-blue-500 text-center hover:underline">
        Don't have an account?
      </a>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};
