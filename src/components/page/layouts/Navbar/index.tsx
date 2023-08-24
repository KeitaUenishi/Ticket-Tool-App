import { LinkButton } from "@/components/ui/Button/LinkButton";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral sticky top-0 z-50">
      <div className=" w-full max-w-lg m-auto flex justify-between">
        <div className="navbar-start w-max">
          {/** TODO: 後で消す */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            Ticket Tool
          </Link>
        </div>
        <div className="navbar-end w-max flex flex-row justify-center items-center">
          <LinkButton
            href="/my-event/add"
            buttonColor="primary"
            buttonText="イベント投稿"
          />
          <div className="dropdown ml-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <Image
                className="w-10 h-10 rounded-full"
                width={20}
                height={20}
                src="/avatar.jpg"
                alt="avatar"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li>
                <Link href={"/my-event"}>自分のイベント一覧</Link>
              </li>
              <li>
                <Link href={"/reservation-event"}>予約イベント一覧</Link>
              </li>
              <li>
                <Link href={"/settings"}>設定</Link>
              </li>
              <li>
                <label onClick={() => signOut()}>ログアウト</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
