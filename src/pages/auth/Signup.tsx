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
        <div className="w-full max-w-md m-4 p-10 ">
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
                className="h-11"
              />
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="email">Username</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="h-11"
              />
            </div>
            <div className="w-full max-w-sm mb-6">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="h-11"
              />
            </div>
            <div className="w-full max-w-sm">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="h-11"
              />
            </div>

            <Button className="mt-8" size="lg">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
