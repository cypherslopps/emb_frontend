import React from "react";

type Props = {
  title: String,
  color: String | undefined
};

function Headline({ title, color }: Props) {
  let colorVariant = `${color ? color : "text-blue-dark"}`;

  return (
    <h6
      className={`${colorVariant} text-sm font-extrabold uppercase font-semibold`}
    >
      {title}
    </h6>
  );
}

export default Headline;
