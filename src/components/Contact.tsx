"use client";

import Icons from "@/lib/Icons";

import { Dock, DockIcon } from "@/components/ui/dock";

export default function DockDemo() {
  const handleClick = (url: string) => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <div className=" items-center m-0 p-0">
      <Dock className="mt-0" iconMagnification={50} iconDistance={100}>
        <DockIcon
          className="bg-black/10 dark:bg-white/10"
          onClick={() =>
            handleClick("https://www.linkedin.com/in/rohit-patil-a0377a256/")
          }
        >
          <Icons.linkedin className="size-full" />
        </DockIcon>
        <DockIcon
          className="bg-black/10 dark:bg-white/10"
          onClick={() => handleClick("https://github.com/Rohit1610")}
        >
          <Icons.gitHub className="size-full" />
        </DockIcon>
        <DockIcon
          className="bg-black/10 dark:bg-white/10"
          onClick={() => handleClick("https://www.instagram.com/rohit_patil_9448/")}
        >
          <Icons.instagram className="size-full" />
        </DockIcon>
        <DockIcon
          className="bg-black/10 dark:bg-white/10"
          onClick={() => handleClick("https://twitter.com/vermithor_16")}
        >
          <Icons.twitter className="size-full" />
        </DockIcon>
      </Dock>
    </div>
  );
}
