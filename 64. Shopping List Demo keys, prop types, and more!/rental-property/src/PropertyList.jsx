import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div>
      {properties.map((property) => {
        return (
          <Property
            key={property.id}
            propertyName={property.propertyName}
            price={property.price}
            rating={property.rating}
          />
        );
      })}
    </div>
  );
}
