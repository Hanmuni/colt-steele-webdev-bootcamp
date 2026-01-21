export default function Property({ propertyName, price, rating, }) {
  return (
    <div>
      <h2> {propertyName}</h2>
      <h3>${price} a night!</h3>
      <h4> Average rating: {rating}</h4>
    </div>
  );
}
