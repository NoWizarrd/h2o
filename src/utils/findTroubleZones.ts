import { DataItem } from '../types/DataTypes';

export const findTroubleZones = (data: DataItem[], limit: number = 10000): number[] => {
  const filteredExpenses = data
    .filter((item) => item.type === 'expanses' && parseInt(item.amount, 10) > limit)
    .map((item) => parseInt(item.amount, 10));

    return filteredExpenses.slice(0, 10);
};