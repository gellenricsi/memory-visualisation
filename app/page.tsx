import Image from "next/image";
import { TabsDemo } from "./shadcn/tabs";

export default function Home() {
  return (
    <div className="md:col-span-3 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
        <div className="col-span-12">
          <TabsDemo></TabsDemo>
        </div>
      </div>
    </div>
  );
}
