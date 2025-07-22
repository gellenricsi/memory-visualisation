"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {PageTable} from "@/app/shadcn/tabs";

type Props = {
    addHeap: () => void,
    removeHeap: () => void,
    addStack: () => void,
    removeStack: () => void,
    pageTable: PageTable
};


export function VBLEntry({addHeap,removeHeap,addStack, removeStack, pageTable}: Props) {
console.log(pageTable)

    return (
        <Card>
            {/* Tab-Komponente kann hier bleiben */}
            <div className="flex flex-col gap-4">
                {/* Vorhandene Elemente */}
                <div className="flex flex-col-reverse col-span-2">

                    {/* Dynamisches Rendern der Heaps */}

                    {pageTable.map((entry, index) => (
                        entry === null ?
                            <div key={index}
                                 className="border-2 border-dotted rounded-sm text-center p-3 text-2xl">&nbsp;</div> :
                            <div key={index}
                                 className="border-2 border-solid rounded-sm text-center p-3 text-2xl"> {entry.type.toUpperCase()} </div>
                    ))}
                </div>
                {/* Buttons */}
                <div>
                    <Button onClick={addHeap}>Add Heap</Button>
                    <Button onClick={removeHeap}>Remove Heap</Button>
                     <Button onClick={addStack}>Add Stack</Button>
                    <Button onClick={removeStack}>Remove Stack</Button>
                </div>
            </div>
        </Card>
    );
}