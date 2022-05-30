const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-700 text-white text-center pd-3 uppercase font-bold mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error