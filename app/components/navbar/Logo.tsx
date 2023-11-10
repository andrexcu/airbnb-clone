"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      style={{ height: "auto", width: "auto" }}
      src="/images/logo.png"
      priority
    />
  );
};

export default Logo;
