export interface Simulator {
    id?: string;
    profile_id: string;
    cryptocurrency: string;
    dateRecorded: Date;
    euros: number;
    price: number;
    quantity: number;
}