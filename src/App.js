import './App.css';

import DefaultLayout from './layout/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './page/dashboard/Dashboard.page';

// import Entrypage from './page/entry/Entrypage';

function App() {
  return (
    <div className="App">
      {/* <Entrypage/> */}
      <DefaultLayout>
      <Dashboard/>
        </DefaultLayout>

    </div>
  );
}

export default App;
