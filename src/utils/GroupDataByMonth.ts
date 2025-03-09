import { DataItem } from "../types/DataTypes";

export const groupDataByMonth = (data: DataItem[]) => {
  const groupedData: Record<string, { B2B: number; B2C: number }> = {};

  data.forEach((item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString('default', { month: 'long' }); 
    const amount = parseInt(item.amount, 10);

    if (!groupedData[month]) {
      groupedData[month] = { B2B: 0, B2C: 0 };
    }

    groupedData[month][item.division] += amount;
  });

  return Object.entries(groupedData).map(([month, values]) => ({
    month,
    ...values,
  }));
};