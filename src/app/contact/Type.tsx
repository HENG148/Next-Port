import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

export interface ContactFormInput {
  user_name: string;
  user_email: string;
  phone: string;
  message: string;
}

export interface InfoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const infos: InfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+855) 17 540 260'
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: 'rongsokheng148@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: 'Phnom Penh Tmei, Sen Sok, Phnom Penh'
  }
];