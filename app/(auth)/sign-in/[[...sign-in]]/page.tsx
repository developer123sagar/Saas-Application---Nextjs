import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex_center glassmorphism-auth w-full h-screen">
      <SignIn />
    </div>
  );
};

export default Page;
