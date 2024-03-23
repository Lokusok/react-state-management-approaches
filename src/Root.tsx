import { memo } from 'react';

import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';

import App from './app';
import store from './store/rtk';

function Root() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  );
}

export default memo(Root);
