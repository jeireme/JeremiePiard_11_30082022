import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Component that render the radar chart
 * It shows the capacities of the user in 5 categories : cardio, intensity, speed, strengh, endurance and energy
 * @param {{object}} user Current user on website
 * @returns void
 */
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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} fill="#FFF">
        <PolarGrid radialLines={false} stroke="#FFF" />
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

RadarChartGraphic.propTypes = {
  user: PropTypes.object,
};

export default RadarChartGraphic;
