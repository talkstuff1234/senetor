import React from "react";

function Footer() {
  return (
    <footer className="w-full  bg-[#F5F5F5] flex justify-center items-center p-6">
      <div className="mx-auto max-w-5xl w-full bg-white p-6 flex flex-col gap-6 rounded-4xl">
        <div className="h-[400px] w-full bg-[linear-gradient(120deg,#02060d_0%,#020b1a_45%,#010409_100%)] rounded-4xl flex items-center justify-center">
          <div className="text-white w-[80%] text-center">
            <span className="text-xl md:text-2xl">STRONG, CAMPAIGN-READY</span>
            <h1 className="text-2xl md:text-2xl">
              Leadership You Know. Experience You Can Trust.
            </h1>
            <p>
              Ahmed Wadada Aliyu represents continuity with competence —
              leadership shaped by service, strengthened by experience, and
              ready to guide Nasarawa State into its next chapter.
            </p>
          </div>
        </div>
        <div className="bg-black text-white w-full mx-auto rounded-full flex justify-between items-center px-4">
          <ul className="flex gap-2 p-3">
            <li className="px-4 py-2">
              <a href="#Homeo">Home</a>
            </li>
            <li className="px-4 py-2">
              <a href="#Leadership">Leadership</a>
            </li>
            <li className="px-4 py-2">
              <a href="#Vision">Vision</a>
            </li>
          </ul>
          <div className="text-center hidden md:block">
            Designed by{" "}
            <a href="https://www.talkstuff.social/" className="cursor-pointer">
              Talkstuff
            </a>
          </div>
        </div>
        <div className="text-center md:hidden">
          Designed by{" "}
          <a href="https://www.talkstuff.social/" className="cursor-pointer text-orange-300">
            Talkstuff
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
