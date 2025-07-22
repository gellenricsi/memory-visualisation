import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export function TabsDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="1">
        <TabsList>
          <TabsTrigger value="1">Programm page</TabsTrigger>
          <TabsTrigger value="2">Programmspeicher</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <Card>
            <CardContent className="grid grid-cols-12 gap-1">
            <div className="grid col-span-2">
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Stack
              </div>
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Stack
              </div>
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Stack
              </div>
              
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Heap
              </div>
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Heap
              </div>
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Heap
              </div>
              <div className="border-2 border-solid rounded-sm text-center p-3 text-2xl">
                Text
              </div>
            </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="2">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}