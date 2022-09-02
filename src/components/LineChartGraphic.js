import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function LineChartGraphic({ user }) {
  const data = [
    {
      name: "L",
      length: user.sessionsLength[0].sessionLength,
    },
    {
      name: "M",
      length: user.sessionsLength[1].sessionLength,
    },
    {
      name: "M",
      length: user.sessionsLength[2].sessionLength,
    },
    {
      name: "J",
      length: user.sessionsLength[3].sessionLength,
    },
    {
      name: "V",
      length: user.sessionsLength[4].sessionLength,
    },
    {
      name: "S",
      length: user.sessionsLength[5].sessionLength,
    },
    {
      name: "D",
      length: user.sessionsLength[6].sessionLength,
    },
  ];

  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return (
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            width: "70px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{payload[0].payload.length} min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 100,
          right: 0,
          left: 0,
          bottom: 15,
        }}
      >
        <defs>
          <linearGradient id="linearGradient" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity={0.25} />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          width={50}
          padding={{
            left: 30,
            right: 30,
          }}
          stroke="#F5F5F5"
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="length"
          stroke="url(#linearGradient)"
          strokeWidth={2}
          dot={false}
        />
        <text
          x={30}
          y={38}
          dominantBaseline="hanging"
          fontSize="17"
          fill="#F5F5F5"
        >
          Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartGraphic;
