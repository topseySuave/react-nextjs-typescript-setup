import App, {Container} from 'next/app';
import React from 'react';

interface Props { Component: any; pageProps: any; }

export default class MyApp extends App<Props> {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  public render () {
    const {Component, pageProps} = this.props;
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}
