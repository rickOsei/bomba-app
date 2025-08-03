export default function PhoneImage() {
  return (
    <svg
      width="298"
      height="auto"
      viewBox="0 0 386 702"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_5101_107140)">
        <rect
          x="85.9961"
          y="3.89893"
          width="298"
          height="612.57"
          rx="36"
          fill="#63C57B"
        />
      </g>
      <rect
        x="95.7266"
        y="12.8418"
        width="278.537"
        height="593.896"
        rx="30"
        fill="#F6F6F6"
      />
      <mask
        id="mask0_5101_107140"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="95"
        y="12"
        width="280"
        height="595"
      >
        <rect
          x="95.7266"
          y="12.8418"
          width="278.537"
          height="593.896"
          rx="30"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_5101_107140)">
        <rect
          x="92.7734"
          y="-2.04102"
          width="284.445"
          height="620.461"
          fill="#233375"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_5101_107140"
          x="-0.00390625"
          y="0.898926"
          width="386"
          height="700.57"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="6"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_5101_107140"
          />
          <feOffset dx="-42" dy="41" />
          <feGaussianBlur stdDeviation="19" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_5101_107140"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_5101_107140"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
