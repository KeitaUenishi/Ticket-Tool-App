import { Header } from "@/components/common/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// ダッシュボード
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="text-3xl font-bold underline">Hello World!</div>
      </main>
    </>
  );
}
