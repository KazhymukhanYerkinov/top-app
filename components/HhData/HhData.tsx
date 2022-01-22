import { Card } from "..";
import RateIcon from './rate.svg';
import { HhDataProps } from "./HhData.props";
import styles from './HhData.module.css';
import { priceRU } from "../../helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}> All vacancies </div>
				<div className={styles.countValue}> {count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}> Junior </div>
					<div className={styles.salaryValue}> {priceRU(juniorSalary)} </div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}> Middle </div>
					<div className={styles.salaryValue}> {priceRU(middleSalary)} </div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div>
					<div className={styles.title}> Senior </div>
					<div className={styles.salaryValue}> {priceRU(seniorSalary)} </div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};