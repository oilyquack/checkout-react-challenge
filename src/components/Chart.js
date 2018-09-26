import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({ reviews }) {
  const ratings = reviews.map(rating => rating.rating);
  const defaultSeries = [
    { y: 0, color: "red" },
    { y: 0, color: "blue" },
    { y: 0, color: "green" },
    { y: 0, color: "orange" },
    { y: 0, color: "purple" }
  ];

  const series = ratings.reduce((acc, rating) => {
    acc[rating - 1].y++;
    return acc;
  }, defaultSeries);

  const options = {
    chart: {
      type: "bar",
      width: 400,
      height: 268
    },
    title: {
      text: "Reviews"
    },
    xAxis: {
      categories: ["1", "2", "3", "4", "5"]
    },
    series: [{ data: series }]
  };

  return (
    <div className="app__input__chart">
      {!!reviews.length && (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="chart"
          options={options}
        />
      )}
    </div>
  );
}

export default Chart;
