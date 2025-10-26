export default function Head() {
  return (
    <>
      {/* Explicit favicon links to ensure browsers pick up the project's favicons on deployment */}
  {/* Use versioned favicons to force cache-bust when needed. */}
  {/* Query-string versioning avoids adding new binary files while guaranteeing a fresh fetch. */}
  <link rel="icon" href="/favicon-v3.ico" />
  <link rel="alternate icon" href="/favicon-v3.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon-v3.png" />
  <meta name="msapplication-TileImage" content="/favicon-v3.png" />
    </>
  )
}
