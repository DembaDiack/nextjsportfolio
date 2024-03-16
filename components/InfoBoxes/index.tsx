import React from "react";
import InfoBox from "./InfoBox";

function InfoBoxes() {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="Find your dream rental property. Bookmark properties and contact
              owners"
            buttonTitle="Browse Properties"
          />
          <InfoBox
            heading="List your properties and reach potential tenants. Rent as an
        airbnb or long term."
            buttonTitle="Add Property"
            buttonClasses="bg-blue-500 hover:bg-blue-600"
            cardClasses="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
