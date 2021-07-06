import { useState } from "react";
import { useForm } from "@formspree/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Contact centered
export default function Contact() {
  const [state, handleSubmit] = useForm("mbjqkbyn");

  return (
    <div
      className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
      id="kontakt"
    >
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        {state.succeeded ? (
          <div>
            <h1 className="text-xl font-semibold grid place-items-center">
              Takk! Vi vil kontakte deg i løpet av kort tid
            </h1>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Kontakt oss
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Kontakt oss for en uforplinktende samtale i dag.
              </p>
            </div>

            <div className="mt-12">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="fornavn"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fornavn
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Fornavn"
                      name="fornavn"
                      id="fornavn"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="etternavn"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Etternavn
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Etternavn"
                      name="etternavn"
                      id="etternavn"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="firma"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Firma
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Firma"
                      name="firma"
                      id="firma"
                      autoComplete="organization"
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="epost"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Epost
                  </label>
                  <div className="mt-1">
                    <input
                      id="epost"
                      placeholder="ola@nordmann.no"
                      name="epost"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="mobil"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nummer
                  </label>
                  <div className="mt-1">
                    {/* <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Land
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-theme-500 focus:border-theme-500 rounded-md"
                  >
                    <option>NO</option>
                  </select>
                </div> */}
                    <input
                      type="text"
                      name="mobil"
                      id="mobil"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                      placeholder="+47 462 83 638"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="melding"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Melding
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="melding"
                      placeholder="Skriv en melding..."
                      name="melding"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:shadow-md border border-gray-400 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? "bg-theme-600" : "bg-gray-200",
                      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-500"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? "translate-x-5" : "translate-x-0",
                        "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div> */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-transparent rounded-md shadow-sm focus:shadow-md text-base font-medium hover:text-offblack hover:bg-white hover:border-gray-400 text-white bg-offblack border-white transition ease-out duration-200"
                  >
                    La oss ta en prat
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
