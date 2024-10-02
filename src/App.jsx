import Login from "./components/login/login";
import Chat from "./components/chat/chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/list"
const App = () => {
 const user =false;
  return (
    <div className='container'>
      {user? (
       <>
      
      <List/>
      <Chat/>
      <Detail/>
      </>
      ):(
         <Login/>
      )}  
     
    </div>
  );
};

export default App