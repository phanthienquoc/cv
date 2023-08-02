import Skill from './component/Skill';
import Header from './component/Header';
import Profile from './component/Profile';
import Language from './component/Language';
import Education from './component/Education'
import EmployeeHistory from './component/EmployeeHistory';

const App = () => {
  return (
    <>
      <main>
        <Header />
        <div className='aside-mobile'>
          <Skill />
        </div>
        <Profile />
        <EmployeeHistory />
        <Education />
        <footer style={{ minHeight: 200 }}>
        </footer>
      </main>
      <aside>
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <Skill />
          <Language />
        </div>

      </aside>
    </>
  )
}

export default App
