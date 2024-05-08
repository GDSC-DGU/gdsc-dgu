import { SeminarThumbnail } from "./seminarThumbnail";

export interface OpenSeminar {
    id: string;
    flag: number;
    type: string;
    date: string;
    location: string;
    title: string,
    description: string;
    image_url: string;
    status: boolean;
    seminars: Relation[];
}

export interface OpenSeminarInfo {
    id: number;
    open_seminar_id: string;
    information: string;
}

export interface Relation {
    id: string;
}

export interface OpenSeminarDetailSeminar {
    id: number;
    seminar_id: string;
    member_id: string;
    member_name: string;
    member_role: string;
    member_profile_image: string;
    seminar_title: string;
}