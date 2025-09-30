"use client"

import React from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const KeyMetrics = () => {
  const monthlyChequeValueData = [
    { month: "Jan", revenue: 186000 },
    { month: "Feb", revenue: 305000 },
    { month: "Mar", revenue: 237000 },
    { month: "Apr", revenue: 173000 },
    { month: "May", revenue: 209000 },
    { month: "Jun", revenue: 214000 },
  ];

  const averageChequeValueData = [
    { month: "Jan", expenses: 145000 },
    { month: "Feb", expenses: 198000 },
    { month: "Mar", expenses: 167000 },
    { month: "Apr", expenses: 189000 },
    { month: "May", expenses: 156000 },
    { month: "Jun", expenses: 172000 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#10b981",
    },
    expenses: {
      label: "Expenses",
      color: "#ef4444",
    },
  } satisfies ChartConfig;

  return (
    <Card className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-base sm:text-lg font-semibold text-black">
            Key Metrics
          </CardTitle>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 cursor-pointer">
            <span>This Month</span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Revenue Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Monthly Cheque Value Data</h4>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart
              accessibilityLayer
              data={monthlyChequeValueData}
              width={undefined}
              height={200}
              margin={{
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `Rs ${(value / 1000).toFixed(0)}K`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="revenue"
                type="natural"
                stroke="#10b981"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
          <div className="flex gap-2 leading-none font-medium">
            Value: Trending up by 5.2% <TrendingUp className="h-4 w-4" />
          </div>
        </div>

        {/* Expenses Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Average Cheque Value Data</h4>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart
              accessibilityLayer
              data={averageChequeValueData}
              width={undefined}
              height={200}
              margin={{
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `Rs ${(value / 1000).toFixed(0)}K`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="expenses"
                type="natural"
                stroke="#ef4444"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
      
      <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Expenses: Trending down by 2.1% <TrendingUp className="h-4 w-4 rotate-180" />
          </div>
      </CardFooter>
    </Card>
  );
};

export default KeyMetrics;
