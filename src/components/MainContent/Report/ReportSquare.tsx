import styles from "./ReportSquare.module.scss";
import { DataSumType } from "../../../types/DataTypes";

interface ReportSquareProps {
    main?: boolean;
    data: DataSumType;
    B2B?: boolean;
    percentage: number;
}

export default function ReportSquare({ main, data, B2B, percentage}: ReportSquareProps) {

    let actualPercentage;
    let text;
    let number;
    if(B2B) {
        actualPercentage = Math.sign(data.B2B) * percentage
        text = 'B2B'
        number = data.B2B
    } else if(B2B === false) {
        actualPercentage = Math.sign(data.B2C) * percentage
        text = 'B2C'
        number = data.B2C
    } else {
        actualPercentage = Math.sign(data.B2C + data.B2B) * percentage
        text = 'Итого'
        number = data.B2C + data.B2B
    }

    const background = actualPercentage > 0 ? styles.bgPositive : styles.bgNegative;
    const backgroundLight = actualPercentage > 0 ? styles.bgPositiveLight : styles.bgNegativeLight;
    const percentColor = actualPercentage > 0 ? styles.textPositive : styles.textNegative;
    const percentBgMain = actualPercentage > 0 ? styles.bgPercentMainPositive : styles.bgPercentMainNegative;
    const rotation = actualPercentage <= 0 ? '180deg' : ''

    return (
        <div className={`${styles.report} ${main && background}`}>
            <div className={`${styles.percentage} ${main ? percentBgMain : backgroundLight}`}>
                <svg style={{rotate: rotation}} className={main ? styles.textWhite : percentColor} width="13" height="16" viewBox="0 0 13 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path  fill="currentColor" d="M12.543 7.32617C12.3438 7.52539 12.0781 7.625 11.8125 7.625C11.5137 7.625 11.248 7.52539 11.0488 7.32617L7.5625 3.83984V14C7.5625 14.5977 7.06445 15.0625 6.5 15.0625C5.96875 15.0625 5.4375 14.5977 5.4375 14V3.83984L1.91797 7.32617C1.51953 7.75781 0.822266 7.75781 0.423828 7.32617C-0.0078125 6.92773 -0.0078125 6.23047 0.423828 5.83203L5.73633 0.519531C6.13477 0.0878906 6.83203 0.0878906 7.23047 0.519531L12.543 5.83203C12.9746 6.23047 12.9746 6.92773 12.543 7.32617Z"/>
                </svg>
                <span className={main ? styles.textWhite : percentColor}>{actualPercentage}%</span>
            </div>
            <div className={`${styles.number} ${main && styles.textWhite}`}>
                ₽ {new Intl.NumberFormat("ru-RU").format(number)}
            </div>
            <div className={`${styles.name} ${main && styles.textWhite}`}>
                {text}
            </div>
        </div>
    );
}
