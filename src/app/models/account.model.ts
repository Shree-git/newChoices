export interface Account{
    id?: string;
    fName: string;
    lName: string;
    role?: string;
    darkTheme?: boolean;
    clients?: string[];
    mobileNumber?: string;
}