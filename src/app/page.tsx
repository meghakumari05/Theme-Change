import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white
     dark:bg-black text-black dark:text-white transition-all duration-300">
      <div className="max-w-3xl text-center space-y-10">
        <h1 className="text-5xl font-semibold">Theme change using Next.js</h1>
        <p></p>
        {/* <div className="space-x-2">
          <Button> button 1</Button>
          <Button variant="secondary"> button 2</Button>
        </div> */}
        <ThemeToggle/>
      </div>
    </div>
  );
}
