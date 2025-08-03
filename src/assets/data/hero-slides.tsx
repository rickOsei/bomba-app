interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  direction: "left" | "right";
  cta?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Multi-currency accounts for Africans",
    description:
      "Transact at home and abroad - create, send, hold and receive money in local and foreign currencies. Send money to and from Africa, instantly.",
    image: "/images/slide1.png",
    direction: "right",
  },
  {
    id: 2,
    title: "Choose from several payment methods",
    description:
      "With Bomba, you get to choose how you send and receive money; send at your own rate with '<span style=\"color: #63c57b;\">Swap</span>', send and receive instantly with '<span style=\"color: #63c57b;\">Express</span>', or make free local transfers with '<span style=\"color: #63c57b;\">Withdraw Money</span>'.",
    image: "/images/slide2.png",
    direction: "left",
  },
  {
    id: 3,
    title: "Accept and create offers with Swap",
    description:
      'You can send money internationally at your preferred rate on our \'<span style="color: #63c57b;">Peer-to-peer Marketplace</span> by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes.',
    image: "/images/slide3.png",
    direction: "right",
  },
  {
    id: 4,
    title: "Make instant transfers with Express",
    description:
      "When you send money using '<span style=\"color: #63c57b;\">Express</span>' - it's sent at Bomba exchange rate and your transaction is completed instantly",
    image: "/images/slide5.png",
    direction: "right",
  },
  {
    id: 5,
    title: "Review and confirm your transaction",
    description:
      "Review your transaction, ensure that the provided details are correct, then click the send button!",
    image: "/images/slide4.png",
    direction: "left",
  },

  {
    id: 6,
    title: "Completed! Fast, easy and secure",
    description:
      "Money on its way! Send money today to your friends, family or make payment to a business.",
    cta: 'Get started <span style="color: #63c57b;">→</span> ',
    image: "/images/slide6.png",
    direction: "left",
  },
];



export const newsItems = [
    {
      id: 1,
      date: "June 20, 2022",
      title: "Bomba now has a dollar wallet, activate your account",
      link: "#",
    },
    {
      id: 2,
      date: "June 01, 2022",
      title: "Top 10 Summer Vacation Places In 2022",
      link: "#",
    },
  ];