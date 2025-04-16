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
  Sheet,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AddCustomer from "@/components/admin/addCustomer";

// Define the interface for a customer object
interface customer {
  id: number;
  full_name: string;
  email: string;
  phone: string;
}

export default function Customers() {
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to store the list of customers
  const [customers, setCustomers] = useState<customer[]>([]);
  // State to handle errors during data fetching
  const [error, setError] = useState<string | null>(null);

  // State for the search bar input
  const [search, setSearch] = useState<string>("");
  // State to store the results of the search
  const [searchResult, setSearchResult] = useState<customer[]>([]);

  // Initialize the Supabase client
  const supabase = createClient();

  async function fetchData() {
    // Fetch data from the 'customers' table, order by 'created_at'
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("created_at", { ascending: true });

    // Handle error during data fetching
    if (error) {
      console.error("Error fetching contact requests:", error);
      setError("Failed to fetch contact requests.");
    }

    // Update the customers state with the fetched data or an empty array if null
    setCustomers(data || []);
    // Set loading to false once data is fetched
    setLoading(false);
  }

  // useEffect hook to fetch customer data when the component mounts
  useEffect(() => {
    // Call the fetchData function
    fetchData();
    // The empty dependency array ensures this effect runs only once
  }, []);

  // Function to handle search bar input and filter customers
  function handleSearch(query: string) {
    // Update the search query state
    setSearch(query);
    // Convert the query to lowercase for case-insensitive search
    const q = query.toLowerCase();

    // Filter the customers based on the search query
    const results = customers.filter(
      (customer) =>
        customer.id.toString().includes(q) || // Check if ID includes query
        customer.full_name.toLowerCase().includes(q) || // Check if name includes query
        customer.email.toLowerCase().includes(q) || // Check if email includes query
        customer.phone.toLowerCase().includes(q) // Check if mobile includes query
    );

    // Update the search results state
    setSearchResult(results);
  }

  //when new customer is added
  async function AfterCustomerAdded() {
    await fetchData();
  }

  return (
    <div className="px-3">
      {/* Header section */}
      <div className="flex w-full justify-between px-5 py-5 items-center flex-wrap gap-5">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-gray-600">Manage your customers here.</p>
        </div>
        {/* Search bar with dynamic search results */}
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search"
            type="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
          />

          {/* Display search results if search input is not empty and there are results */}
          {search.length > 0 && searchResult.length > 0 && (
            <div className="absolute z-50 mt-1 w-full rounded-md border bg-background shadow-md">
              {/* Map through search results and display each customer */}
              {searchResult.map((customer) => (
                <div
                  key={customer.id}
                  className="px-3 py-2 cursor-pointer flex justify-between p-2"
                >
                  <div>
                    <p className="text-sm font-medium">{customer.full_name}</p>
                    <p className="text-xs text-gray-500">
                      {customer.email} • {customer.phone}
                    </p>
                  </div>
                  {/* Button to add a customer (functionality not implemented here) */}
                  <Button variant="outline" size="icon">
                    <Plus />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Button to add a new customer */}
        <AddCustomer AfterCustomerAdded={AfterCustomerAdded} />
      </div>
      {/* Error handling and empty state */}
      {error ? (
        // Display error alert if there's an error
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : customers.length == 0 ? (
        // Display "No customer found" if there are no customers
        <div className="flex w-full justify-center items-center h-full">
          <h1 className="text-gray-500">No customer found</h1>
        </div>
      ) : (
        // Display the table if there are customers and no errors
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
            {/* Display loading skeletons while data is being fetched */}
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
              // Map through the customers and display each customer in a table row
              customers.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.id}</TableCell>
                  <TableCell>{request.full_name}</TableCell>
                  <TableCell>{request.email}</TableCell>
                  <TableCell>{request.phone}</TableCell>
                  <TableCell>
                    {/* Sheet component for adding a new customer */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Plus />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>New Customer</SheetTitle>
                          <SheetDescription>
                            {` Add New Customer here. Click save when
                            you're done.`}
                          </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4"></div>
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
