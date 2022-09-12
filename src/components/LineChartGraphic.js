import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Component that render a line chart
 * It shows the average duration of user sessions day by day
 * @param {{object}} user Current user on website
 * @returns void
 */
function LineChartGraphic({ user }) {
  const data = [
    {
      name: " ",
      length: 0,
    },
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
    {
      name: " ",
      length: 60,
    },
  ];

  /**
   * Function that render a custom tooltip on mouse hovering the graph
   * @param {object} payload Contains the data of a selected day
   * @param {boolean} active Becomes true when the user mouse hover the graph
   * @returns void
   */
  const CustomTooltip = ({ payload, active }) => {
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
    <ResponsiveContainer width="100%" height="95%">
      <LineChart
        data={data}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector(".lineChartContainer");
            let windowWidth = div.clientWidth;
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            );
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, #ff0000 ${mouseXpercentage}%, #e60000 ${mouseXpercentage}%, #e60000 100%)`;
          }
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
            left: -10,
            right: -10,
          }}
          stroke="#F5F5F5"
        />
        <YAxis
          padding={{
            top: 100,
            bottom: 60,
          }}
          width={0}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="natural"
          dataKey="length"
          stroke="url(#linearGradient)"
          strokeWidth={2}
          dot={false}
        />
        <text
          x={25}
          y={38}
          dominantBaseline="hanging"
          fontSize="clamp(0.9rem, 1vw, 18px)"
          fill="#F5F5F5"
        >
          Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}

LineChartGraphic.propTypes = {
  user: PropTypes.object,
};

export default LineChartGraphic;
