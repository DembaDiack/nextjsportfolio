import React, { HTMLAttributes } from "react";

interface IInfoBox {
  heading: string;
  buttonTitle: string;
  cardClasses?: string;
  buttonClasses?: string;
}
const InfoBox: React.FC<IInfoBox> = ({
  buttonTitle,
  heading,
  buttonClasses,
  cardClasses,
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${cardClasses}`}>
      <h2 className="text-2xl font-bold">For Renters</h2>
      <p className="mt-2 mb-4">{heading}</p>
      <a
        href="/properties.html"
        className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${buttonClasses}`}
      >
        {buttonTitle}
      </a>
    </div>
  );
};

export default InfoBox;
