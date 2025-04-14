"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Sheet } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/supabase/client";

interface customer {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

export default function Customers() {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<customer[]>([]);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient(); //initialize supabase client

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("contact_us")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching contact requests:", error);
        setError("Failed to fetch contact requests.");
      }

      setCustomers(data || []);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="px-3">
      <div className="flex w-full justify-between px-5 py-5 items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-gray-600">Manage your customers here.</p>
        </div>
        <Button>
          <Plus /> New Customer
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell>
                <Skeleton className="h-4 w-8 rounded"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24 rounded"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-32 rounded"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-20 rounded"></Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40 rounded"></Skeleton>
              </TableCell>
            </TableRow>
          ) : (
            customers.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.id}</TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.mobile}</TableCell>
                <TableCell>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="default" size="icon">
                        <Plus /> New Order
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                          {` Make changes to your profile here. Click save when
                            you're done.`}
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
