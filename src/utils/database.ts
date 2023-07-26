// utils/database.ts

export interface Users {
    name: string;
    surname: string;
    salary: number;
    timeRecorded: string;
    workerType: 'casual' | 'monthly';
    balanceTime: string | null;
  }
  
const Famers: Users[] = [
    {
      name: 'John',
      surname: 'Doe',
      salary: 1500,
      timeRecorded: '2023-07-25',
      workerType: 'monthly',
      balanceTime: null
    },
    {
      name: 'Jane',
      surname: 'Smith',
      salary: 1200,
      timeRecorded: '2023-07-25',
      workerType: 'casual',
      balanceTime: '2023-08-15'
    },
    // Add more users here...
    {
      name: 'Michael',
      surname: 'Johnson',
      salary: 1800,
      timeRecorded: '2023-07-25',
      workerType: 'monthly',
      balanceTime: null
    }
    // Add more users here...
];
export interface MilkProduction {
    id: number;
    productionDate: string;
    milkQuantity: number;
    additionalDetails?: string;
}
  
export {Famers};
export const milkProductions: MilkProduction[] = [];
  