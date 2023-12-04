export interface Project {
    _id: string;
    name: string;
    urlImage?: string;
    date?: Date;
    customer: string;
    urlWebsite: string;
    location: string;
    description: string;
    userId: string;
    price?: string;
}
