const portfolio = [
  {
    name: "Hafslund",
    description: "Skredder strøm dørsalg privat markedet",
  },
  {
    name: "Telenor",
    description: "Fiber dørsalg og TM",
  },
  {
    name: "HomeNet",
    description: "Fiber dørsalg privat og borettslag",
  },
  {
    name: "SOS-Barnebyer",
    description: "Stand, street og dørsalg",
  },
  {
    name: "Hegnar media",
    description: "Finansavisen, kapital TM B2B og privat",
  },
  {
    name: "Alarmer Nokas",
    description: "Dørsalg og privatmarkedet",
  },
  {
    name: "Adio / Crescon",
    description: "TM B2B",
  },
  {
    name: "Telecom",
    description: "Fiber- og nettverksløsninger",
  },
  {
    name: "Telia",
    description: "Nordens største leverandør av mobil- og bredbånd",
  },
  {
    name: "CleanBil",
    description: "Miljøvennlig, ny og banebrytende bilvask konsept",
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
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
            {portfolio.map((customer, key) => (
              <li key={key} className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-700">
                  {customer.name}
                </h2>
                {/* <span>&nbsp;-&nbsp;</span> */}
                {/* <p className="text-gray-500">{customer.description}</p> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
