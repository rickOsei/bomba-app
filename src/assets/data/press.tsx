import {
  CardIconFive,
  CardIconFour,
  CardIconOne,
  CardIconSix,
  CardIconThree,
  CardIconTwo,
  CardImage,
  CardImageThree,
  CardImageFive,
  CardImageTwo,
  CardImageFour,
} from "@/assets/images";
import { StaticImageData } from "next/image";

interface PressArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  image: StaticImageData;
  link: string;
  icon: StaticImageData;
}
export const pressArticles: PressArticle[] = [
  {
    id: "1",
    category: "Press Release",
    title: "Combining AI, fintech to solve African problems - Ericsson",
    date: "December 18, 2021",
    image: CardImage,
    link: "#",
    icon: CardIconOne,
  },
  {
    id: "2",
    category: "News",
    title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    date: "May 24, 2022",
    image: CardImageTwo,
    link: "#",
    icon: CardIconTwo,
  },
  {
    id: "3",
    category: "Techstars",
    title: "Midterm Report: Techstars Toronto's Second 2021 Class",
    date: "Dec 06, 2021",
    image: CardImageThree,
    link: "#",
    icon: CardIconThree,
  },
  {
    id: "4",
    category: "News",
    title:
      "Wise granted approval to join Zengin, Japan's domestic payment system",
    date: "December 06, 2021",
    image: CardImageFour,
    link: "#",
    icon: CardIconFour,
  },
  {
    id: "5",
    category: "Techstars",
    title:
      "African startups to participate at Techstars Toronto October 2021 cohort",
    date: "October 23, 2021",
    image: CardImageFive,
    link: "#",
    icon: CardIconFive,
  },
  {
    id: "6",
    category: "TechCrunch",
    title: "More African startups get into Techstars Toronto",
    date: "October 18, 2021",
    image: CardImageFive,
    link: "#",
    icon: CardIconSix,
  },
];
