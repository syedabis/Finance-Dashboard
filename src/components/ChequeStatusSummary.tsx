'use client';

import React from "react";
import {
  MoreVertical,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const ChequeStatusSummary = () => {
  const chartData = [
    {
      status: "cleared",
      count: 100,
      amount: "Rs 350,000",
      percentage: 70,
      fill: "#a3e635",
    },
    {
      status: "processing",
      count: 40,
      amount: "Rs 130,000",
      percentage: 26,
      fill: "#000000",
    },
    {
      status: "returned",
      count: 10,
      amount: "Rs 20,000",
      percentage: 4,
      fill: "#6b7280",
    },
  ];

  const chartConfig = {
    count: {
      label: "Count",
    },
    cleared: {
      label: "Cleared Cheques",
      color: "#a3e635",
    },
    processing: {
      label: "In Processing",
      color: "#000000",
    },
    returned: {
      label: "Returned Cheques",
      color: "#6b7280",
    },
  } satisfies ChartConfig;

  const chequeStatuses = [
    {
      id: 1,
      name: "Issued Cheques",
      icon: FileText,
      count: 150,
      amount: "Rs 500,000",
      percentage: 100,
      color: "bg-gray-500 text-white",
      isLast: false,
    },
    {
      id: 2,
      name: "Cleared Cheques",
      icon: CheckCircle,
      count: 100,
      amount: "Rs 350,000",
      percentage: 70,
      color: "bg-lime-500 text-white",
      isLast: false,
    },
    {
      id: 3,
      name: "Returned Cheques",
      icon: XCircle,
      count: 10,
      amount: "Rs 20,000",
      percentage: 7,
      color: "bg-red-500 text-white",
      isLast: false,
    },
    {
      id: 4,
      name: "In Processing",
      icon: Clock,
      count: 40,
      amount: "Rs 130,000",
      percentage: 26,
      color: "bg-yellow-500 text-black",
      isLast: true,
    },
  ];

  return (
    <div className="bg-white rounded-2xl px-4 sm:px-8 py-2 shadow-sm border border-gray-200">
      <div className="flex justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px] w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          Rs 500,000
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-sm"
                        >
                          Total Value
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <ScrollArea className="h-[380px]">
        {chequeStatuses.map((status) => {
          const IconComponent = status.icon;
          return (
            <div
              key={status.id}
              className={`bg-white border border-gray-200 rounded-xl p-2 ${
                status.isLast ? "" : "mb-3 sm:mb-4"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-black">
                    {status.name}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-black">
                    ({status.count} cheques)
                  </span>
                </div>
                <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              </div>
              <div className="w-full mb-2 sm:mb-3">
                <Progress
                  value={status.percentage}
                  className="h-2 sm:h-3 bg-lime-400 [&>div]:bg-black [&>div]:rounded-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600">
                  {status.amount}
                </span>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default ChequeStatusSummary;
