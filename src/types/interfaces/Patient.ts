export interface Patient {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthday: Date;
    address: {
        street: string;
        streetNumber: number;
        city: string;
        state: string;
    };
}
