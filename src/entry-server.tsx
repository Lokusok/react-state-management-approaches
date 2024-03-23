import ReactDOMServer from 'react-dom/server';
import Root from './Root';

export function render() {
  const html = ReactDOMServer.renderToString(<Root />);
  return { html };
}
