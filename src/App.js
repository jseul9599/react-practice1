import {Routes, Route} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;




/*

기존 v5까지의 방식
<Switch> // 한 페이지만 랜더
  <Route path='/' exact={true}> // AllMeetupsPage가 중복으로 나오는 것을 방지?
    <AllMeetupsPage />
  </Route>
  <Route path='/new-meetup'>
    <NewMeetupPage />
  </Route>
  <Route path='/favorites'>
    <FavoritesPage />
  </Route>
</Switch>


v6방식
<Routes>
  <Route path='/' element={<AllMeetupsPage />} />
  <Route path='/new-meetup' element={<NewMeetupPage />} />
  <Route path='/favorites' element={<FavoritesPage />} />
</Routes>

*/ 