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
import { SignIn, SignInWithGoogle } from "@/services/firebase";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

interface LoginData {
  email: string;
  password: string;
}

function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginData>();

  const handleLogin = (data: LoginData) => {
    try {
      SignIn(data.email, data.password);
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

  return (
    <Card className="w-full max-w-sm">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-6"
      >
        <CardHeader>
          <CardTitle>Login Dulu Wak</CardTitle>
          <CardDescription>Masukin email dan password di bawah untuk login</CardDescription>
          <CardAction>
            <Button variant="link"><Link to={"/signup"}>Sign Up</Link></Button>
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
                  required: "Isi dulu emailnya.",
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
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Lupa kata sandi?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="ironmandiambil123"
                {...register("password", { required: "Passwordnya diisi juga dong.", minLength: {
                  value: 6,
                  message: "Password minimal 6 huruf"
                } })}
                autoComplete="current-password"
              />
              <ErrorText>{errors.password ? errors.password.message : ""}</ErrorText>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full text-white">
            Masuk
          </Button>
          <Button
            variant="outline"
            className="w-full"
            type="button"
            onClick={() => SignInWithGoogle()}
          >
            Login dengan google
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

const Login = () => {
  return (
    <main className="w-full min-h-screen grid place-items-center">
      <LoginCard />
    </main>
  );
};

export default Login;
