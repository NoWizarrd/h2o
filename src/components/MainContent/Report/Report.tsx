import styles from './Report.module.scss'
import ReportSquare from './ReportSquare'

export default function Report() {
  return (
    <div>
        <h1 className={styles.h1}>Сводный отчет</h1>
        <div className={styles.reportWrapper}>
            <ReportSquare main={true} positive={true}/>
            <ReportSquare positive={true}/>
            <ReportSquare positive={false}/>
        </div>
    </div>
  )
}
