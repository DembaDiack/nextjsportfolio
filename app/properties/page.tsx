import Property from "@/components/Property";
import properties from "@/properties.json";
import _, { isEmpty } from "lodash";
function PropertiesPage() {
  console.log(properties);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length > 0 &&
            _.map(properties, (property) => (
              // <Property
              //   id={property._id}
              //   key={property._id}
              //   baths={property.baths}
              //   beds={property.beds}
              //   images={property.images}
              //   location={property.location}
              //   rates={property.rates}
              //   propertyName={property.name}
              //   propertyType={property.type}
              //   sqft={property.square_feet}
              // />
              <></>
            ))}
          {_.isEmpty(properties) && <div>No properties found</div>}
        </div>
      </div>
    </section>
  );
}

export default PropertiesPage;
