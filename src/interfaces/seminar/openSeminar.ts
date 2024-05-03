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
    seminars: OpenDetailSeminar[];
}

export interface OpenDetailSeminar {
    id: number;
    presenter: string;
    seminar_title: string;
    presenter_role: string;
    presenter_image_url: string;
}
  