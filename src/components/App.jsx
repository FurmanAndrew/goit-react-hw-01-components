
import user from '../library/user.json'
import statistics from '../library/data.json'
import friends from '../library/friends.json'
import transactions from '../library/transactions.json'
import {Profile} from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { Friends } from './FriendsList/FriendsList'
import { TransactionList } from './TransactionList/TransactionList'
export const App = () => {
  return (
    <div
      style={{
        height: '5000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      <Profile props={user}></Profile>
      <Statistics title='dsvs' stats={statistics}></Statistics>
      <Friends friends={friends}></Friends>
      <TransactionList transactionHistory={transactions}></TransactionList>
    </div>
  );
};
