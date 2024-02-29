"use server";

import { z } from 'zod';
import { AVATAR_FILE_KEY } from '../_constants';
import { BadRequest } from '@/shared/lib/errors';

const resultSchema = z.object({
    avatar: z.object ({
        path: z.string()
    }),
});

export const uploadAvatarAction = async (formData: FormData) => {
    const file = formData.get(AVATAR_FILE_KEY);

    if (!(file instanceof File)) {
        throw new BadRequest();
    }

    //console.log();
};
