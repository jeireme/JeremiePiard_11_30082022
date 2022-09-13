import React from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { useState } from "react";

/**
 * Component that render the radial bar chart
 * It shows the user's progress with a percentage
 * @param {{object}} user Current user on website
 * @returns void
 */
function RadialBarChartGraphic({ user }) {
  const data = [
    {
      name: "Score",
      value: user.score * 100,
    },
  ];

  // eslint-disable-next-line
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

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
        <RadialBar
          background
          dataKey="value"
          fill="#ff0000"
          cornerRadius={20}
        />
        <text
          x={window.innerWidth <= 1200 ? 35 : 70}
          y={window.innerWidth <= 1200 ? 25 : 50}
          fontSize={window.innerWidth <= 1200 ? "15" : "22"}
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Score
        </text>
        <text
          x={window.innerWidth <= 1200 ? 130 : 192}
          y={window.innerWidth <= 1200 ? 110 : 155}
          fontSize="40"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {user.score * 100}%
        </text>
        <text
          x={window.innerWidth <= 1200 ? 130 : 190}
          y={window.innerWidth <= 1200 ? 145 : 185}
          fontSize="19"
          fontWeight="bold"
          fill="grey"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          de votre
        </text>
        <text
          x={window.innerWidth <= 1200 ? 130 : 190}
          y={window.innerWidth <= 1200 ? 165 : 205}
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

RadialBarChartGraphic.propTypes = {
  user: PropTypes.object,
};

export default RadialBarChartGraphic;
