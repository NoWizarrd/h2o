import { GeneratedData } from '../../../types/DataTypes'
import { findTroubleZones } from '../../../utils/findTroubleZones'
import redTroubleIcon from '../../../assets/redTrouble.png'
import orangeTroubleIcon from '../../../assets/orangeTrouble.png'
import styles from './TroubleZones.module.scss'

interface TroubleZonesProps {
    data: GeneratedData
}

const troubleNames = ['Линейный персонал', 'Подразделение разовых работ ФОТ', 
                      'Бензин (наличные)', 'Закупка инвентаря', 'Закупка спецодежды/СИЗ', 
                      'Ремонт оборудования', 'Обслуживание автомобиля', 'Форс-мажоры', 
                      'Рекламные бюджеты (Блогеры)', 'Рекламные бюджеты (Контекст)']

export default function TroubleZones({data}: TroubleZonesProps) {

    const troubleZonesData = findTroubleZones(data.data)

    return (
        <div className={styles.contentWrapper}>
            <h3 className={styles.header}>Проблемные зоны</h3>
            <ul className={styles.troubleList}>
                {
                    troubleZonesData.map((item, index) => (
                            <li key={index} className={styles.troubleListElement}>
                                <img src={item < 50001 ? orangeTroubleIcon : redTroubleIcon} className={styles.image}/>
                                <div>
                                    <p className={styles.troubleTitle}>
                                        {troubleNames[index]}   
                                    </p>
                                    <p className={styles.troubleNumber}>
                                        ₽ {new Intl.NumberFormat("ru-RU").format(item)}
                                    </p>
                                </div>
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}
