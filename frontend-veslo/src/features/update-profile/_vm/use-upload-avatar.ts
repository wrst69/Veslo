import { selectFile, validateFileSize } from "@/shared/lib/file";
import { useMutation } from "@tanstack/react-query";
import { uploadAvatarAction } from "../_actions/upload-avatar";
import { MAX_AVATAR_FILE_SIZE, AVATAR_FILE_KEY} from '../_constants';

export const useUploadAvatar = ({
    onError
}: {
    onError?: (type?: 'big-size') => void
}) => {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: uploadAvatarAction
    })

    const handleFileSelect = async () => {
        const file = await selectFile("image/*");

        if (!validateFileSize(file, MAX_AVATAR_FILE_SIZE)) {
            return onError?.('big-size');
        }

        const formData = new FormData();
        
        formData.set(AVATAR_FILE_KEY, file);

        await mutateAsync(formData);
    }

    return {
        isPending,
        handleFileSelect
    };
};
