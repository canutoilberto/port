import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background px-4 md:px-6 py-6 border-t">
      <div className="max-w-[1400px] mx-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-medium">Neno&apos;s</span>
          </div>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}
            >
              Instagram
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Neno&apos;s. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );

  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }
};

export default Footer;
