import { zodResolver } from "@hookform/resolvers/zod";

import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignupSchema } from "@/schemas/authSchema";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type SignupFormType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<SignupFormType>({
    mode: "onBlur",
    resolver: zodResolver(SignupSchema),
  });

  const passwordInputToggle = (isPassword: boolean) => {
    isPassword
      ? setPasswordInputType((prev) =>
          prev === "password" ? "text" : "password",
        )
      : setConfirmPasswordInputType((prev) =>
          prev === "password" ? "text" : "password",
        );
  };
  // passwordInputType === "password"
  //   ? setPasswordInputType("text")
  //   : setPasswordInputType("password");

  const onSubmit = (data: SignupFormType) => {
    console.log(data);
  };

  return (
    <div className="w-screen h-screen flex gap-2 bg-[#f8fafc]">
      <div className="flex-[0.4] hidden md:block">
        <div className="rounded-tr-3xl rounded-br-3xl h-full">
          <img
            src={BackgroundImage}
            alt="background"
            className="h-full w-full object-cover rounded-tr-[70px] rounded-br-[70px]"
          />
        </div>
      </div>

      <div className="flex-1 md:flex-[0.6] flex justify-center items-center">
        <div className="w-full max-w-md m-4 p-2 md:p-10">
          <h1 className="font-extrabold text-4xl tracking-wider text-center">
            KOT
          </h1>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 flex flex-col"
          >
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="username">Username</Label>
              <Input
                autoFocus
                type="text"
                id="username"
                placeholder="Username"
                className="h-11"
                {...register("username")}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.username?.message}
              </p>
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="h-11"
                {...register("email")}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="password">Password</Label>
              <Input
                type={passwordInputType}
                id="password"
                placeholder="Password"
                className="h-11"
                icon={{
                  placement: "end",
                  component:
                    passwordInputType === "password" ? (
                      <EyeOff
                        size={19}
                        className="text-muted-foreground"
                        onClick={() => passwordInputToggle(true)}
                      />
                    ) : (
                      <Eye
                        size={19}
                        className="text-muted-foreground"
                        onClick={() => passwordInputToggle(true)}
                      />
                    ),
                }}
                {...register("password")}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <div className="w-full max-w-sm">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type={confirmPasswordInputType}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="h-11"
                icon={{
                  placement: "end",
                  component:
                    confirmPasswordInputType === "password" ? (
                      <EyeOff
                        size={19}
                        className="text-muted-foreground"
                        onClick={() => passwordInputToggle(false)}
                      />
                    ) : (
                      <Eye
                        size={19}
                        className="text-muted-foreground"
                        onClick={() => passwordInputToggle(false)}
                      />
                    ),
                }}
                {...register("confirmPassword")}
              />
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <Button
              disabled={!isDirty || !isValid || isSubmitting}
              type="submit"
              className="mt-8 max-w-sm"
              size="xl"
            >
              Signup
            </Button>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">
                Already have an account ?{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
