import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaLocationArrow,
} from "react-icons/fa";

interface PropertyProps {
  id: string;
  images: string[];
  propertyType: string;
  propertyName: string;

  beds: number;
  baths: number;
  sqft: number;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  rates: {
    weekly?: number;
    nightly?: number;
    monthly?: number;
  };
}

function Property(props: PropertyProps) {
  const {
    id,
    images,
    propertyType,
    propertyName,
    rates,
    beds,
    baths,
    sqft,
    location,
  } = props;

  function getPriceLabel() {
    const frequencies = _.keys(rates) as Array<keyof PropertyProps["rates"]>;
    return `${rates[frequencies[0]]}$/${frequencies[0]}`;
  }

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${images[0]}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
        width={1920}
        height={1080}
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{propertyType}</div>
          <h3 className="text-xl font-bold">{propertyName}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getPriceLabel()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed /> {beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath /> {baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined />
            {sqft} <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {_.map(_.keys(rates), (key) => {
            return (
              <p className="flex flex-col items-center">
                <div>
                  <FaMoneyBill />
                </div>
                <div>{_.upperFirst(key)}</div>
              </p>
            );
          })}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex  align-middle gap-2 mb-4 lg:mb-0">
            <FaLocationArrow className="text-lg pt-1 text-orange-700" />
            <span className="text-orange-700"> {location.street} </span>
          </div>
          <Link
            href={`properties/${id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Property;
