import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(1) > text {
    transform: translateY(-5px);
  }
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(2) > text,
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(3) > text {
    transform: translateX(5px);
  }
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(4) > text {
    transform: translateY(15px);
  }
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(5) > text,
  g.recharts-layer.recharts-polar-angle-axis > g > g:nth-child(6) > text {
    transform: translateX(-5px);
  }
`;

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
    <StyledContainer>
      <ResponsiveContainer width="98%" height="98%">
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
    </StyledContainer>
  );
}

RadarChartGraphic.propTypes = {
  user: PropTypes.object,
};

export default RadarChartGraphic;
