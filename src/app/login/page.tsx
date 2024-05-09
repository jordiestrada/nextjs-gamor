import { signIn } from "next-auth/react";
import ButtonSignin from '@/app/ui/ButtonSignin';
function page() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Login con Github</h1>
        <ButtonSignin />

      </div>
    </div>
  );
}

export default page;
