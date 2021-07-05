const portfolio = [
  {
    name: "Hafslund",
    description: "Skredder strøm dørsalg privat markedet",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase">
            Nåværende og tidligere
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Kundeportefølje
          </p>
          {/* <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p> */}
          {portfolio.map((customer, key) => (
            <ul key={key}>
              <li>
                {customer.name}
                {customer.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
