import styles from './Sidebar.module.scss'
import Logo from '../../assets/Logo.png'
import calendar from '../../assets/calendar.png'
import coins from '../../assets/coins.png'
import menu from '../../assets/menu.png'
import people from '../../assets/people.png'
import report from '../../assets/report.png'
import settings from '../../assets/settings.png'
import ticket from '../../assets/ticket.png'

const sidebarItems = [calendar, menu, ticket, people, coins, report, settings]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img src={Logo} alt='Logo' className={styles.logo}/>
        {
            sidebarItems.map(icon=>(
                <div className={styles.iconWrapper}>
                    <img src={icon} alt={icon} className={styles.icon}/>
                </div>
            ))
        }
    </aside>  
  )
}
