import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/VisbyCD/VisbyCF-Medium.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/VisbyCD/VisbyCF-Bold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/VisbyCD/VisbyCF-DemiBold.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
