/* This example requires Tailwind CSS v2.0+ */
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

export default function ContactInfo() {
  return (
    <div className="bg-white mb-36">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div className="md:flex md:justify-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Kontakt oss direkte
              </h2>
              {/* <div className="mt-3">
              <p className="text-lg text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </div> */}
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+47 918 20 214</p>
                    {/* <p className="mt-1">Mandag-Fredag 8am to 6pm PST</p> */}
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>paal@alesalesgroup.no</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-center">
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Våre kontorer
              </h2>
              {/* <div className="mt-3">
              <p className="text-lg text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                repellat error corporis doloribus similique, voluptatibus
                numquam quam, quae officiis facilis.
              </p>
            </div> */}
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <LocationMarkerIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Strømsveien 258,</p>
                    <p className="mt-1">0668 Oslo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
