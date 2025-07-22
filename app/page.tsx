"use client";
import {TabsDemo} from "./shadcn/tabs";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {physicalMemory} from "@/app/physicalMemory";

export default function Home() {
    const [tabsList, setTabsList] = useState<number[]>([0]);
    const [nextId, setNextId] = useState(1);


    const addTab = () => {
        setTabsList((prev) => [...prev, nextId]);
        setNextId((id) => id + 1);
    };

  return (
      <div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {tabsList.map((id) => (
                <TabsDemo
                    key={id}
                    physicalStorage={physicalMemory}
                />
            ))}
        </div>
        <div>
            <Button onClick={addTab}>Neues Programm</Button>
        </div>
      </div>
  );
}
