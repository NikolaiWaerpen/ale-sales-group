/* This example requires Tailwind CSS v2.0+ */
import {
  AcademicCapIcon,
  LightningBoltIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Enklere hverdag",
    description:
      "Vårt mål er å gi en enklere hverdag gjennom våre produkter og samarbeidspartnere.",
    icon: LightningBoltIcon,
  },
  {
    name: "Talentfulle medarbeidere",
    description:
      "Våre medarbeidere er unge og kreative, og nettopp derfor kan de bidra med kreative og annerledes innspill.",
    icon: AcademicCapIcon,
  },
  {
    name: "Spisskompetanse",
    description:
      "Gjennom ett profesjonelt team med kompetanse innen de ulike fagfelt oppnår vi resultater. Vi kan forenkle din bedrifts tidsklemme og utfordringer forbundet med dette.",
    icon: UserGroupIcon,
  },
  {
    name: "Rådgivning",
    description:
      "Våre engasjerte og dedikerte rådgivere som hjelper deg og tilpasser løsninger etter ditt behov.",
    icon: ScaleIcon,
  },
];

// Offset 2x2 grid

export default function Features() {
  return (
    <div className="bg-white overflow-hidden mb-36">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative">
          {/* <div className="lg:col-span-1 grid place-items-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Om oss
            </h2>
          </div> */}
          {/* <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-theme-500 text-offblack">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl> */}
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div className="max-w-md h-screen75 bg-offblack relative">
              <img
                src="/images/offer/offer1.webp"
                className="object-cover max-full h-full bg-offblack opacity-30"
              />
              <div className="absolute top-1/4 left-1/2">
                <div className="relative -top-1/2 -left-1/2">
                  <div className="grid place-items-center">
                    <h3 className="text-white text-lg font-semibold">Mål</h3>
                    <p className="text-gray-200 text-center text-sm md:text-base">
                      {/* Våre verdier er å hjelpe dere til en enklere hverdag! */}
                      Ale Sales Group gjennomfører effektive salgsoppdrag med
                      kvalitet og positive kundeopplevelser som fokusområde.
                      Vårt mål er å gi våre kunder en enklere hverdag ved å
                      hjelpe dem med salg av deres tjenester og produkter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md h-screen75 bg-offblack relative">
              <img
                src="/images/offer/offer2.webp"
                className=" object-cover max-full h-full bg-offblack opacity-30"
              />
              <div className="absolute top-1/4 left-1/2">
                <div className="relative -top-1/2 -left-1/2">
                  <div className="grid place-items-center w-60">
                    <h3 className="text-white text-lg font-semibold">Salg</h3>
                    <p className="text-gray-200 text-center text-sm md:text-base">
                      {/* Vårt mål er å hjelpe din bedrift å effektivisere og møte
                      deres utfordringer i forbindelse med dette. Gjennom et
                      profesjonelt team med kompetanse innen de ulike fagfelt
                      oppnår vi resultater. Vi kan forenkle din bedrifts
                    tidsklemmer og utfordringer forbundet med dette. */}
                      {/*  */}
                      {/* Vi spesialiser oss på strategisk kommunikasjon mellom
                      bedrifter og deres sluttbrukere ansikt til ansikt. */}
                      {/*  */}
                      {/* Byrået jobber oftest via "under-radaren"-kanaler som field
                      marketing, word-of-motuh marketing og sosiale medier. Man
                      legger vekt på at salg og omdømme er to sider av samme
                      sak. Dette innebærer at enhver salgssituasjon mellom en
                      representant for et produkt eller tjeneste og en kunde
                    også innebærer en viktig omdømmefaktor */}
                      Vi jobber daglig med ulike salgs- og markedsaktiviteter
                      mot sluttkunde.{" "}
                      {/* Vi bruker relevante salgsverktøy for å
                      gjennomføre disse aktivitetene på en strukturert og
                      målrettet måte. */}
                      Vi har lang erfaring innen salg og markedsføring med fokus
                      på å skape resultater innen forretningsområdene
                      telemarketing, dørsalg og promotering.
                      {/* Vi har gjennom mange år i bransjen opparbeidet oss et
                      solid nettverk med tilgang til høykompetente agenter. Vi
                      kan vise til solid kunnskap og meget gode resultater
                    gjennom flere år i et tøft og konkurranseutsatt marked. */}
                      {/*  */}
                    </p>
                    {/* <p className="text-gray-200 text-center mt-3 text-sm md:text-base">
                      Vi bruker et bredt spekter av kanaler for å kunne tilpasse
                      oss behovene til våre oppdragsgivere og det er
                      kombinasjonen og synergien mellom kanalene som ofte gir de
                      beste resultatene.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md h-screen75 bg-offblack relative">
              <img
                src="/images/offer/offer3.webp"
                className="object-cover max-full h-full bg-offblack opacity-30"
              />
              <div className="absolute top-1/3 left-1/2">
                <div className="relative -top-1/2 -left-1/2">
                  <div className="grid place-items-center">
                    <h3 className="text-white text-lg font-semibold">Visjon</h3>
                    <p className="text-gray-200 text-center text-sm md:text-base">
                      Å hjelpe din bedrift til en effektiv og enklere hverdag.
                      Det er viktig for oss å levere gode resultater i tillegg
                      til å være konkurransedyktige og fleksible.
                    </p>
                    {/* <p className="text-gray-200 text-center mt-3 text-sm md:text-base">
                      Ale Sales Group gjennomfører effektive salgsoppdrag med
                      kvalitet og positive kundeopplevelser som fokusområde.
                      Vårt mål er å gi våre kunder en enklere hverdag ved å
                      hjelpe dem med salg av deres tjenester og produkter.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
