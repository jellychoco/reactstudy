
import './App.css';
// import User from './User';
import React, { useTransition } from 'react';
import Ads from './Ads';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Title from './Title';
import WithoutTransition from './WithoutTransition';
import WithTransition from './WithTransition';

const client = new QueryClient();
const User = React.lazy(() => import('./User.server'))

function App() {

  if (true) {
    return (
      // <WithoutTransition />
      <WithTransition />
    )
  }

  return (
    <QueryClientProvider client={client}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15%',
        height: '100%',
        flexDirection: 'column'
      }}>
        {/* <div>
          <Suspense fallback={<div style={{ textAlign: 'center' }}>시간 로딩중</div>}>
            <Title />
          </Suspense>
        </div>

        <Suspense fallback={<div style={{ textAlign: 'center' }}>유저정보 로딩중</div>}>
          <User />
        </Suspense>
        <Suspense fallback={<div style={{ textAlign: 'center' }}>광고 로딩중</div>}>
          <Ads />
        </Suspense>
      </div> */}

        {/* 서스펜스 없는 예시 */}
        <div>
          <Title />
        </div>

        <User />
        <Ads />
      </div>

    </QueryClientProvider>
  );
}

export default App;
