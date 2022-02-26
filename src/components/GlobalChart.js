import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function GlobalChart() {
  const daily = useSelector((state) => state.case.daily);
  const isDailyLoading = useSelector((state) => state.case.isDailyLoading);
  useEffect(() => {
    console.log(daily);
  }, [daily]);
  return (
    <Box
      w="100%"
      padding={"2.5%"}
      marginTop={50}
      h={300}
      backgroundColor={"#EA5455"}
    >
      {isDailyLoading ? null : (
        <Box
          w="100%"
          h="100%"
          display={"flex"}
          backgroundColor={"#2D4059"}
          boxShadow="#333 5px 5px;"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={500}
              data={daily}
              margin={{
                top: 30,
                right: 30,
                left: 50,
                bottom: 2,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="reportDate"
                stroke="white"
                angle={-5}
                textAnchor="end"
              />
              <YAxis stroke="white" />
              <Tooltip />
              <Legend stroke="white" />
              <Line
                type="monotone"
                dataKey="deaths.total"
                name="Deaths"
                stroke="#EA5455"
                dot={false}
                strokeWidth={3}
                activeDot={{ r: 1 }}
              />
              <Line
                type="monotone"
                dataKey="totalConfirmed"
                name="Infected"
                stroke="#F07B3F"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      )}
    </Box>
  );
}

export default GlobalChart;