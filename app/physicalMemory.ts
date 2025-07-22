import {PageTableEntry, PageTableType} from "@/app/shadcn/tabs";

export type physicalMemoryPage = {
    pageTableEntry: PageTableEntry
} | null;

export const physicalMemory : physicalMemoryPage[] = Array(16).fill(null);

export function allocateMemory( type : PageTableType) : PageTableEntry {
    const freePage = physicalMemory.findIndex(page => page === null);
    if(freePage !== -1) {
        const pageTableEntry = {
            physicalPage: freePage,
            type,
            present: true,
        }
        physicalMemory[freePage] = { pageTableEntry };
        console.log("physicalMemory", physicalMemory)
        return pageTableEntry;
    }
    return null;
}

