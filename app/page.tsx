import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center" >
      <Alert className="min-w-[20vw] max-w-xs" variant="green">
        <AlertTitle>
          Welcome to Next.js!
        </AlertTitle>
        <AlertDescription className="text-zinc-700">
          Get started by editing <code>pages/index.js</code> or creating more pages.
        </AlertDescription>
      </Alert>
    </div> 
  );
}
