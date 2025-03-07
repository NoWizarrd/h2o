import styles from './App.module.scss'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <main className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
            main
        </div>
    </main>
  )
}

export default App
