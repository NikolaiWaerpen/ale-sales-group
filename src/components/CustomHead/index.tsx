import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      {/* Custom info */}
      <title>Ale Sales Group | Ta kontroll over arbeidshverdagen</title>
      <meta
        name="description"
        content="Ta kontroll over arbeidshverdagen | Ale Sales Group"
      />
      <meta name="keywords" content="tjenester, telekommunikasjon" />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="site.webmanifest" />
      <meta name="msapplication-TileColor" content="#131313" />
      <meta name="theme-color" content="#131313" />

      {/* Facebook */}
      <meta
        property="og:title"
        content="Ta kontroll over arbeidshverdagen | Ale Sales Group"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.alesalesgroup.no/" />
      <meta
        property="og:description"
        content="Ta kontroll over arbeidshverdagen. Vår filosofi er å tenke nytt og forenkle din hverdag ved å tilby de beste produktene fra ulike bransjer."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/rpBzXN5f/Ale-Sales-Group-AS.png"
      />

      {/* Boilerplate */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key=""
      />
      <meta name="author" content="Nikolai Wærpen" />
    </Head>
  );
}
