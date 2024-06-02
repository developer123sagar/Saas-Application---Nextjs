import { SignIn } from "@clerk/nextjs";

const Signin = () => {
  return (
    <div className="flex_center glassmorphism-auth w-full h-screen">
      <SignIn />
    </div>
  );
};

export default Signin;
