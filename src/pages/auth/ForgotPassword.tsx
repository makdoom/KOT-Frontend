import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleResetPassword = () => console.log("hello");

  return (
    <div className="w-screen h-screen flex gap-2 bg-[#f8fafc]">
      <div className="flex-1 md:flex-[0.6] flex justify-center items-center">
        <div className="w-full max-w-md m-4 p-10">
          <h1 className="font-extrabold text-2xl tracking-wider text-center">
            Trouble Logging In ?
          </h1>
          <p className="mt-2 text-center text-muted-foreground text-sm">
            Enter your email and we will send you <br /> a link to get back into
            your account
          </p>

          <div className="mt-7 flex flex-col">
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                autoFocus
                type="email"
                id="email"
                placeholder="Email"
                className="h-11"
              />
            </div>

            <Button size="lg" className="mt-4" onClick={handleResetPassword}>
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
export default ForgotPassword;
