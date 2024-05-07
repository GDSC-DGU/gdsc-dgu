import { SeminarThumbnail } from "./seminarThumbnail";

export interface OpenSeminar {
    id: number;
    flag: number;
    type: string;
    seminar_opening_date: string;
    seminar_month_date: string;
    location: string;
    description: string;
    information: string;
    image_url: string;
    status: boolean;
    seminars: SeminarThumbnail[];
}