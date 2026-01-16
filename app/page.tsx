import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-5">
      <div className="font-bold text-2xl text-center">方柏元 面試答案</div>
      <a href="https://github.com/PoyuanFang/interview_quetion" target="_blank" className="font-bold flex items-center gap-1"><FaGithub />github</a>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li><Link href="/question1">第一題</Link></li>
        <li><Link href="/question2">第二題</Link></li>
      </ul>
    </div>
  );
}
