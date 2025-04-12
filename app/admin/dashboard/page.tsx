"use client";

import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionCards } from "@/components/admin/card";
import { ChartAreaInteractive } from "@/components/admin/chart";
import { fetchInsightById } from "./actions";

export default function Dashboard() {
  const router = useRouter();
  const supabase = createClient(); // initialize Supabase client

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [visitData, setVisitData] = useState<
    { result?: { [key: string]: unknown }[] } | undefined
  >(undefined);
  const [growthRate, setGrowthRate] = useState<number>(0);

  // Check if the user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        // Redirect to the login page if no session exists
        router.push("/admin");
      }

      setUser(data.session?.user ?? null);
    };

    checkSession();
  }, [router, supabase.auth]);

  useEffect(() => {
    const fetchData = async () => {
      const [visitsData, growth] = await Promise.all([
        fetchInsightById("905798"),
        fetchInsightById("921828"),
      ]);

      setGrowthRate(growth.result[0][2]);
      setVisitData(visitsData?.result?.[0]);
    };

    if (user !== null) {
      fetchData();
    }
  }, [user]);

  return (
    <>
      <SectionCards visit={visitData} growth={growthRate} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive visit={visitData} />
      </div>
    </>
  );
}
