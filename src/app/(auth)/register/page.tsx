import RegisterForm from "@/app/(auth)/register/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main>
      <div>
        <Link href="/">Home</Link>    
      </div>
      <div>Register Form</div>
      <RegisterForm />
    </main>
  )
}
