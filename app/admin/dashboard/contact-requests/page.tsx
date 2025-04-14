"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, Check } from "lucide-react";
import { createClient } from "@/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactRequest {
  id: number;
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export default function ContactRequestsPage() {
  const supabase = createClient(); // initialize Supabase client

  // data for contact requests
  const [contactRequests, setContactRequests] = useState<ContactRequest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

      setContactRequests(data || []);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Contact Requests</h1>
      <p className="text-gray-500">Manage all the contact requests here.</p>

      {error ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Message</TableHead>
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
              contactRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>{request.name}</TableCell>
                  <TableCell>{request.email}</TableCell>
                  <TableCell>{request.mobile}</TableCell>
                  <TableCell>{request.message}</TableCell>
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Check />
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
      )}
    </div>
  );
}
