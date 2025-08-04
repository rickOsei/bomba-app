import { StaticImageData } from "next/image";
import {
  AccessBank,
  // Evolve,
  IdentityPass,
  Paga,
  RailBank,
  Solid,
  // Stitch,
  Thunes,
  Truelayer,
  Truenarrative,
  VFD,
} from "../images";

interface Partner {
  id: string;
  name: string;
  logo: StaticImageData;
}

export const partners: Partner[] = [
  {
    id: "vfd",
    name: "VFD Microfinance Bank",
    logo: VFD,
  },
  {
    id: "thunes",
    name: "Thunes",
    logo: Thunes,
  },
  {
    id: "truelayer",
    name: "TrueLayer",
    logo: Truelayer,
  },

  {
    id: "access",
    name: "Access Bank",
    logo: AccessBank,
  },
  {
    id: "railsr",
    name: "Railsr",
    logo: RailBank,
  },
  {
    id: "trunarrative",
    name: "Trunarrative",
    logo: Truenarrative,
  },
  {
    id: "paga",
    name: "Paga",
    logo: Paga,
  },
  {
    id: "solid",
    name: "Solid",
    logo: Solid,
  },
  {
    id: "identitypass",
    name: "IdentityPass",
    logo: IdentityPass,
  },
  // {
  //   id: "evolve",
  //   name: "Evolve Bank & Trust",
  //   logo: Evolve,
  //   logoHover: Evolve,
  //   category: "Banking",
  // },
  // {
  //   id: "stitch",
  //   name: "Stitch",
  //   logo: Stitch,
  //   logoHover: Stitch,
  //   category: "Payment Infrastructure",
  // },
];
