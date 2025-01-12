import FriendList from './components/FriendList/FriendList';
import Profiler from './components/Profile/Profile';
import userData from './userData.json'
import friends from './friends.json'
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
      <FriendList friends={friends}/>
    </div>
    
  );
}

export default App;
