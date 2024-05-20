import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex gap-2 bg-[#f8fafc]">
      <div className="flex-1 md:flex-[0.6] flex justify-center items-center">
        <div className="w-full max-w-sm m-4 bg-white p-10 shadow-sm">
          <h1 className="font-extrabold text-4xl tracking-wider text-center">
            KOT
          </h1>

          <div className="mt-7 flex flex-col">
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Username</Label>
              <Input autoFocus type="email" id="email" placeholder="Username" />
            </div>
            <div className="w-full max-w-sm">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="text-right mt-2">
              <Link to="/singup" tabIndex={-1} className="text-blue-500 text-sm text-right">
                Forgot Password ?
              </Link>
            </div>

            <Button className="mt-6">Login</Button>
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
