import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorText from "@/components/ui/ErrorText";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignUp } from "@/services/firebase";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

function SignupCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<SignupData>();

  const handleSignup = (data: SignupData) => {
    try {
      SignUp(data.email, data.password);
    } catch (error) {
      const firebaseError = error as { code?: string; message: string };
      if (firebaseError.code === "auth/invalid-credential") {
        setError("email", {
          type: "manual",
          message: "Email atau password salah.",
        });
        setError("password", {
          type: "manual",
          message: "Email atau password salah.",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Terjadi kesalahan. Silakan coba lagi.",
        });
      }
    }
  };

  const password = watch("password");

  return (
    <Card className="w-full max-w-sm">
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col gap-6"
      >
        <CardHeader>
          <CardTitle>Bikin Akun Di Sini Guys</CardTitle>
          <CardDescription>
            Masukin email dan password baru di bawah untuk membuat akun
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link to={"/login"}>Login</Link>
            </Button>
          </CardAction>
        </CardHeader>{" "}
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="ahmad@sahroni.com"
                {...register("email", {
                  required: "Isi dulu emailnya",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Format email tidak valid",
                  },
                })}
                autoComplete="email"
              />
              <ErrorText>{errors.email ? errors.email.message : ""}</ErrorText>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Sandi</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="ironmandiambil123"
                {...register("password", {
                  required: "Passwordnya diisi juga dong",
                  minLength: {
                    value: 6,
                    message: "Password minimal 6 huruf",
                  },
                })}
                autoComplete="current-password"
              />
              <ErrorText>
                {errors.password ? errors.password.message : ""}
              </ErrorText>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="confirmPassword">Konformasi sandi</Label>
              </div>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="ironmandiambil123"
                {...register("confirmPassword", {
                  required: "Password tidak sama",
                  validate: (value: string) =>
                    value === password || "Password tidak sama",
                })}
                autoComplete="current-password"
              />
              <ErrorText>
                {errors.confirmPassword ? errors.confirmPassword.message : ""}
              </ErrorText>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Buat akun
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

const Signup = () => {
  return (
    <main className="w-full min-h-screen grid place-items-center">
      <SignupCard />
    </main>
  );
};

export default Signup;
