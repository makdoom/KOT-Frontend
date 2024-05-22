import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgotPasswordSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type ForgotPasswordType = { email: string };

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<ForgotPasswordType>({
    mode: "onBlur",
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordType) => console.log(data);

  return (
    <div className="w-screen h-screen flex gap-2 bg-[#f8fafc]">
      <div className="flex-1 md:flex-[0.6] flex justify-center items-center">
        <div className="w-full max-w-md m-4 p-0 md:p-10">
          <h1 className="font-extrabold text-2xl tracking-wider text-center">
            Trouble Logging In ?
          </h1>
          <p className="mt-2 text-center text-muted-foreground text-sm">
            Enter your email and we will send you <br /> a link to get back into
            your account
          </p>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 flex flex-col"
          >
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                autoFocus
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

            <Button
              disabled={!isDirty || !isValid || isSubmitting}
              size="xl"
              className="mt-4"
              type="submit"
            >
              Reset Password
            </Button>

            <div className="mt-3">
              <p className="text-sm text-center text-muted-foreground">
                Return to{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
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
export default ForgotPassword;
