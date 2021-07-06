import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

const people = [
  {
    name: "Pål Jonathan S. Ellingsen",
    role: "Eier / Daglig leder",
    imageUrl: "/images/team/paal.webp",
    phone: "+47 918 20 214",
    email: "paal@alesalesgroup.no",
    linkedinUrl:
      "https://www.linkedin.com/in/p%C3%A5l-jonathan-sandbu-ellingsen-38769053/",
  },
  {
    name: "Nicolas P. Sørum",
    role: "Partner",
    imageUrl: "/images/team/nicolas.webp",
    phone: "+47 957 93 452",
    email: "nic.sorum@gmail.com",
    // twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/nicolas-p-s%C3%B8rum-3419681aa/",
  },
  // More people...
];

export default function Team() {
  return (
    <div className="bg-white mb-72">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hvem vi er
            </h2>
            <p className="text-xl text-gray-500">
              Vi er selgere i toppklassen med over 10 års sammenlagt
              salgserfaring. Vårt engasjement, kreative løsninger og
              lærevillighet gir oss de nødvendige midlene til å overkomme alle
              utfordringer.
            </p>
            {/* <p className="text-xl text-gray-500">
              Vi er selgere i toppklassen med over 10 års sammenlagt
              salgserfaring.
            </p> */}
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-gray-400 font-light">{person.role}</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={`tel:${person.phone}`}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Mobil</span>
                          <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${person.email}?subject=Start en uforpliktende samtale!`}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Epost</span>
                          <MailIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
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
