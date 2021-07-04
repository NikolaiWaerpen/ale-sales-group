/* This example requires Tailwind CSS v2.0+ */
export default function Header() {
  return (
    <div className="bg-white mt-16" id="omoss">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-gray-400 tracking-wide uppercase">
            Vår visjon
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Ta kontroll over arbeidshverdagen
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Vår filosofi er å tenke nytt og forenkle din hverdag ved å tilby de
            beste produktene fra ulike bransjer.
          </p>
        </div>
      </div>
    </div>
  );
}
