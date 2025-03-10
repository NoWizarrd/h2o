import ChartComponent from './components/MainContent/Chart/Chart'
import Report from './components/MainContent/Report/Report'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { calculateSumByDivision, generateData } from './utils/generateData'
import styles from './App.module.scss'
import TroubleZones from './components/MainContent/TroubleZones/TroubleZones'

function App() {
  const data = generateData(1000)
  const dataSum = calculateSumByDivision(data.data)

  return (
    <main className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
            <Navbar/>
            <div className={styles.dataSection}>
              <section>
                <Report data={dataSum}/>
                <ChartComponent data={data}/>
              </section>
              <section>
                <TroubleZones data={data}/>
              </section>
            </div>
        </div>
    </main>
  )
}

export default App
