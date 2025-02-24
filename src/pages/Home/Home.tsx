import { Hero } from "../../components/Hero/Hero";
import css from './Home.module.css';

const Home = () => {
    return (
        <main className={css.main}>
            <Hero />
        </main>
    )
}

export default Home;