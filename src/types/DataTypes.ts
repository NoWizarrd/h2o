export type OperationType = 'expanses' | 'income' | 'revenue' | 'debt';
export type DivisionType = 'B2B' | 'B2C';

export interface DataItem {
  division: DivisionType;
  date: string;
  amount: string;
  type: OperationType;
}

export interface GeneratedData {
  data: DataItem[];
}

export interface DataSumType {
    B2B: number;
    B2C: number;
  }