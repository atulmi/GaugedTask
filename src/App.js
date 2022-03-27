import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { Bar } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';


import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const incomePerMonthTable = [
  {quarter: "Q1", revenue: 2000, expenses: 3000, profit: -1000},
  {quarter: "Q2", revenue: 500, expenses: 200, profit: 300},
  {quarter: "Q3", revenue: 1200, expenses: 500, profit: 700},
  {quarter: "Q4", revenue: 3000, expenses: 3250, profit: -250},
 
];

const barChartData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Revenue per month in $ dollars",
      data: [incomePerMonthTable[0].revenue, incomePerMonthTable[1].revenue, incomePerMonthTable[2].revenue, incomePerMonthTable[3].revenue],
      backgroundColor: ["blue", "blue", "blue", "blue"],
    },

    {
      label: "Expenses per month in $ dollars",
      data: [incomePerMonthTable[0].expenses, incomePerMonthTable[1].expenses, incomePerMonthTable[2].expenses, incomePerMonthTable[3].expenses],
      backgroundColor: ["orange", "orange", "orange", "orange"],
    },

    {
      label: "Profit per month in $ dollars",
      data: [incomePerMonthTable[0].profit, incomePerMonthTable[1].profit, incomePerMonthTable[2].profit, incomePerMonthTable[3].profit],
      backgroundColor: [incomePerMonthTable[0].profit >= 0 ? "green" : "red", incomePerMonthTable[1].profit >= 0 ? "green" : "red", incomePerMonthTable[2].profit >= 0 ? "green" : "red", incomePerMonthTable[3].profit >= 0 ? "green" : "red"],
    },
  ],
};

const doughnutChartData = {
  labels: ["Q1 Profit", "Q2 Profit", "Q3 Profit", "Q4 Profit"],
  datasets: [
    {
      label: "Profit per month in $ dollars",
      data: [incomePerMonthTable[0].profit, incomePerMonthTable[1].profit, incomePerMonthTable[2].profit, incomePerMonthTable[3].profit],
      backgroundColor: [incomePerMonthTable[0].profit >= 0 ? "green" : "red", incomePerMonthTable[1].profit >= 0 ? "green" : "red", incomePerMonthTable[2].profit >= 0 ? "green" : "red", incomePerMonthTable[3].profit >= 0 ? "green" : "red"],
    },
  ],
};

function App() {
  return (
    <div>
      <Container className="App">
        <Row>
          <Col>
        <Bar
          data={barChartData}
          height={600}
          width={600}

          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 20,
              },
            },
          }}
        /></Col>

        <Col>
        <Table responsive size="sm" striped bordered hover style = {{borderColor: "black", boxShadow: "7px 3px 7px 3px black"}}>
          <thead>
        <tr>
          <th>Quarter</th>
          <th>Revenue per month ($)</th>
          <th>Expenses per month ($)</th>
          <th>Profit per month ($)</th>
        </tr>
        </thead>
        <tbody>
        {incomePerMonthTable.map((entry, key) => {
          return (
            <tr key={key}>
              <td>{entry.quarter}</td>
              <td>{entry.revenue}</td>
              <td>{entry.expenses}</td>
              <td>{entry.profit}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      <br/>

      <Doughnut data ={doughnutChartData}></Doughnut>

      </Col>     
        </Row>

      </Container>

      
    </div>
  );
}
  
export default App;