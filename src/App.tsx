import styles from './App.module.scss'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <main className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
            <Navbar/>
        </div>
    </main>
  )
}

export default App
