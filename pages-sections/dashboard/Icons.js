export const Category = ({ className, size, color }) => {
  console.log(color);
  return (
    <span className={className} style={{ display: "flex" }}>
      <svg
        id="Iconly_Broken_Category"
        data-name="Iconly/Broken/Category"
        xmlns="http://www.w3.org/2000/svg"
        width={size || "24"}
        height={size || "24"}
        viewBox="0 0 24 24"
      >
        <g id="Category" transform="translate(2.5 2.5)">
          <path
            id="Category-2"
            data-name="Category"
            d="M13.3,19a2.932,2.932,0,0,1-2.875-2.944V13.186A2.908,2.908,0,0,1,13.3,10.252h2.813A2.931,2.931,0,0,1,19,13.186v2.871A2.943,2.943,0,0,1,16.117,19Zm-1.332-5.815v2.871a1.36,1.36,0,0,0,.388.964,1.3,1.3,0,0,0,.934.4h2.832a1.3,1.3,0,0,0,.934-.4,1.357,1.357,0,0,0,.387-.964V13.186a1.368,1.368,0,0,0-.39-.961,1.311,1.311,0,0,0-.941-.4H13.3A1.347,1.347,0,0,0,11.973,13.186Zm-9.09,5.8A2.976,2.976,0,0,1,0,16.048V13.186a2.966,2.966,0,0,1,.845-2.078,2.842,2.842,0,0,1,2.038-.856H4.038a.769.769,0,0,1,.74.367.805.805,0,0,1,0,.84.77.77,0,0,1-.74.368H2.883a1.354,1.354,0,0,0-1.34,1.359v2.835a1.381,1.381,0,0,0,1.34,1.359H5.713a1.313,1.313,0,0,0,.947-.4,1.371,1.371,0,0,0,.393-.964V11.764a.8.8,0,0,1,.347-.813.763.763,0,0,1,.869.025.8.8,0,0,1,.3.832v4.239a2.913,2.913,0,0,1-2.883,2.943ZM14.989,8.776a.794.794,0,0,1,0-1.576h1.129a1.323,1.323,0,0,0,.948-.41,1.386,1.386,0,0,0,.383-.977V2.943a1.364,1.364,0,0,0-1.331-1.359H13.3a1.346,1.346,0,0,0-1.332,1.359V7.236a.791.791,0,0,1-.793.774.761.761,0,0,1-.541-.245A.794.794,0,0,1,10.43,7.2V2.943A2.967,2.967,0,0,1,11.269.862,2.846,2.846,0,0,1,13.3,0h2.813a2.976,2.976,0,0,1,2.874,2.943V5.805a2.966,2.966,0,0,1-.816,2.085,2.85,2.85,0,0,1-2.022.886ZM5.7,8.749H2.883A2.933,2.933,0,0,1,0,5.814V2.943A2.943,2.943,0,0,1,2.883,0H5.7A2.93,2.93,0,0,1,8.579,2.943V5.814a2.946,2.946,0,0,1-.845,2.078A2.829,2.829,0,0,1,5.7,8.749ZM1.924,1.973a1.381,1.381,0,0,0-.4.97V5.814a1.378,1.378,0,0,0,.39.988,1.319,1.319,0,0,0,.939.4H5.7a1.318,1.318,0,0,0,.949-.41,1.377,1.377,0,0,0,.383-.977V2.943A1.361,1.361,0,0,0,5.7,1.584H2.857A1.311,1.311,0,0,0,1.924,1.973Z"
            transform="translate(0 0)"
            fill={color || "#565656"}
          />
        </g>
      </svg>
    </span>
  );
};
export const Star = ({ className, size, color }) => {
  return (
    <span className={className} style={{ display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "16.717"}
        height={size || "16"}
        viewBox="0 0 16.717 16"
      >
        <path
          id="Icon_awesome-star"
          data-name="Icon awesome-star"
          d="M8.9.556,6.863,4.693,2.3,5.358a1,1,0,0,0-.553,1.706l3.3,3.218-.781,4.546a1,1,0,0,0,1.45,1.053L9.8,13.735l4.084,2.147a1,1,0,0,0,1.45-1.053l-.781-4.546,3.3-3.218A1,1,0,0,0,17.3,5.358l-4.565-.666L10.7.556A1,1,0,0,0,8.9.556Z"
          transform="translate(-1.441 0.001)"
          fill={color || "#565656"}
        />
      </svg>
    </span>
  );
};
export const Bars = ({ className, size, color }) => {
  return (
    <span className={className} style={{ display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size + size / 3 : "21.364"}
        height={size || "14.909"}
        viewBox="0 0 21.364 14.909"
      >
        <g
          id="Icon_feather-list"
          data-name="Icon feather-list"
          transform="translate(-3.5 -8)"
        >
          <path
            id="Path_3"
            data-name="Path 3"
            d="M12,9H25.985"
            transform="translate(-2.121)"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M12,18H25.985"
            transform="translate(-2.121 -2.545)"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M12,27H25.985"
            transform="translate(-2.121 -5.091)"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M4.5,9h0"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M4.5,18h0"
            transform="translate(0 -2.545)"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M4.5,27h0"
            transform="translate(0 -5.091)"
            fill="none"
            stroke={color || "#565656"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
    </span>
  );
};
export const Marker = ({ className, size, color }) => {
  return (
    <span className={className} style={{ display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "16.68"}
        height={size || "18.161"}
        viewBox={`0 0 ${size ||16.68} ${size ||18.161}`}
      >
        <g
          id="Group_113"
          data-name="Group 113"
          transform="translate(-641.031 -383.629)"
        >
          <path
            id="Path_537"
            data-name="Path 537"
            d="M968.94,471.761l-8.794,1.787,3.26,1.359-.5,3.5Z"
            transform="translate(-319.114 -80.229)"
            fill={color || "#565656"}
          />
          <path
            id="Path_538"
            data-name="Path 538"
            d="M981.17,456.216a7.182,7.182,0,1,0-14.364,0c0,.179.008.355.02.531l2.714-.552a4.448,4.448,0,0,1,8.9.02,4.39,4.39,0,0,1-1.01,2.822l-3.439,3.977-2.331-2.7-1.853,2.039,4.183,4.836,5.543-6.409h0A7.154,7.154,0,0,0,981.17,456.216Z"
            transform="translate(-323.459 -65.405)"
            fill={color || "#565656"}
          />
        </g>
      </svg>
    </span>
  );
};
export const Check = ({ className, size, color }) => {
  return (
    <span className={className} style={{ display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || "8.389"}
        height={size || "6.463"}
        viewBox={`0 0 ${size || 8.389} ${size || 6.463}`}
      >
        <path
          id="Path_541"
          data-name="Path 541"
          d="M18.85,12.963l-.686-.709a.147.147,0,0,0-.109-.047h0a.141.141,0,0,0-.109.047L13.193,17.07l-1.73-1.74a.15.15,0,0,0-.218,0l-.693.7a.157.157,0,0,0,0,.223l2.182,2.195a.688.688,0,0,0,.456.223.721.721,0,0,0,.452-.216h0l5.209-5.268A.168.168,0,0,0,18.85,12.963Z"
          transform="translate(-10.505 -12.206)"
          fill={color || "#6e00e3"}
        />
      </svg>
    </span>
  );
};
