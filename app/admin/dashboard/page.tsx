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
  const [loading, setLoading] = useState(true);
  const [visits, setVisits] = useState<number | null>(null);
  const [growth, setGrowth] = useState<number | null>(null);

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
      setLoading(true);
      const [visitsData, growthData, visitGrowth] = await Promise.all([
        fetchInsightById("905798"),
        fetchInsightById("916716"),
        fetchInsightById("917620"),
      ]);
      console.log(visitsData, growthData, visitGrowth);
      const growthPercentage = "";
      setVisits(visitsData?.result?.[0]?.count ?? 0);
      setGrowth(growthData?.result?.[0]?.value ?? 0);
      setLoading(false);
    };

    if (user !== null) {
      fetchData();
      setLoading(false);
    }

    console.log(visits, growth);
  }, [user]);

  useEffect(() => {
    console.log(visits, growth);
  }, [visits, growth]);

  return (
    <>
      <SectionCards
        visit={visits ?? 0}
        growth={growth ?? 0}
        loading={loading}
      />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </>
  );
}
