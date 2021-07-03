/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Verdier",
    description:
      "Vårt ønske er å kunne bidra med nettopp dette! Våre medarbeidere er unge og kreative, og nettopp derfor kan de bidra med kreative og annerledes innspill.",
    icon: GlobeAltIcon,
  },
  {
    name: "Rådgivning",
    description:
      "Våre engasjerte og dedikerte rådgivere som hjelper deg og tilpasser løsninger etter ditt behov.",
    icon: ScaleIcon,
  },
  {
    name: "Enklere hverdag",
    description:
      "Vårt mål er å gi en enklere hverdag gjennom våre produkter og samarbeidspartnere.",
    icon: LightningBoltIcon,
  },
  {
    name: "Visjon",
    description:
      "Vår filosofi er å tenker nytt og forenkle din hverdag ved å tilby de  beste produktene fra ulike bransjer, noe vi søker å oppnå gjennom ett profesjonelt team med kompetanse innen de ulike fagfelt. Vi mener vi kan forenkle din bedrifts tidsklemme og utfordringer forbundet med dette.",
    icon: MailIcon,
  },
];

// Offset 2x2 grid

export default function Features() {
  return (
    <div className="bg-gray-50 overflow-hidden">
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

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hva vi gjør best
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
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
          </dl>
        </div>
      </div>
    </div>
  );
}
