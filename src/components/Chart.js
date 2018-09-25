import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({ reviews }) {
  const ratings = reviews.map(rating => rating.rating);
  // let amount1Star = ratings.forEach();
  // const dataArray = `[
  //   {
  //     x: 1,
  //     y: ${amount1Star}
  //   },
  //   {
  //     x: 2,
  //     y: ${amount2Star}
  //   },
  //   {
  //     x: 3,
  //     y: ${amount3Star}
  //   },
  //   {
  //     x: 4,
  //     y: ${amount4Star}
  //   },
  //   {
  //     x: 5,
  //     y: ${amount5Star}
  //   },
  // ]`;

  // const options = {
  //   xAxis: {
  //     categories: [1, 2, 3, 4, 5],
  //     title: {
  //       text: "Ratings"
  //     }
  //   },
  //   yAxis: {
  //     title: {
  //       text: "Amount"
  //     }
  //   },
  //   title: {
  //     text: "User Ratings"
  //   },
  //   series: [
  //     {
  //       type: "column",
  //       data: dataArray
  //     }
  //   ]
  // };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="chart"
        // options={options}
      />
    </div>
  );
}

export default Chart;
