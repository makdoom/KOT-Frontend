import BackgroundImage from "@/assets/background.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <div className="w-full max-w-sm m-4 bg-white p-10 shadow-sm">
          <h1 className="font-extrabold text-4xl tracking-wider text-center">
            KOT
          </h1>

          <div className="mt-7 flex flex-col">
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="username">Username</Label>
              <Input
                autoFocus
                type="text"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Username</Label>
              <Input autoFocus type="email" id="email" placeholder="Email" />
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="w-full max-w-sm">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <Button className="mt-6">Signup</Button>
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">
                Already have an account ?{" "}
                <Link to="/" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
