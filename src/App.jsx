import Profiler from './components/Profile/Profile';
import userData from './components/userData.json';
function App() {
  // console.log(userData.username);

  return (
    <div className='wrapApp'>
      <Profiler
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
