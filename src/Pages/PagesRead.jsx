import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

const PagesRead = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <LineChart
      width={1400}
      height={1000}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="review_quantity" stroke="#8884d8" />
      <Line type="monotone" dataKey="page_number" stroke="#82ca9d" />
    </LineChart>
  );
};

export default PagesRead;
