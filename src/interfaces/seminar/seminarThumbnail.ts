import { SeminarReview } from "./seminarReview";

export interface SeminarThumbnail {
    id: number;
    flag: number;
    type: string;
    topic: string;
    date: string;
    location: string;
    title: string;
    description: string;
    presenter_name: string;
    presenter_role: string;
    seminar_image_url: string;
    presenter_image_url: string;
    pdf_url: string;
    reviews: SeminarReview[];
}
  