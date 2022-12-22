import React from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
const PagenotFound = ({
  title,
  description,
  onClick,
  buttonText,
  icon,
  image,
}: PagenotFoundI): JSX.Element => {
  const svg = (
    <svg
      style={{ maxWidth: "500px" }}
      width="100%"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M143.524 222.662C142.282 221.672 141.293 220.402 140.636 218.956C139.98 217.51 139.674 215.929 139.745 214.343V186.521H67.9791C66.2261 186.586 64.4795 186.272 62.8592 185.6C61.2389 184.928 59.7832 183.913 58.5918 182.625C56.2445 180.142 54.9565 176.842 55.0011 173.425C54.9916 170.649 55.8086 167.933 57.348 165.622L126.087 57.5973C131.25 49.6259 138.11 45.6402 146.669 45.6402C151.27 45.4839 155.762 47.0581 159.259 50.0522C162.615 52.9858 164.293 57.347 164.293 63.1358V168.145H182.552C183.813 168.069 185.075 168.271 186.249 168.738C187.423 169.204 188.481 169.923 189.346 170.844C190.89 172.653 191.738 174.954 191.738 177.333C191.738 179.712 190.89 182.012 189.346 183.822C188.481 184.743 187.423 185.462 186.249 185.928C185.075 186.394 183.813 186.597 182.552 186.521H164.164V214.343C164.24 215.917 163.95 217.488 163.317 218.931C162.684 220.375 161.725 221.652 160.515 222.662C158.153 224.642 155.16 225.712 152.078 225.678C148.962 225.702 145.936 224.635 143.524 222.662ZM139.698 168.145V71.4554L79.5138 168.145H139.698Z"
        fill="#FE7163"
      />
      <path
        d="M243.112 223.225C236.078 220.156 229.849 215.501 224.912 209.625C219.954 203.417 216.081 196.415 213.46 188.915C210.489 180.812 208.4 172.413 207.229 163.862C206.008 154.553 205.42 145.171 205.469 135.782C205.469 73.9274 226.59 43 268.833 43C311.077 43 332.147 73.9274 332.046 135.782C332.087 145.126 331.519 154.463 330.344 163.733C329.212 172.285 327.142 180.686 324.172 188.785C321.55 196.286 317.678 203.288 312.719 209.496C307.776 215.38 301.55 220.052 294.52 223.155C286.437 226.729 277.67 228.491 268.833 228.318C259.993 228.495 251.218 226.758 243.112 223.225V223.225ZM281.319 205.472C284.853 203.964 288.061 201.784 290.765 199.053C293.502 196.138 295.752 192.802 297.43 189.173C299.28 185.327 300.777 181.321 301.9 177.204C303.084 172.718 303.946 168.154 304.482 163.545C305.116 158.46 305.538 153.802 305.749 149.57C305.96 145.338 306.062 140.742 306.054 135.782C306.054 130.58 305.953 125.777 305.749 121.373C305.546 116.968 305.104 112.243 304.423 107.198C303.839 102.593 302.957 98.0302 301.783 93.5391C300.673 89.4632 299.176 85.5025 297.312 81.7111C295.622 78.1388 293.368 74.8621 290.636 72.0069C287.948 69.3309 284.758 67.2132 281.248 65.776C273.225 62.6785 264.336 62.6785 256.313 65.776C252.829 67.196 249.662 69.294 246.996 71.9482C244.284 74.791 242.035 78.0418 240.331 81.582C238.451 85.3394 236.973 89.2843 235.919 93.3514C234.774 97.8695 233.911 102.455 233.338 107.08C232.657 112.196 232.215 116.961 232.012 121.373C231.808 125.785 231.703 130.588 231.695 135.782C231.695 140.734 231.8 145.349 232.012 149.629C232.223 153.908 232.641 158.601 233.267 163.71C233.809 168.317 234.671 172.881 235.849 177.368C236.956 181.484 238.437 185.49 240.273 189.337C241.933 192.945 244.163 196.261 246.879 199.159C249.562 201.872 252.751 204.033 256.266 205.518C264.297 208.788 273.288 208.788 281.319 205.518V205.472Z"
        fill="#FE7163"
      />
      <path
        d="M440.774 222.662C439.533 221.672 438.544 220.402 437.887 218.956C437.23 217.51 436.925 215.929 436.996 214.343V186.521H365.23C363.477 186.586 361.73 186.272 360.11 185.6C358.489 184.928 357.034 183.913 355.842 182.625C353.495 180.142 352.207 176.842 352.252 173.425C352.242 170.649 353.059 167.933 354.598 165.622L423.337 57.5973C428.453 49.6259 435.294 45.6402 443.86 45.6402C448.485 45.466 453.006 47.0414 456.522 50.0522C459.878 52.9858 461.556 57.347 461.556 63.1358V168.145H479.814C481.075 168.069 482.337 168.271 483.511 168.738C484.686 169.204 485.743 169.923 486.608 170.844C488.152 172.653 489 174.954 489 177.333C489 179.712 488.152 182.012 486.608 183.822C485.743 184.743 484.686 185.462 483.511 185.928C482.337 186.394 481.075 186.597 479.814 186.521H461.415V214.343C461.491 215.917 461.201 217.488 460.568 218.931C459.935 220.375 458.975 221.652 457.765 222.662C455.403 224.642 452.411 225.712 449.328 225.678C446.212 225.702 443.186 224.635 440.774 222.662V222.662ZM436.996 168.145V71.4554L376.811 168.145H436.996Z"
        fill="#FE7163"
      />
      <ellipse cx="239" cy="353.782" rx="227" ry="2.98684" fill="#C3C5C9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M276.917 157.041C280.052 153.361 282.173 148.852 281.819 143.799C280.797 129.241 260.532 132.444 256.59 139.792C252.648 147.139 253.116 165.777 258.211 167.091C260.243 167.614 264.571 166.331 268.976 163.676L266.211 183.238H282.538L276.917 157.041Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M278.171 160.318C280.221 151.201 286.058 144.987 285.167 140.913C284.572 138.196 282.988 136.507 280.414 135.845C279.083 130.459 274.789 128.169 267.534 128.973C256.65 130.179 250.007 134.699 252.876 144.645C255.513 144.645 258.696 143.691 263.098 145.325C264.495 145.843 265.494 147.451 266.095 150.148H268.085C270.015 146.947 271.919 145.771 273.795 146.62C275.672 147.468 276.099 149.529 275.075 152.802L276.055 160.318H278.171Z"
        fill="#191847"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M328.116 270.824H249.884C243.873 270.824 239 275.697 239 281.708V344.293C239 350.305 243.873 355.178 249.884 355.178H328.116C334.127 355.178 339 350.305 339 344.293V281.708C339 275.697 334.127 270.824 328.116 270.824ZM317.231 289.872C318.734 289.872 319.952 291.09 319.952 292.593V333.409C319.952 334.912 318.734 336.13 317.231 336.13H260.769C259.266 336.13 258.048 334.912 258.048 333.409V292.593C258.048 291.09 259.266 289.872 260.769 289.872H317.231Z"
        fill="#F6CECB"
      />
      <mask
        id="mask0_3744_25212"
        maskUnits="userSpaceOnUse"
        x="239"
        y="270"
        width="100"
        height="86"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M328.116 270.824H249.884C243.873 270.824 239 275.697 239 281.708V344.293C239 350.305 243.873 355.178 249.884 355.178H328.116C334.127 355.178 339 350.305 339 344.293V281.708C339 275.697 334.127 270.824 328.116 270.824ZM317.231 289.872C318.734 289.872 319.952 291.09 319.952 292.593V333.409C319.952 334.912 318.734 336.13 317.231 336.13H260.769C259.266 336.13 258.048 334.912 258.048 333.409V292.593C258.048 291.09 259.266 289.872 260.769 289.872H317.231Z"
          fill="#B18000"
        />
      </mask>
      <g mask="url(#mask0_3744_25212)">
        <rect
          x="256.929"
          y="158.972"
          width="139.034"
          height="187.726"
          transform="rotate(39.7202 256.929 158.972)"
          fill="#F2B9B5"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M171.545 349.224C184.957 332.846 194.032 320.704 198.77 312.798C206.882 299.262 213.521 287.216 215.617 282.615C220.613 271.643 204.114 266.505 200.38 271.623C194.728 279.369 182.658 303.743 164.17 344.746L171.545 349.224Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M199.029 344.463L223.989 281.63C229.328 270.176 203.547 262.648 199.623 267.978C190.716 280.08 169.545 327.819 166.891 331.425L199.029 344.463Z"
        fill="#2F3676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M265.508 331.862C260.645 324.769 242.96 300.908 233.327 291.035C230.559 288.198 227.858 285.474 225.303 282.937C217.71 275.394 202.589 288.072 210.168 294.942C229.044 312.051 256.584 335.148 258.885 337.207C262.11 340.093 268.564 336.319 265.508 331.862Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M264.371 328.658C266.046 330.037 267.135 331.163 267.64 332.037C268.253 333.099 268.971 334.751 269.794 336.994C268.561 337.705 257.485 344.1 236.566 356.178C234.054 353.822 233.663 351.993 235.392 350.692C237.121 349.39 238.548 348.292 239.672 347.398L251.141 331.596C251.362 331.292 251.787 331.225 252.091 331.445C252.097 331.449 252.102 331.453 252.107 331.457L254.49 333.292C256.676 333.101 258.307 332.695 259.384 332.073C260.259 331.568 261.263 330.517 262.397 328.921L262.397 328.921C262.832 328.308 263.681 328.164 264.294 328.599C264.32 328.618 264.346 328.637 264.371 328.658Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M177.314 346.777C178.075 348.808 178.456 350.329 178.456 351.337C178.456 352.564 178.251 354.354 177.843 356.707C176.42 356.707 163.63 356.707 139.474 356.707C138.477 353.411 139.053 351.632 141.201 351.369C143.349 351.106 145.134 350.869 146.554 350.657L164.388 342.707C164.731 342.554 165.133 342.708 165.286 343.051C165.289 343.057 165.291 343.063 165.294 343.069L166.44 345.849C168.429 346.777 170.045 347.241 171.288 347.241C172.298 347.241 173.693 346.833 175.473 346.017L175.473 346.017C176.156 345.704 176.964 346.004 177.277 346.687C177.29 346.717 177.303 346.746 177.314 346.777Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M232.971 284.769C253.717 281.389 267.613 279.078 274.659 277.835C294.743 274.294 300.6 263.487 297.137 239.906H260.133C255.236 241.32 234.775 250.066 198.75 266.144C192.268 269.361 193.475 278.849 194.66 281.974C194.708 282.102 205.635 300.825 227.44 338.145L257.711 318.861L232.914 287.041C232.259 285.722 232.278 284.965 232.971 284.769Z"
        fill="#5C63AB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M230.305 231.001L208.606 246.935C202.72 248.523 197.803 250.499 193.855 252.863C192.922 253.713 191.794 255.434 195.663 255.137C199.531 254.839 203.613 254.7 204.147 256.02C204.681 257.339 202.34 258.917 203.419 260.697C204.138 261.884 207.537 258.908 213.614 251.769L235.102 242.859L230.305 231.001ZM313.62 231.551L299.404 231.607C308.182 259.943 312.921 274.977 313.62 276.711C315.194 280.612 311.863 286.553 310.439 289.746C315.078 291.822 314.584 284.134 320.437 286.857C325.779 289.342 329.842 293.845 336.014 290.037C336.773 289.569 337.604 287.806 335.595 286.428C330.59 282.996 323.377 276.989 322.403 275.012C321.074 272.316 318.146 257.829 313.62 231.551Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M273.221 171.899L267.339 170.89C245.513 189.744 236.549 225.965 209.796 245.153L216.235 253.134C262.646 247.388 274.149 203.207 273.221 171.899Z"
        fill="#2026A2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M298.864 245.823C275.278 245.823 257.928 245.823 246.815 245.823C244.437 245.823 244.885 242.389 245.229 240.656C249.197 220.655 264.686 199.096 264.686 170.626L279.7 168.272C292.117 188.244 296.412 212.833 298.864 245.823Z"
        fill="#F2F2F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M298.446 187.903C300.626 187.276 302.353 185.815 303.626 183.518C309.113 173.616 307.132 168.165 301.267 166.373C295.403 164.581 290.173 168.272 280.83 168.272C280.322 168.272 279.856 168.304 279.434 168.368L274.734 168.636C261.249 214.337 257.53 244.828 263.577 260.109H304.543C306.97 265.769 309.293 270.53 311.511 274.394H322.674C323.724 240.426 315.648 211.596 298.446 187.903Z"
        fill="#1F28CF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M295.623 236.638C294.334 247.418 292.24 255.241 289.34 260.109H304.543C301.712 253.507 298.738 245.683 295.623 236.638V236.638Z"
        fill="black"
        fillOpacity="0.1"
      />
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
export interface PagenotFoundI {
  title?: string;
  buttonText?: string;
  description?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  image?: any;
}

export default PagenotFound;