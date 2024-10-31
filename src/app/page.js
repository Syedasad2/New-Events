
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen">
    <h1 className="font-bold text-3xl p-20">Find Your Friend</h1>
    <Link href="/admin">
    <Button>Admin</Button></Link>
     
    </div>
  );
}
