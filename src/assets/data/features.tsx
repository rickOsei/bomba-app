import {
  BrandsImage,
  ExpressImage,
  PeerPeerImage,
  ReferImage,
} from "../images";
import { StaticImageData } from "next/image";

interface Feature {
  id: string;
  title: string;
  header: string;
  description: string;
  image: StaticImageData;
  bgColor: string;
  gradient: string;
  button: string;
  heightIncrease: boolean;
  marginReverse: boolean;
  comingSoon: boolean;
}

export const features: Feature[] = [
  {
    id: "swap",
    header: "Swap",
    title: "Peer to peer marketplace",
    description:
      "Create and accept offers at your preferred rates. Our P2P marketplace connects you directly with other users for the best exchange rates.",
    image: PeerPeerImage,
    bgColor: "rgb(109, 72, 255,0.1)",
    gradient: "from-purple-50 to-purple-100",
    button: "Swap now",
    heightIncrease: false,
    marginReverse: false,
    comingSoon: false,
  },
  {
    id: "express",
    header: "Express",
    title: "Take the express lane",
    description:
      "Send money instantly using our Express service. Get real-time exchange rates and immediate transfers to your recipients.",
    image: ExpressImage,
    bgColor: "rgb(4, 206, 157,0.1)",
    gradient: "from-green-50 to-green-100",
    button: "Send now",
    heightIncrease: true,
    marginReverse: false,
    comingSoon: false,
  },
  {
    id: "refer",
    header: "Refer & Earn",
    title: "Make money while you refer",
    description:
      "Earn rewards for every successful referral. Share Bomba with friends and family and get paid for each new user who joins.",
    image: ReferImage,
    bgColor: "rgb(110, 128, 163,0.1)",
    gradient: "from-white to-gray-50",
    button: "Refer now",
    heightIncrease: true,
    marginReverse: true,
    comingSoon: false,
  },
  {
    id: "connect",
    header: "Bomba Connect",
    title: "Deals from top brands",
    description:
      "Access exclusive deals and discounts from leading brands. Save money on shopping, travel, and everyday purchases.",
    image: BrandsImage,
    bgColor: "rgb(239, 132, 92,0.1)",
    gradient: "from-orange-50 to-orange-100",
    button: "Explore now",
    heightIncrease: false,
    marginReverse: false,
    comingSoon: true,
  },
];
