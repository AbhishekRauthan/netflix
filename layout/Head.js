import NextHead from "next/head";

const Head = ({ title }) => {
  return (
    <div>
      <NextHead>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
    </div>
  )
}

export default Head
