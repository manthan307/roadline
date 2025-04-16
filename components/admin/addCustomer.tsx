"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Plus } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { createClient } from "@/supabase/client";

export default function AddCustomer({
  AfterCustomerAdded,
}: {
  AfterCustomerAdded: () => void;
}) {
  // user info to save
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [billing_address, setbilling_address] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  const supabase = createClient(); //initialize supabase client

  async function handleSubmit() {
    if (!name.trim()) {
      setErrorMessage("Name is required.");
      return;
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage("Enter a valid email address.");
      return;
    }

    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      setErrorMessage("Enter a valid 10-digit mobile number.");
      return;
    }

    if (!billing_address.trim()) {
      setErrorMessage("Billing address is required.");
      return;
    }

    // All good
    setErrorMessage("");

    const { error } = await supabase
      .from("customers")
      .insert({ full_name: name, email, phone, billing_address });

    if (error) {
      setErrorMessage(error.message);
    } else {
      AfterCustomerAdded();

      //close sheet manually
      sheetCloseRef.current?.click();

      // Reset if needed
      setName("");
      setEmail("");
      setphone("");
      setbilling_address("");
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" size="default">
          <Plus /> New Customer
        </Button>
      </SheetTrigger>
      <SheetContent className="px-3">
        <SheetHeader>
          <SheetTitle>New Customer</SheetTitle>
          <SheetDescription>
            {` Add New Customer here. Click save when
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
              value={name}
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile No.
            </Label>
            <Input
              id="mobile"
              value={phone}
              className="col-span-3"
              onChange={(e) => setphone(e.target.value)}
              minLength={10}
              maxLength={10}
              type="number"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="billing">Billing Address</Label>
            <Textarea
              id="billing"
              value={billing_address}
              className="col-span-3"
              onChange={(e) => setbilling_address(e.target.value)}
            />
          </div>
        </div>
        {errorMessage && (
          <div className="mt-2 px-4 text-sm text-red-600 font-medium">
            {errorMessage}
          </div>
        )}
        <SheetFooter>
          <Button type="button" onClick={handleSubmit}>
            Save changes
          </Button>
          <SheetClose asChild>
            <button ref={sheetCloseRef} className="hidden" />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
