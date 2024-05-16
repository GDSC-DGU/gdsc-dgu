import { SeminarReview } from "./seminarReview";

export interface SeminarThumbnail {
    id: string;
    flag: number;
    type: string;
    topic: string;
    date: string;
    location: string;
    title: string;
    description: string;
    seminar_image_url: string;
    pdf_url: string;
}
  