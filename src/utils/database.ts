// utils/database.ts

export interface SalaryPayment {
    id: number;
    workerName: string;
    salaryAmount: number;
    paymentTime: string;
    workerType: 'casual' | 'monthly';
    balanceTime?: string;
}
  
export interface MilkProduction {
    id: number;
    productionDate: string;
    milkQuantity: number;
    additionalDetails?: string;
}
  
export const salaryPayments: SalaryPayment[] = [];
export const milkProductions: MilkProduction[] = [];
  