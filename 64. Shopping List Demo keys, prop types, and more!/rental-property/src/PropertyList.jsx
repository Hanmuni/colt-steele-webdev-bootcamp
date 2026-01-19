import Property from "./Property";
import "./PropertyList.css";

export default function PropertyList({ properties }) {
  return (
    <div className="property-list">
      {properties.map((property) => {
        return (
          <Property
            key={property.id}
            propertyName={property.propertyName}
            price={property.price}
            rating={property.rating}
            // {...property}
          />
        );
      })}
    </div>
  );
}
