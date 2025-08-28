const PlantCard = ({ name, sunlight, khad }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border border-green-100">
      <h3 className="text-xl font-bold text-green-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-700"><strong>☀️ Sunlight:</strong> {sunlight}</p>
      <p className="text-sm text-gray-700"><strong>🧪 Khad:</strong> {khad}</p>
    </div>
  );
};

export default PlantCard;
