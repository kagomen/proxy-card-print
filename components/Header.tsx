import { Printer } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-1 sticky top-0 w-full flex items-center justify-between h-14">
      <Button variant="ghost" className="text-sm font-semibold" asChild>
        <Link href="/">
          <Printer strokeWidth="2.6" />
          Proxy Card Print
        </Link>
      </Button>
    </header>
  );
}
