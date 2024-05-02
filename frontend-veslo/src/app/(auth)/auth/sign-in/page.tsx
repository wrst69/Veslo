import { SignInForm } from "@/features/auth";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex flex-col ">
            <main className="grow flex flex-col pt-24 ">
                <div className="rounded-xl border-2 border-black px-14 py-8 max-w-[400px] w-full self-center ">
                    <h1 className="text-2xl mb-10">Вход</h1>
                    <SignInForm/>
                </div> 
            </main>
        </div>
    )
}
