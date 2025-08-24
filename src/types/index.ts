// Common interfaces used across components
export interface InsuranceProduct {
  name: string;
  provider: string;
  description: string;
  monthlyPrice: number;
  benefits: string[];
  url: string;
}

export interface CoveragePlan {
  provider: string;
  planName: string;
  hospital: boolean;
  specialist: boolean;
  gp: boolean;
  dental: boolean;
  optical: boolean;
  physio: boolean;
  mental: boolean;
  alternative: boolean;
  overseas: boolean;
  price: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface BreadcrumbItem {
  path: string;
  label: string;
}