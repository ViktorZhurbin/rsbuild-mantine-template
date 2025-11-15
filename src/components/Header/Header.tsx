import styles from "./Header.module.css";

import { DarkModeToggle } from "~/ui/DarkModeToggle/DarkModeToggle";
import { HomeButton } from "./HomeButton";

export const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.innerWrapper}>
				<HomeButton />
			</div>

			<div className={styles.innerWrapper}>
				<DarkModeToggle />
			</div>
		</div>
	);
};
