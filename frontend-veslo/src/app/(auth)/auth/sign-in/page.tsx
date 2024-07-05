'use server';

import { SignInForm } from '@/features/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"

export default async function SignInPage() {
    return  <div className="min-h-screen flex flex-col ">
                <main className="grow flex flex-col pt-24 ">
                    <Card className="w-full max-w-sm self-center">
                        <CardHeader>
                            <CardTitle className="text-2xl">Вход</CardTitle>
                            <CardDescription>
                                Введите логин и пароль для входа в аккаунт
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <SignInForm/>
                        </CardContent>
                    </Card>
                </main>
            </div>
}
