import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
            <h1>Hello from Document File</h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
