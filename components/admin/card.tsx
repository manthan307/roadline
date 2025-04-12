import { TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

export function SectionCards({
  visit,
  growth,
  loading,
}: {
  visit: number;
  growth: number;
  loading: boolean;
}) {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          {loading ? (
            <Skeleton className="h-7 w-28 rounded-md" />
          ) : (
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              ₹1,250.00
            </CardTitle>
          )}
          <div className="absolute right-4 top-4">
            {loading ? (
              <Skeleton className="h-5 w-16 rounded-md" />
            ) : (
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <TrendingUpIcon className="size-3" />
                +12.5%
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          {loading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-48 rounded-md" />
            </>
          ) : (
            <>
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 6 months
              </div>
            </>
          )}
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Visits</CardDescription>
          {loading ? (
            <Skeleton className="h-7 w-28 rounded-md" />
          ) : (
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {visit}
            </CardTitle>
          )}
          <div className="absolute right-4 top-4">
            {loading ? (
              <Skeleton className="h-5 w-16 rounded-md" />
            ) : (
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <TrendingUpIcon className="size-3" />
                +12.5%
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          {loading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-48 rounded-md" />
            </>
          ) : (
            <>
              <div className="line-clamp-1 flex gap-2 font-medium">
                Trending up this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visitors for the last 1 months
              </div>
            </>
          )}
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>New Customers</CardDescription>
          {loading ? (
            <Skeleton className="h-7 w-28 rounded-md" />
          ) : (
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              0
            </CardTitle>
          )}
          <div className="absolute right-4 top-4">
            {loading ? (
              <Skeleton className="h-5 w-16 rounded-md" />
            ) : (
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <TrendingUpIcon className="size-3" />
                +20%
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          {loading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-48 rounded-md" />
            </>
          ) : (
            <>
              <div className="line-clamp-1 flex gap-2 font-medium">
                Up 20% this period <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Acquisition needs attention
              </div>
            </>
          )}
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Growth Rate</CardDescription>
          {loading ? (
            <Skeleton className="h-7 w-28 rounded-md" />
          ) : (
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              <div className="flex gap-3">
                <Badge
                  variant="outline"
                  className="flex gap-1 rounded-lg text-xs"
                >
                  <TrendingUpIcon className="size-3" />
                  {growth} %
                </Badge>
              </div>
            </CardTitle>
          )}
          {/* <div className="absolute right-4 top-4">
            {loading ? (
              <Skeleton className="h-5 w-16 rounded-md" />
            ) : (
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                <TrendingUpIcon className="size-3" />
                +4.5%
              </Badge>
            )}
          </div> */}
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          {loading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-4 w-48 rounded-md" />
            </>
          ) : (
            <>
              <div className="line-clamp-1 flex gap-2 font-medium">
                Steady performance <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Meets growth projections
              </div>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
