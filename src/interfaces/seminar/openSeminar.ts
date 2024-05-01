export interface OpenSeminar {
    id: number;
    flag: number;
    type: string;
    date: string;
    opening_date: string;
    closing_data: string;
    location: string;
    title: string;
    description: string;
    information: string;
    image_url: string;
    status: boolean;
    seminars: OpenDetailSeminar[];
}

export interface OpenDetailSeminar {
    id: number;
    presenter: string;
    seminar_title: string;
    presenter_role: string;
    presenter_image_url: string;
}
  