import React from "react";
import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Component that render the bar chart
 * It shows the weight and the calories burned by the user
 * @param {{object}} user Current user on website
 * @returns void
 */
function BarChartGraphic({ user }) {
  const data = [
    {
      name: "1",
      kg: user.sessions[0].kilogram,
      kcal: user.sessions[0].calories,
    },
    {
      name: "2",
      kg: user.sessions[1].kilogram,
      kcal: user.sessions[1].calories,
    },
    {
      name: "3",
      kg: user.sessions[2].kilogram,
      kcal: user.sessions[2].calories,
    },
    {
      name: "4",
      kg: user.sessions[3].kilogram,
      kcal: user.sessions[3].calories,
    },
    {
      name: "5",
      kg: user.sessions[4].kilogram,
      kcal: user.sessions[4].calories,
    },
    {
      name: "6",
      kg: user.sessions[5].kilogram,
      kcal: user.sessions[5].calories,
    },
    {
      name: "7",
      kg: user.sessions[6].kilogram,
      kcal: user.sessions[6].calories,
    },
  ];

  /**
   * Function that render a custom tooltip on mouse hovering the graph
   * @param {string} label Name of the selected data
   * @param {boolean} active Becomes true when the user mouse hover the graph
   * @returns void
   */
  const CustomTooltip = ({ label, active }) => {
    if (active) {
      return (
        <div
          style={{
            backgroundColor: "#e60000",
            color: "white",
            width: "80px",
            height: "120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <p>{user.sessions[label - 1].kilogram}kg</p>
          <p>{user.sessions[label - 1].calories}Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="92%">
      <BarChart
        data={data}
        margin={{
          top: 35,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid
          strokeDasharray="4 3"
          vertical={false}
          horizontalPoints={[263, 135]}
        />
        <XAxis dataKey="name" tickLine={false} tickMargin={20} />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickMargin={20}
          tickCount={3}
        />
        <Tooltip content={<CustomTooltip />} offset={30} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          height={110}
          formatter={(value, entry, index) => (
            <span style={{ color: "black" }}>{value}</span>
          )}
        />

        <Bar
          name=" Poids (kg)"
          dataKey="kg"
          fill="#282d30"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />

        <Bar
          name=" Calories brûlées (kCal)"
          dataKey="kcal"
          fill="#e60000"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <text
          x={30}
          y={38}
          dominantBaseline="hanging"
          fontSize="17"
          fontWeight="bold"
        >
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartGraphic.propTypes = {
  user: PropTypes.object,
};

export default BarChartGraphic;
