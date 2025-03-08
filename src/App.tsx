import styles from './App.module.scss'
import Chart from './components/MainContent/Chart/Chart'
import Report from './components/MainContent/Report/Report'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <main className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
            <Navbar/>
            <div className={styles.dataSection}>
              <section>
                <Report/>
                <Chart/>
              </section>
              <section>
                проблемные зоны
              </section>
            </div>
        </div>
    </main>
  )
}

export default App
