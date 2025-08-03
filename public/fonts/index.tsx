import localFont from "next/font/local";

const PushPenny = localFont({
  src: [
    {
      path: "./PushPenny-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./PushPenny-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./PushPenny-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./PushPenny-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./PushPenny-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export default PushPenny;
