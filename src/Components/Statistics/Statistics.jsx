import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Assignment 1",
    value: 60,
  },
  {
    name: "Assignment 2",
    value: 58,
  },
  {
    name: "Assignment 3",
    value: 60,
  },
  {
    name: "Assignment 4",
    value: 60,
  },
  {
    name: "Assignment 5",
    value: 60,
  },
  {
    name: "Assignment 6",
    value: 60,
  },
  {
    name: "Assignment 7",
    value: 60,
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
];

const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="#8884d8"
          label={(entry) => `${entry.name}: ${entry.value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
