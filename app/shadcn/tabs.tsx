"use client";

import React, {useEffect, useState} from "react";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {VBLEntry} from "@/components/ui/VBLEntry";
import {allocateMemory, physicalMemoryPage} from "@/app/physicalMemory";

export type PageTableType = "code" | "text" | "heap" | "stack";

export type PageTableEntry = {
    physicalPage: number;
    present: boolean;
    type: PageTableType;
} | null;

export type PageTable = PageTableEntry[];



function initializePageTable(): PageTable {
    const pageTable: PageTable = new Array<PageTableEntry>(16).fill(null);
    return pageTable;
}

type Unit = {
    physicalPage: number;
    allocated: boolean;
};

type Props = {
    physicalStorage: physicalMemoryPage[];
};


export function TabsDemo({ physicalStorage }: Props) {
    const [pageTable, setPageTable] = useState<PageTable>(initializePageTable());

    useEffect(() => {
        initializeProgramm(pageTable);
    }, []);

    function addHeap(pageTable: PageTable, type : PageTableType = "heap"): PageTable {
        const index = pageTable.findIndex(entry => entry === null)
        if (index >= 0) {
            const pageTableEntry = allocateMemory(type);
            if(pageTableEntry !== null) {
                return [...pageTable.slice(0, index), pageTableEntry, ...pageTable.slice(index + 1)];
            }
            console.log(physicalStorage)

        }
        console.log("Error kein Platz im PageTable.")
        return pageTable;
    }

    function initializeProgramm(pageTable: PageTable) {
        const pageTableCode = addHeap(pageTable, "code");
        const pageTableText = addHeap(pageTableCode, "text");
        const pageTableStack = addStack(pageTableText);
        setPageTable(pageTableStack);
    }

    function removeHeap(pageTable: PageTable): PageTable {
        const index = pageTable.findLastIndex(entry => entry?.type === "heap")
        const physicalIndex = physicalStorage.findIndex(entry => entry?.allocated === true)
        if (index >= 0) {
            physicalStorage[physicalIndex].allocated = false;
            console.log("physicalStorage")
            console.log(physicalStorage)
            return [...pageTable.slice(0, index), null, ...pageTable.slice(index + 1)];
        }
        console.log("No Heap found.")
        return pageTable;
    }

    function addStack(pageTable: PageTable): PageTable {
        const index = pageTable.findLastIndex(entry => entry === null)
        if (index >= 0) {
            const pageTableEntry = allocateMemory("stack");
            if(pageTableEntry !== null) {
                return [...pageTable.slice(0, index), pageTableEntry, ...pageTable.slice(index + 1)];
            }
            console.log(physicalStorage)
        }
        console.log("Error kein Platz im PageTable.")
        return pageTable;
    }

    function removeStack(pageTable: PageTable): PageTable {
        const index = pageTable.findIndex(entry => entry?.type === "stack")
        const physicalIndex = physicalStorage.findIndex(entry => entry?.allocated === true)
        if (index >= 0) {
            physicalStorage[physicalIndex].allocated = false;
            console.log("physicalStorage")
            console.log(physicalStorage)
            return [...pageTable.slice(0, index), null, ...pageTable.slice(index + 1)];
        }
        console.log("No Stack found.")
        return pageTable;
    }


    function addHeapHandler() {
        setPageTable(addHeap(pageTable));
    }
    function removeHeapHandler() {
        setPageTable(removeHeap(pageTable));
    }

    function addStackHandler() {
        setPageTable(addStack(pageTable));
    }
    function removeStackHandler() {
        setPageTable(removeStack(pageTable));
    }

    return (
        <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="1">
                <TabsList>
                    <TabsTrigger value="1">Programm Page</TabsTrigger>
                    <TabsTrigger value="2">Programmspeicher</TabsTrigger>
                </TabsList>
                <TabsContent value="1">
                    <VBLEntry
                        addHeap={addHeapHandler}
                        removeHeap={removeHeapHandler}
                        addStack={addStackHandler}
                        removeStack={removeStackHandler}
                        pageTable={pageTable}
                    >
                    </VBLEntry>
                </TabsContent>

                <TabsContent value="2">
                </TabsContent>
            </Tabs>
        </div>
    );
}