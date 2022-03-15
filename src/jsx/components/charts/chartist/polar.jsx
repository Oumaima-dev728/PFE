import React from 'react'
import ChartistGraph from 'react-chartist'

function PolarChart() {
  var data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5],
    ],
  }

  var options = {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
	height: 250,
    axisX: {
      showLabel: false,
      showGrid: false,
    },
  }

  var type = 'Line'

  return (
    <>
      <ChartistGraph data={data} options={options} type={type} />
    </>
  )
}

export default PolarChart
