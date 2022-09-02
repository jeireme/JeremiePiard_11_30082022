import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarChartGraphic({ user }) {
  const data = [
    {
      subject: user.kind[6],
      value: user.kindData[5].value,
    },
    {
      subject: user.kind[5],
      value: user.kindData[4].value,
    },
    {
      subject: user.kind[4],
      value: user.kindData[3].value,
    },
    {
      subject: user.kind[3],
      value: user.kindData[2].value,
    },
    {
      subject: user.kind[2],
      value: user.kindData[1].value,
    },
    {
      subject: user.kind[1],
      value: user.kindData[0].value,
    },
  ];

  // ? changer la couleur de PolarAngleAxis

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#ff0000" />
        <PolarAngleAxis cy={5} dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#ff0000"
          fill="#ff0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartGraphic;
