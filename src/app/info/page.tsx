"use client";

import Link from "next/link";
import React, { useState } from "react";
import { atom, useRecoilState } from "recoil";
import { countAtom, textAtom } from "../state/globalState";

const Page = () => {
  const [count, setCount] = useRecoilState(countAtom);
  const [text, setText] = useRecoilState(textAtom);

  return (
    <div className="bg-red-200">
      <h1>infoページ</h1>
      <br />
      <p>カウント: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 px-3 rounded text-white text-xl mr-2"
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 px-3 rounded text-white text-xl"
      >
        -
      </button>

      <br />

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="border border-gray-300 rounded p-1 mt-2"
      />
      <div>
        <Link href="/">rootへ</Link>
      </div>
    </div>
  );
};

export default Page;
