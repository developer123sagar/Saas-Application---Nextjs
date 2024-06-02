import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex_center glassmorphism-auth w-full h-screen">
      <SignUp />
    </div>
  );
};

export default Page;
