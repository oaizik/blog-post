import { Header } from './components/header/header.component';
import { Navigator } from './components/navigator/navigator.component';
import { Footer } from './components/footer/footer.component';

import './config/intl';

import styles from './App.module.scss';

const App = () => {

    return (
		<div className={styles.app}>
			<Header />
			<Navigator />
			<Footer />
		</div>
    );
}

export default App;
