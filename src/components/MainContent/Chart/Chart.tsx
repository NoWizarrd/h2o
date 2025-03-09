import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { GeneratedData } from '../../../types/DataTypes';
import { groupDataByMonth } from '../../../utils/GroupDataByMonth';
import styles from './Chart.module.scss'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

interface ChartComponentProps {
  data: GeneratedData;
}

function ChartComponent(props: ChartComponentProps): React.ReactNode {
  const { data: generatedData } = props;
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [activePeriod, setActivePeriod] = useState('Год'); 
  const groupedData = groupDataByMonth(generatedData.data);

  const labels = groupedData.map((item) => item.month);
  const b2bData = groupedData.map((item) => item.B2B);
  const b2cData = groupedData.map((item) => item.B2C);
  const allData = groupedData.map((item) => item.B2C + item.B2B);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'B2B',
                data: b2bData,
                borderColor: '#2ecc71',
                fill: false,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
              },
              {
                label: 'B2C',
                data: b2cData,
                borderColor: '#3498db',
                fill: false,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
              },
              {
                label: 'Итог',
                data: allData,
                borderColor: '#8e44ad',
                fill: false,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 40,
                  font: {family: 'Proxima Nova Rg', size: 16}
                },
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                titleFont: { size: 14 },
                bodyFont: { size: 14 },
                padding: 10,
                borderColor: '#ffffff',
                borderWidth: 1,
                displayColors: false,
              },
            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false,
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                title: {
                  display: false,
                },
              },
              y: {
                grid: {
                  color: 'rgba(200, 200, 200, 0.2)',
                },
                title: {
                  display: false,
                },
                suggestedMin: -100000,
                suggestedMax: 100000,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, b2bData, b2cData, allData]);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <h3 className={styles.header}>Общая статистика</h3>
        <div className={styles.buttonGroup}>
          {['Неделя', 'Месяц', 'Год'].map((period) => (
            <button
              key={period}
              className={activePeriod == period ? styles.activeBtn : styles.button}
              onClick={() => setActivePeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <canvas ref={chartRef} className={styles.chart}/>
    </div>
  );
}

export default ChartComponent;
