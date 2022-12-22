import React from "react";
import Button from "../../components/Button/Button";
import { Card } from "../../components/Card";
import { FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";
const BrokenPage = ({
  title,
  description,
  buttonText,
  onClick,
  icon,
  image
}: BrokenPageI): JSX.Element => {
  const svg = (
    <svg
      style={{maxWidth:"500px"}}
      width="100%"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="203.504"
        y="56.3944"
        width="254.296"
        height="10.5035"
        transform="rotate(14 203.504 56.3944)"
        fill="#3B424F"
      />
      <circle
        cx="427.253"
        cy="117.594"
        r="1.93486"
        transform="rotate(14 427.253 117.594)"
        fill="white"
      />
      <circle
        cx="433.69"
        cy="119.198"
        r="1.93486"
        transform="rotate(14 433.69 119.198)"
        fill="white"
      />
      <circle
        cx="440.126"
        cy="120.803"
        r="1.93486"
        transform="rotate(14 440.126 120.803)"
        fill="white"
      />
      <path
        d="M202.056 68.4042L445.888 129.198L416.974 245.166C415.838 249.721 411.225 252.493 406.67 251.357L179.333 194.676C174.778 193.54 172.006 188.927 173.142 184.372L202.056 68.4042Z"
        fill="#FBEAE9"
        stroke="#3B424F"
        strokeWidth="3"
      />
      <path
        d="M325.504 206.792L276.019 194.454C275.205 194.251 274.44 193.89 273.766 193.391C273.092 192.891 272.523 192.264 272.091 191.545C271.66 190.826 271.374 190.029 271.251 189.199C271.129 188.369 271.17 187.524 271.374 186.71L288.457 118.198C288.866 116.556 289.911 115.144 291.361 114.272C292.811 113.401 294.549 113.141 296.19 113.551L327.58 121.377L345.593 152.468L333.211 202.128C332.805 203.767 331.766 205.178 330.322 206.053C328.877 206.927 327.145 207.193 325.504 206.792Z"
        fill="#FE7163"
      />
      <path d="M341 186.5L333 179.5L341 181.5V186.5Z" fill="#FBEAE9" />
      <path
        d="M280.928 122.82L293.484 128.807L287.185 120.317L280.928 122.82Z"
        fill="#FBEAE9"
      />
      <g opacity="0.2">
        <path
          d="M327.57 121.374L322.763 140.654C322.382 142.183 322.623 143.8 323.435 145.151C324.246 146.501 325.561 147.474 327.089 147.855L345.622 152.476L327.57 121.374Z"
          fill="white"
        />
      </g>
      <g opacity="0.2">
        <path
          d="M322.592 142.415C322.592 142.415 321.183 147.032 326.128 149.893C326.315 149.999 326.508 150.096 326.705 150.181C329.013 151.22 344.239 158.026 344.328 157.667L345.622 152.476L327.09 147.855C327.09 147.855 322.5 146.546 322.592 142.415Z"
          fill="black"
        />
      </g>
      <path
        d="M303.537 162.906L295.427 163.77L302.187 168.321L301.491 171.115L291.872 164.43L292.598 161.519L304.229 160.131L303.537 162.906Z"
        fill="#FAFAFA"
      />
      <path
        d="M313.582 156.64L316.677 157.412L304.102 176.6L301.007 175.828L313.582 156.64Z"
        fill="#FAFAFA"
      />
      <path
        d="M325.324 169.688L324.598 172.599L312.999 173.984L313.686 171.229L321.791 170.384L315.036 165.814L315.725 163.049L325.324 169.688Z"
        fill="#FAFAFA"
      />
      <path
        d="M406.332 251.217L418.521 232.037L445.062 221.562"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M447.645 232.378C449.363 226.366 447.326 222.524 445.731 221.159L430.183 228.677C431.323 229.436 433.095 231.625 431.058 234.308C428.513 237.662 428.919 244.03 432.607 245.234C435.557 246.198 435.849 248.227 435.626 249.121C433.281 251.67 429.679 257.665 434.025 261.256C438.371 264.846 436.733 268.293 435.371 269.568C443.052 270.494 442.597 262.74 441.946 257.038C441.771 255.507 442.352 254.015 443.269 252.777C445.381 249.922 446.324 246.561 446.441 243.634C446.589 239.955 446.634 235.918 447.645 232.378Z"
        fill="#FE7163"
      />
      <rect x="203.232" width="2.80935" height="63.6786" fill="#3B424F" />
      <rect x="447.646" width="2.80935" height="63.6786" fill="#3B424F" />
      <path
        d="M447.431 104.089C447.571 103.996 447.735 103.946 447.903 103.946C448.721 103.946 449.067 104.987 448.413 105.477L446.709 106.755C445.575 108.457 445.575 110.673 446.709 112.374L450.455 117.993H447.646L444.624 113.461C443.068 111.126 443.153 108.064 444.836 105.819L447.431 104.089Z"
        fill="#3B424F"
      />
      <ellipse
        cx="235.574"
        cy="384.332"
        rx="212.574"
        ry="2.79703"
        fill="#C3C5C9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.119 182.233C107.654 178.166 105.309 173.183 105.701 167.598C106.83 151.508 129.229 155.047 133.586 163.168C137.943 171.29 137.425 191.89 131.794 193.341C129.549 193.92 124.765 192.502 119.896 189.567L122.952 211.188H104.907L111.119 182.233Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M126.458 154.323C123.992 153.571 120.413 153.316 118.907 153.489C119.763 151.437 120.103 149.15 119.826 146.924C119.557 144.761 118.59 142.919 117.696 140.989C117.284 140.099 116.817 139.215 116.121 138.534C115.412 137.841 114.514 137.383 113.573 137.165C112.609 136.941 111.602 136.96 110.637 137.163C110.21 137.253 109.827 137.448 109.408 137.556C108.98 137.667 108.772 137.399 108.461 137.129C107.711 136.48 106.611 136.159 105.663 136.044C104.598 135.915 103.494 136.076 102.479 136.426C101.491 136.767 100.542 137.32 99.8272 138.125C99.5091 138.484 99.2204 138.892 99.0327 139.343C98.9558 139.528 98.9431 139.638 98.7585 139.705C98.5877 139.768 98.3881 139.77 98.2119 139.83C96.5082 140.407 95.0517 141.723 94.2585 143.413C93.7958 144.399 93.5766 146.135 93.6367 148.081C93.6967 150.027 95.4536 155.104 97.0969 156.956C98.5637 158.609 100.72 159.699 102.8 160.177C101.419 161.756 100.5 163.728 99.8201 165.734C99.0817 167.914 98.6247 170.178 98.4559 172.485C98.2956 174.677 98.2808 176.995 98.7947 179.14C99.2754 181.147 100.303 182.792 102.02 183.836C102.806 184.315 103.652 184.674 104.502 185.002C105.341 185.326 106.182 185.641 107.06 185.822C108.722 186.166 110.637 186.107 111.918 184.784C112.379 184.307 112.887 183.707 113.223 183.125C113.344 182.915 113.417 182.778 113.27 182.573C113.094 182.328 112.809 182.14 112.583 181.948C111.292 180.854 110.493 179.394 110.292 177.658C110.087 175.897 110.56 173.624 112.273 172.855C114.386 171.906 116.714 172.995 118.593 174.01C119.391 171.192 121.03 168.655 123.601 167.363C126.444 165.933 129.707 165.765 132.629 164.538C133.39 164.219 134.166 163.856 134.727 163.204C134.961 162.932 135.236 162.579 135.329 162.219C135.452 161.746 135.147 161.349 134.911 160.981C133.662 159.025 128.924 155.075 126.458 154.323Z"
        fill="#3B424F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M194.293 287.2C199.692 279.878 213.186 284.725 213.178 290.786C213.156 306.7 198.634 382.25 197.875 387.02C197.117 391.789 188.995 393.35 188.522 387.39C187.769 377.907 186.371 345.032 187.77 329.738C188.178 325.271 188.609 320.953 189.043 316.907C181.411 330.619 169.805 349.999 154.225 375.048L145.566 371.092C152.366 348.689 157.941 332.873 162.293 323.644C169.744 307.842 176.73 294.31 179.671 289.543C183.555 283.247 189.855 284.082 194.293 287.2Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.185 358.651L175.905 288.246C183.024 276.793 202.986 290.577 200.558 297.219C195.046 312.3 167.012 361.124 165.369 365.617L146.185 358.651Z"
        fill="#1F28CF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M213.929 296.283C213.929 316.239 205.182 363.148 205.176 367.542L183.986 366.827C187.69 326.043 189.252 305.513 188.672 305.237C187.367 304.615 135.179 312.46 119.527 313.052C96.956 313.906 87.619 300.059 86.8613 273.783H130.581C167.966 278.245 192.537 281.349 204.293 283.094C211.843 284.214 213.929 290.786 213.929 296.283Z"
        fill="#2B44FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M144.394 368.884C143.034 370.86 142.22 372.388 141.95 373.47C141.622 374.785 141.362 376.76 141.172 379.393C142.698 379.774 156.414 383.193 182.319 389.652C184.27 386.384 184.128 384.322 181.895 383.465C179.661 382.609 177.811 381.877 176.344 381.27L159.345 367.976C159.018 367.72 158.545 367.778 158.289 368.105C158.285 368.111 158.281 368.116 158.276 368.122L156.303 370.798C153.923 371.261 152.066 371.326 150.732 370.994C149.649 370.724 148.262 369.913 146.571 368.562L146.571 368.562C145.922 368.044 144.976 368.149 144.458 368.798C144.435 368.826 144.414 368.855 144.394 368.884Z"
        fill="#E4E4E4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M187.371 376.152C186.53 378.397 186.109 380.078 186.109 381.192C186.109 382.548 186.335 384.527 186.787 387.128C188.36 387.128 202.496 387.128 229.194 387.128C230.296 383.485 229.66 381.518 227.286 381.227C224.912 380.937 222.939 380.675 221.369 380.441L201.658 371.653C201.279 371.484 200.834 371.655 200.665 372.034C200.662 372.041 200.66 372.047 200.657 372.054L199.39 375.127C197.192 376.153 195.406 376.665 194.032 376.665C192.915 376.665 191.373 376.214 189.406 375.313L189.406 375.313C188.651 374.966 187.758 375.298 187.412 376.053C187.397 376.085 187.384 376.118 187.371 376.152Z"
        fill="#E4E4E4"
      />
      <path
        d="M224.079 387.128H189.493C188.04 387.128 186.861 388.306 186.861 389.76C186.861 391.213 188.04 392.391 189.493 392.391H224.079C225.533 392.391 226.711 391.213 226.711 389.76C226.711 388.306 225.533 387.128 224.079 387.128Z"
        fill="#2F3676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84.6062 278.105H165.057C169.21 278.105 172.576 281.472 172.576 285.624V322.466H80.0949C78.4339 322.466 77.0874 321.12 77.0874 319.459V285.624C77.0874 281.472 80.4537 278.105 84.6062 278.105Z"
        fill="#2F3676"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M165.057 278.105H166.707C170.389 278.105 173.529 280.772 174.126 284.406L190.621 384.872H182.587"
        fill="#2F3676"
      />
      <path
        d="M186.861 399.91C194.336 399.91 200.395 393.851 200.395 386.376C200.395 378.902 194.336 372.842 186.861 372.842C179.387 372.842 173.328 378.902 173.328 386.376C173.328 393.851 179.387 399.91 186.861 399.91Z"
        fill="#3B424F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.8611 398.406C55.302 398.406 29.7183 372.822 29.7183 341.263C29.7183 309.704 55.302 284.12 86.8611 284.12C118.42 284.12 144.004 309.704 144.004 341.263C144.004 372.822 118.42 398.406 86.8611 398.406ZM86.8611 387.88C112.607 387.88 133.478 367.009 133.478 341.263C133.478 315.518 112.607 294.647 86.8611 294.647C61.1155 294.647 40.2446 315.518 40.2446 341.263C40.2446 367.009 61.1155 387.88 86.8611 387.88Z"
        fill="#3B424F"
      />
      <path d="M89.869 291.639H83.854V390.887H89.869V291.639Z" fill="#3B424F" />
      <path
        d="M123.014 307.237L120.888 305.11C120.3 304.523 119.348 304.523 118.761 305.11L50.7085 373.163C50.1212 373.75 50.1212 374.702 50.7085 375.29L52.8351 377.416C53.4224 378.003 54.3745 378.003 54.9618 377.416L123.014 309.364C123.601 308.776 123.601 307.824 123.014 307.237Z"
        fill="#3B424F"
      />
      <path
        d="M136.485 342.767V339.76C136.485 338.929 135.812 338.256 134.982 338.256H38.741C37.9105 338.256 37.2372 338.929 37.2372 339.76V342.767C37.2372 343.598 37.9105 344.271 38.741 344.271H134.982C135.812 344.271 136.485 343.598 136.485 342.767Z"
        fill="#3B424F"
      />
      <path
        d="M120.888 377.416L123.014 375.29C123.602 374.702 123.602 373.75 123.014 373.163L54.9619 305.11C54.3747 304.523 53.4225 304.523 52.8353 305.11L50.7086 307.237C50.1214 307.824 50.1214 308.776 50.7086 309.364L118.761 377.416C119.348 378.003 120.3 378.003 120.888 377.416Z"
        fill="#3B424F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M163.144 196.407L191.643 187.851C196.959 183.713 201.974 180.687 206.687 178.773C208.058 178.515 210.327 178.665 207.491 181.882C204.656 185.099 201.818 188.61 202.627 189.958C203.437 191.307 206.387 190.291 207.241 192.427C207.81 193.851 202.922 194.872 192.579 195.488L170.42 208.528L163.144 196.407ZM160.626 246.653L184.609 264.264C191.114 266.02 196.549 268.203 200.913 270.816C201.944 271.755 203.19 273.658 198.914 273.329C194.639 273 190.127 272.847 189.537 274.305C188.947 275.763 191.534 277.507 190.342 279.475C189.547 280.787 185.791 277.497 179.074 269.607L155.324 259.759L160.626 246.653Z"
        fill="#B28B67"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.373 199.223C136.434 223.576 155.32 242.245 182.7 261.651L172.333 273.34C141.762 261.98 125.627 255.125 117.704 232.116C115.715 226.342 114.326 207.933 113.133 198.247L123.373 199.223Z"
        fill="#2026A2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.8613 280.361H144.756C131.642 240.365 124.943 212.914 124.658 198.009C124.644 197.249 123.241 195.91 122.62 196.085C118.079 197.367 113.22 196.888 108.043 194.647C94.3181 216.721 89.5717 243.898 86.8613 280.361Z"
        fill="#F2F2F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M112.984 194.682C129.579 194.818 156.504 197.849 187.555 187.88L190.621 203.198C167.153 218.292 143.389 229.984 122.566 228.324C131.608 267.111 131.191 298.862 111.228 298.862C101.695 298.862 91.4052 298.862 80.3588 298.862C75.456 265.913 88.3415 220.228 100.287 197.185C100.743 196.306 101.715 194.647 104.002 194.647C105.996 194.647 108.986 194.647 112.972 194.647C112.976 194.659 112.98 194.67 112.984 194.682Z"
        fill="#1F28CF"
      />
    </svg>
  );

  return (
    <div className="mt-30">
      <Card>
        <FlexLayout direction="vertical" halign="center" spacing="extraLoose">
          <FlexLayout halign="center" spacing="loose">
            {image? image : svg}
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
export interface BrokenPageI {
  title?: string;
  buttonText?: string;
  description?: string | React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  image?: any;
}

export default BrokenPage;