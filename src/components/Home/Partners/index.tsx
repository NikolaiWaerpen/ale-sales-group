/* This example requires Tailwind CSS v2.0+ */
const partners = [
  // {
  //   name: "The Box",
  //   description:
  //     "Høykvalitets restaurantmat laget av profesjonelle kokker, leveres deg daglig! 10 ulike retter fra  alle verdens-hjørner basert på de beste råvarene. Her er løsningen på overtidsmat!",
  //   imageUrl: "/images/partners/thebox.webp",
  //   url: "#",
  // },
  // {
  //   name: "Global Connect",
  //   description:
  //     " Ledende leverandøren av fiberbasert datakommunikasjon og datasentre i Nordeuropa.",
  //   imageUrl: "/images/partners/globalconnect.webp",
  //   url: "#",
  // },
  {
    name: "CleanBil",
    description:
      "CleanBil er ett ambulerende vasketeam som vasker bilen når det passer deg og din bedrift, der du er! Vi leverer et miljøvennlig produkt. Visjon: kjemikalie fri og skånsom vask basert på damp.",
    imageUrl: "/images/partners/cleanbil.webp",
    url: "#",
  },
  // {
  //   name: "Switchit",
  //   description:
  //     "Arbeider med digital markedsføring, møtebooking, digitale møterom, bemanning, E-sport og fiber.",
  //   imageUrl: "/images/partners/switchit.webp",
  //   url: "#",
  // },
];

export default function Partners() {
  return (
    <div className="bg-offblack py-16" id="partnere">
      <div className="mx-auto py-12 px-4 max-w-3xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Vår samarbeidspartner
            </h2>
            <p className="text-xl text-gray-300">
              Vi vet at godt samarbeid tar oss lengre distanser enn vi kan reise
              alene.
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-1 lg:gap-8">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="py-10 px-6 bg-lightoffblack text-center xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-scale-down"
                    src={partner.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-gray-200">{partner.name}</h3>
                      <p className="text-gray-400 font-light">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
