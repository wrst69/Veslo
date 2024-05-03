import { Button } from "@/shared/ui/button";
import { Spinner } from "@/shared/ui/spinner";
import { ProfileAvatar } from "@/sdsdsd/user/_ui/profile-avatar";
import { Profile } from "@/sdsdsd/user/profile";
import { useUploadAvatar } from "../_vm/use-upload-avatar";

export function AvatarField({
  value,
  onChange,
  profile,
}: {
  value?: string;
  onChange: (value?: string) => void;
  profile: Profile;
}) {
  /* const uploadImage = useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      return uploadProfileImageAction(formData);
    },
    onSuccess: (data) => {
      if (data) {
        onChange(data);
      }
    },
  }); */

  /* const handleClick = () => {
    selectFile("image/*").then((file) => {
      if (file) {
        uploadImage.mutate(file);
      }
    });
  }; */

  const { handleFileSelect, isPending } =  useUploadAvatar({});

  return (
    <Button
      variant="ghost"
      className="w-[84px] h-[84px] p-0.5 rounded-full relative block"
      disabled={isPending}
      onClick={handleFileSelect}
      type="button"
    >
      {isPending && (
        <div className="inset-0 absolute flex items-center justify-center z-10">
          <Spinner className="w-10 h-10" aria-label="Загрузка новой аватарки" />
        </div>
      )}
      <ProfileAvatar
        className="w-full h-full"
        profile={{ ...profile}}
      />
    </Button>
  );
}
