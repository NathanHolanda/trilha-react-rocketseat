export interface Transaction{
    id: number,
    title: string,
    type: 'gain' | 'expense',
    category: string,
    value: number,
    createdAt: Date,
}