import React from "react";
import Head from "next/head";
import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { data, status } = useSession();

  if (!data && status === "loading") {
    return <>Loading...</>;
  }

  if (!data && status === "unauthenticated") {
    router.push("/api/auth/signin");
  }

  return (
    <>
      <Head>
        <title>Ticket Tool</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="w-full max-w-lg flex justify-center m-auto pr-8 pl-8">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};
