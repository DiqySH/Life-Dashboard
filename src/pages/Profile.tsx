import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorText from "@/components/ui/ErrorText";
import { Input } from "@/components/ui/input";
import { PageContent, PageSection } from "@/components/ui/pageSection";
import ProfilePictureChanger from "@/components/ui/ProfilePictureChanger";
import { useUser } from "@/context/user";
import { useUsername } from "@/hooks/use-avatar-and-username";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface AvatarError {
  message: string;
}

interface FormData {
  username: string;
  avatar: string | null;
}

const Profile = () => {
  const { username } = useUsername();
  const [avatarError, setAvatarError] = useState<AvatarError | null>(null);
  const [saveChangeTrigger, setSaveChangeTrigger] = useState<boolean>(false);
  const user = useUser();
  const { email, uid } = user;

  const onSubmit = (data: FormData) => {
    if (!data.avatar) {
      setAvatarError({ message: "Avatar ga boleh kosong" });
    } else {
      setAvatarError(null);
      console.log(data);
      setSaveChangeTrigger(false);
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: { avatar: null, username: username },
  });

  useEffect(() => {
    if (username) {
      reset({
        username,
        avatar: null,
      });
    }
  }, [username, reset]);

  return (
    <PageSection pageName="Profile">
      <PageContent className="w-full min-h-[80vh] grid place-items-center">
        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4">
                <Label>Avatar</Label>
                <Controller
                  name="avatar"
                  control={control}
                  rules={{ required: "Avatar ga boleh kosong" }}
                  render={({ field }) => (
                    <>
                      <ProfilePictureChanger
                        onFileChange={(file) => {
                          if (file) {
                            const base64 = file.getFileEncodeBase64String();
                            const mimeType = file.file.type;
                            const dataUrl = `data:${mimeType};base64,${base64}`;
                            field.onChange(dataUrl); // simpan ke react-hook-form
                          } else {
                            field.onChange(null);
                          }
                          setSaveChangeTrigger(true);
                        }}
                      />
                      <ErrorText>{errors.avatar?.message}</ErrorText>
                    </>
                  )}
                />

                <ErrorText>{avatarError ? avatarError.message : ""}</ErrorText>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Username harus diisi" }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Username"
                      className="!border-none"
                      onChange={(e) => {
                        field.onChange(e); // untuk react-hook-form
                        setSaveChangeTrigger(true);
                      }}
                    />
                  )}
                />
                <ErrorText>
                  {errors.username ? errors.username.message : ""}
                </ErrorText>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  id="email"
                  disabled
                  value={email ? (email as string) : ""}
                  className="!border-none"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="uid">UID</Label>
                <Input
                  type="text"
                  id="uid"
                  disabled
                  placeholder={"Username"}
                  value={uid ? (uid as string) : ""}
                  className="!border-none"
                />
              </div>
              <motion.div
                className="fixed bottom-3 right-3 max-w-[450px] w-full"
                animate={{
                  x: saveChangeTrigger ? "0%" : "150%",
                  opacity: saveChangeTrigger ? 1 : 0,
                }}
              >
                <Card>
                  <CardDescription>
                    <CardContent className="flex items-center gap-4 justify-between">
                      <CardTitle className="text-white">
                        Mungkin ada perubahan
                      </CardTitle>
                      <Button type="submit" className="text-white">
                        Simpan Perubahan
                      </Button>
                    </CardContent>
                  </CardDescription>
                </Card>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </PageContent>
    </PageSection>
  );
};

export default Profile;
