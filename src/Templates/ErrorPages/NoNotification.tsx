import React from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
const NoNotification = ({
  title,
  buttonText,
  description,
  onClick,
  icon,
  image,
}: NoNotificationI): JSX.Element => {
  const svg = (
    <svg
      style={{ maxWidth: "500px" }}
      width="100%"
      height="401"
      viewBox="0 0 500 401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M188.567 152.415C185.029 149.166 182.391 144.975 182.129 139.949C181.373 125.467 201.748 126.172 206.526 132.941C211.304 139.711 213.099 158.15 208.233 160.062C206.292 160.824 201.868 160.083 197.202 157.998L202.298 176.956L186.196 178.933L188.567 152.415Z"
        fill="#915B3C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M196.322 125.716C194.157 125.629 188.414 126.091 187.36 126.22C186.687 126.303 185.976 126.547 185.501 125.977C185.112 125.511 185.127 124.64 184.957 124.064C184.76 123.396 184.516 122.741 184.271 122.089C183.574 120.234 182.651 118.5 181.462 116.912C179.231 113.933 176.231 111.753 172.654 110.709C168.704 109.557 164.413 109.709 160.417 110.531C156.141 111.412 152.406 113.317 148.493 115.16C144.764 116.916 140.756 117.919 136.615 117.793C132.443 117.667 129.076 115.828 125.363 114.145C121.563 112.423 117.349 111.508 113.208 112.346C109.344 113.128 105.945 115.18 102.983 117.729C100.211 120.113 98.0178 122.842 97.0302 126.424C95.9676 130.278 96.4634 134.304 99.3492 137.24C103.532 141.496 110.376 141.889 115.93 141.084C119.143 140.619 122.235 139.643 125.145 138.2C129.026 136.275 132.234 133.426 135.788 130.998C137.456 129.859 139.204 128.877 141.066 128.095C142.874 127.337 144.688 126.868 146.522 127.791C148.462 128.767 150.214 129.745 152.357 130.242C154.413 130.719 156.547 130.865 158.642 130.592C162.718 130.059 166.584 128.294 170.441 126.956C173.587 125.865 176.96 124.749 180.336 125.012C181.745 125.121 183.823 125.45 184.495 126.817C176.325 129.358 174.312 140.095 177.599 147.392C179.373 151.33 187.603 155.179 190.311 152.661C192.026 151.066 190.663 149.416 189.778 148.325C188.084 146.236 187.242 143.388 189.67 141.49C191.764 139.854 194.537 142.789 194.582 142.78C195.197 142.655 200.193 138.959 203.349 134.074C207.025 133.842 207.283 131.368 206.17 129.507C205.057 127.646 199.314 125.837 196.322 125.716Z"
        fill="#191847"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.708 234.2L216.47 319.525L228.116 383.589H239.806L228.137 234.2H191.708Z"
        fill="#784931"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.581 234.2C182.308 278.526 181.627 302.703 181.24 306.73C180.853 310.757 178.658 337.729 163.699 384.941H175.857C195.668 339.649 202.584 312.677 204.856 306.73C207.128 300.783 213.839 276.606 223.637 234.2H180.581Z"
        fill="#915B3C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.177 234.2C197.618 263.561 208.758 310.428 224.596 374.801H241.694C242.957 308.728 237.585 265.241 228.282 234.2H191.177Z"
        fill="#2F3676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.494 234.2C182.186 278.526 177.801 322.196 164.217 375.492H182.459C202.307 330.876 216.532 287.422 226.254 234.2H180.494Z"
        fill="#5C63AB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M161.966 393.729L162.637 382.913C166.564 384.062 171.484 383.611 177.395 381.561C183.751 386.064 191.753 389.138 201.4 390.784C202.136 390.91 202.631 391.608 202.505 392.344C202.497 392.392 202.486 392.439 202.473 392.486L201.546 395.757H177.395H163.308L161.966 393.729Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M225.507 393.729L226.178 382.913C230.105 384.062 235.025 383.611 240.936 381.561C247.292 386.064 255.294 389.138 264.941 390.784C265.677 390.91 266.172 391.608 266.046 392.344C266.038 392.392 266.027 392.439 266.014 392.486L265.087 395.757H240.936H226.849L225.507 393.729Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M247.531 218.855L271.515 230.704C277.548 231.242 282.701 232.327 286.973 233.959C288.032 234.63 289.432 236.119 285.595 236.496C281.759 236.872 277.74 237.441 277.445 238.824C277.151 240.207 279.714 241.347 278.965 243.276C278.466 244.561 274.627 242.235 267.448 236.298L244.883 231.286L247.531 218.855ZM166.095 233.769L180.016 231.371C176.316 260.614 174.273 276.144 173.888 277.962C173.02 282.051 177.305 287.29 179.25 290.169C175.068 293.001 174.225 285.392 168.968 289.066C164.169 292.42 160.97 297.528 154.273 294.866C153.45 294.539 152.332 292.957 154.06 291.262C158.366 287.04 164.388 279.918 165 277.815C165.836 274.947 166.201 260.265 166.095 233.769Z"
        fill="#915B3C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M195.336 168.424L200.919 166.422C225.53 181.106 240.552 215.004 270.042 229.165L265.118 238.086C218.71 240.471 199.83 199.222 195.336 168.424Z"
        fill="#1F28CF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M182.998 245.189C206.079 241.119 223.057 238.126 233.932 236.208C236.259 235.798 235.228 232.514 234.593 230.878C227.259 211.991 208.381 193.566 203.469 165.706L188.371 165.993C179.665 187.679 179.706 212.483 182.998 245.189Z"
        fill="#DDE3E9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M173.414 188.438C171.172 188.201 169.23 187.068 167.588 185.04C160.509 176.298 161.508 170.621 166.938 167.856C172.367 165.09 178.122 167.8 187.265 166.188C187.762 166.1 188.223 166.051 188.648 166.04L193.293 165.492C214.375 207.887 223.275 237.083 219.995 253.08L179.906 260.149C178.507 266.106 177.056 271.167 175.552 275.331L164.629 277.257C157.74 244.198 160.668 214.592 173.414 188.438Z"
        fill="#1F28CF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M184.586 235.641C187.707 245.968 191.106 253.263 194.783 257.525L179.906 260.149C181.538 253.2 183.097 245.03 184.586 235.641L184.586 235.641Z"
        fill="black"
        fillOpacity="0.1"
      />
      <ellipse cx="250" cy="397.062" rx="227" ry="2.98684" fill="#C3C5C9" />
      <path
        d="M280.153 0L275.295 3.14356L281.868 13.1458L276.153 19.4329L281.868 32.2929L280.153 20.2902L285.583 13.1458L280.153 0Z"
        fill="#EC5B51"
      />
      <path
        d="M250.147 13.1458L242.716 14.8605L241.859 28.5778L253.29 25.4343L251.29 31.4356L268.436 40.0089L255.576 29.4351L258.148 19.4329L247.86 21.1476L250.147 13.1458Z"
        fill="#EC5B51"
      />
      <path
        d="M233 55.7267L235.572 48.0107L241.859 53.7263L251.29 44.2956L258.148 53.7263L251.29 49.4396L242.716 60.2992L233 55.7267Z"
        fill="#EC5B51"
      />
      <path
        d="M350.169 186.328C350.169 187.09 349.94 188.671 349.026 188.9"
        stroke="#EC5B51"
      />
      <path
        d="M314.853 186.005C315.272 187.293 316.467 189.861 317.897 189.823"
        stroke="#EC5B51"
      />
      <path
        d="M351.685 185.12C351.936 185.657 352.294 186.847 351.724 187.309"
        stroke="#EC5B51"
      />
      <path
        d="M312.842 185.183C312.725 186.143 312.769 188.17 313.886 188.598"
        stroke="#EC5B51"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M331.594 41.152C324.965 41.152 319.591 46.5258 319.591 53.1547H344.168C344.168 46.5258 338.794 41.152 332.165 41.152H331.594ZM331.593 45.1522C327.174 45.1522 323.592 48.7347 323.592 53.154H340.167C340.167 48.7347 336.584 45.1522 332.165 45.1522H331.593Z"
        fill="#FE617A"
      />
      <ellipse
        cx="332.737"
        cy="181.468"
        rx="14.0031"
        ry="10.5738"
        fill="#F6CECB"
      />
      <path
        d="M286.33 96.4711C286.391 70.9524 307.095 50.2975 332.614 50.2975C357.32 50.2975 377.67 69.7018 378.845 94.3798L379.099 99.7137C379.435 106.763 380.427 113.766 382.061 120.632L392.22 163.297C393.13 167.121 390.647 170.93 386.783 171.65C351.007 178.322 314.243 178.333 278.466 171.662C274.578 170.937 272.104 167.084 273.064 163.246L283.224 122.604C285.266 114.439 286.308 106.056 286.328 97.6398L286.33 96.4711Z"
        fill="#EC5B51"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M340.559 176.552C301.869 137.677 319.592 80.1184 336.498 50.4581C335.217 50.3515 333.922 50.2971 332.614 50.2971C307.095 50.2971 286.391 70.952 286.33 96.4707L286.328 97.6394C286.308 106.056 285.266 114.438 283.224 122.603L273.064 163.246C272.104 167.084 274.578 170.936 278.466 171.661C298.963 175.484 319.785 177.112 340.559 176.552Z"
        fill="url(#paint0_linear_3744_24165)"
      />
      <path
        d="M280.439 134.316L281.317 134.506C315.585 141.915 351.038 141.948 385.32 134.602L387.606 143.461C351.792 151.001 314.808 151.078 278.963 143.687L277.867 143.461L280.439 134.316Z"
        fill="#F5F5F5"
      />
      <path
        d="M277.01 147.461C311.891 155.003 347.942 155.368 382.968 148.533L388.463 147.461L390.75 156.606L385.238 157.641C348.685 164.505 311.142 164.154 274.724 156.606L277.01 147.461Z"
        fill="#F5F5F5"
      />
      <circle cx="291.584" cy="64.3006" r="23.148" fill="#FFF4F4" />
      <path
        d="M314.733 64.2995C314.733 77.0838 304.369 87.4475 291.585 87.4475C278.8 87.4475 268.437 77.0838 268.437 64.2995C268.437 51.5152 278.8 41.1514 291.585 41.1514C304.369 41.1514 314.733 51.5152 314.733 64.2995Z"
        fill="#E2AFAC"
      />
      <ellipse cx="293.581" cy="64" rx="21.5" ry="23" fill="#FFF4F4" />
      <path
        d="M289.081 48.0116H297.654L295.368 70.8738H291.367L289.081 48.0116Z"
        fill="#EC5B51"
      />
      <circle cx="293.367" cy="77.4461" r="3.71512" fill="#EC5B51" />
      <defs>
        <linearGradient
          id="paint0_linear_3744_24165"
          x1="305.636"
          y1="40.0786"
          x2="305.636"
          y2="206.001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8277" />
          <stop offset="1" stopColor="#EC5B51" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="mt-30">
      <Card>
        <FlexLayout direction="vertical" halign="center" spacing="extraLoose">
          <FlexLayout halign="center" spacing="loose">
            {image ? image : svg}
          </FlexLayout>
          <FlexLayout
            direction="vertical"
            valign="center"
            spacing="mediumTight"
          >
            <TextStyles
              fontweight="extraBold"
              textcolor="dark"
              type="neutralText"
            >
              {title}
            </TextStyles>
            <FlexLayout direction="vertical" valign="center" wrap="noWrap">
              <TextStyles textcolor="light" type="simpleText">
                {description}
              </TextStyles>
            </FlexLayout>

            <FlexLayout>
              <Button
                icon={icon}
                iconAlign="left"
                iconRound={false}
                thickness="thin"
                type="Primary"
                onClick={onClick}
              >
                {buttonText}
              </Button>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
      </Card>
    </div>
  );
};
export interface NoNotificationI {
  title?: string;
  buttonText?: string;
  description?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  image?: any;
}
export default NoNotification;