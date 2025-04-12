"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ChartAreaInteractive({ visit }: { visit: any }) {
  if (!visit || !Array.isArray(visit.days) || !Array.isArray(visit.data)) {
    return (
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardTitle>7 Days Visitors</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:hidden">Last 7 days</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <Skeleton className="h-[250px] w-full" />
        </CardContent>
      </Card>
    );
  }

  const formattedData = visit.days.map((label: string, index: number) => {
    let displayLabel = "Invalid Date";
    if (
      label &&
      typeof label === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(label)
    ) {
      const [year, month, day] = label.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      if (!isNaN(date.getTime())) {
        displayLabel = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      }
    }

    return {
      label: displayLabel, // formatted date like "Feb 3" or "Invalid Date"
      data: visit.data[index] ?? 0,
    };
  });

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>7 Days Visitors</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:hidden">Last 7 days</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={formattedData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => value} // formatted date like "Feb 3"
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="data"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
