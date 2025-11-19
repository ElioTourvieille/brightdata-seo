"use client"

import { SignInButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const AuthenticatedButton = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Unauthenticated>
        <SignInButton mode="modal" forceRedirectUrl="/dashboard">
          <Button size="lg" variant="gradient">
            <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
            Générer mon rapport
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </SignInButton>
      </Unauthenticated>

      <Authenticated>
        <Link href="/dashboard">
          <Button size="lg" variant="gradient">
            <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
            Générer mon rapport
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </Authenticated>
    </div>
  );
};

export default AuthenticatedButton;
