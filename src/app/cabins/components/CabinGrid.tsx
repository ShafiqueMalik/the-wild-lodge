import { CabinCard } from './CabinCard';

const cabins = [
  {
    id: '001',
    guests: 2,
    price: 400,
  },
  {
    id: '002',
    guests: 2,
    price: 325,
    originalPrice: 350,
  },
  {
    id: '003',
    guests: 2,
    price: 325,
    originalPrice: 350,
  },
  {
    id: '004',
    guests: 2,
    price: 325,
    originalPrice: 350,
  },
  // Add more cabins as needed
];

function CabinsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
      {cabins.map((cabin) => (
        <CabinCard
          key={cabin.id}
          title={`Cabin ${cabin.id}`}
          guests={cabin.guests}
          price={cabin.price}
          originalPrice={cabin.originalPrice}
        />
      ))}
    </div>
  );
}
export default CabinsGrid;
