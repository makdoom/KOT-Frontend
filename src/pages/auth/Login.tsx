import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="w-screen h-screen flex gap-2 bg-[#f8fafc]">
      <div className="flex-1 md:flex-[0.6] flex justify-center items-center">
        <div className="w-full max-w-md m-4 p-2 md:p-10">
          <h1 className="font-extrabold text-4xl tracking-wider text-center">
            KOT
          </h1>

          <div className="mt-7 ">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <div className="w-full  max-w-sm  mb-6">
                <Label htmlFor="username">Username</Label>
                <Input
                  autoFocus
                  type="username"
                  id="username"
                  placeholder="Username"
                  className="h-11"
                  {...register("username")}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.username?.message}
                </p>
              </div>
              <div className="w-full  max-w-sm ">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="h-11"
                  {...register("password")}
                />
                <p className="mt-1 text-sm text-red-500">
                  {errors.password?.message}
                </p>
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/forgot-password"
                  tabIndex={-1}
                  className="text-blue-500 text-sm text-right"
                >
                  Forgot Password ?
                </Link>
              </div>

              <Button
                disabled={!isDirty || !isValid || isSubmitting}
                className="mt-6"
                size="xl"
                type="submit"
              >
                Login
              </Button>
            </form>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">
                Don't have an account ?{" "}
                <Link to="/signup" className="text-blue-500">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.4] hidden md:block">
        <div className="rounded-tl-3xl rounded-bl-3xl h-full">
          <img
            src={BackgroundImage}
            alt="background"
            className="h-full w-full object-cover rounded-tl-[70px] rounded-bl-[70px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
