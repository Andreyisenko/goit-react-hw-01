import FriendList from './components/FriendList/FriendList';
import Profiler from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
function App() {
  // console.log(transactions[1].id);
  // console.log(transactions[0]);

  return (
    <div className="wrapApp">
      <Profiler
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
