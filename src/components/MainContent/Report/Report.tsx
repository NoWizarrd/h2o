import { DataSumType } from '../../../types/DataTypes'
import ReportSquare from './ReportSquare'
import { faker } from '@faker-js/faker';
import styles from './Report.module.scss'

interface ReportProps {
  data: DataSumType; 
}

function getRandomPercentage(): number {
  return faker.number.int({
    min: 0,
    max: 100, 
  });
}

const randomPercentage1 = getRandomPercentage();
const randomPercentage2 = getRandomPercentage();
const randomPercentageMain = Math.round((randomPercentage1 + randomPercentage2) / 2)

export default function Report(props: ReportProps) {
  const {data} = props
  return (
    <div className={styles.reportBlock}>
        <h1 className={styles.h1}>Сводный отчет</h1>
        <div className={styles.reportWrapper}>
            <ReportSquare main={true} data={data} percentage={randomPercentageMain}/>
            <ReportSquare data={data} B2B={true} percentage={randomPercentage1}/>
            <ReportSquare  data={data} B2B={false} percentage={randomPercentage2}/>
        </div>
    </div>
  )
}
