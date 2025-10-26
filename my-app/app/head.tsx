export default function Head() {
  return (
    <>
      {/* Explicit favicon links to ensure browsers pick up the project's favicons on deployment */}
      {/* Use the repository favicons: /favicon.ico (legacy/shortcut) and /favicon.png (modern/apple) */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="alternate icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <meta name="msapplication-TileImage" content="/favicon.png" />
    </>
  )
}
