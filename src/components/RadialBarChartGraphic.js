import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

function RadialBarChartGraphic({ user }) {
  const data = [
    {
      name: "Score",
      value: user.score * 100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius={200}
        outerRadius={100}
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar background dataKey="value" fill="#ff0000" />
        <text
          x={70}
          y={50}
          fontSize="22"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Score
        </text>
        <text
          x={195}
          y={155}
          fontSize="45"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {user.score * 100}%
        </text>
        <text
          x={190}
          y={198}
          fontSize="19"
          fontWeight="bold"
          fill="grey"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          de votre
        </text>
        <text
          x={190}
          y={220}
          fontSize="19"
          fontWeight="bold"
          fill="grey"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default RadialBarChartGraphic;
