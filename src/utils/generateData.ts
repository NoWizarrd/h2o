import { faker } from '@faker-js/faker';
import { DataItem, DataSumType, DivisionType, GeneratedData, OperationType } from '../types/DataTypes';


function getRandomDateIn2024(): string {
  const start = new Date(2024, 0, 1); 
  const end = new Date(2024, 11, 31); 
  const randomDate = faker.date.between({ from: start, to: end });
  return randomDate.toISOString();
}

function getRandomAmount(): string {
  return faker.number.int({ min: -100000, max: 100000 }).toString();
}

function getRandomOperationType(): OperationType {
  const types: OperationType[] = ['expanses', 'income', 'revenue', 'debt'];
  return faker.helpers.arrayElement(types);
}

function getRandomDivision(): DivisionType {
  const divisions: DivisionType[] = ['B2B', 'B2C'];
  return faker.helpers.arrayElement(divisions);
}

export function generateData(count: number): GeneratedData {
  const data: DataItem[] = [];

  for (let i = 0; i < count; i++) {
    const item: DataItem = {
      division: getRandomDivision(),
      date: getRandomDateIn2024(),
      amount: getRandomAmount(),
      type: getRandomOperationType(),
    };
    data.push(item);
  }

  return { data };
}

export function calculateSumByDivision(data: DataItem[]): DataSumType {
    const sums: DataSumType = {
      B2B: 0,
      B2C: 0,
    };
  
    for (const item of data) {
      const amount = parseInt(item.amount, 10); 
      sums[item.division] += amount;
    }
  
    return sums;
  }
  
  
  // Пример использования
//   const generatedData = generateData(100);
//   const sumsByDivision = calculateSumByDivision(generatedData.data); 