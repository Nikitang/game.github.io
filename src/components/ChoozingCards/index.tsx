import * as classes from './ChoozingCards.module.scss';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import photo from '../../assets/images/bg-cart.png';
import { selectChoozeLevel } from '../../redux/choozeLevel/selectors';
import { setLevel } from '../../redux/choozeLevel/slice';

const carouselLvl = [
    { name: 'Низкая сложность', btn: 'easy', level: 1 },
    { name: 'Cредняя сложность', btn: 'middle', level: 2 },
    { name: 'Высокая сложность', btn: 'hard', level: 3 },
];
const ChoozingCards = () => {
    const { level } = useSelector(selectChoozeLevel);
    const dispatch = useDispatch();

    const choozeLevel = (id: number) => {
        dispatch(setLevel(id));
    };

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.header}>Выбранный уровень: {level === 0 ? '' : level}</h1>
            </div>
            <Carousel className={classes.carousel}>
                {carouselLvl.map((item, i) => (
                    <Carousel.Item>
                        <img className={classes.images} src={photo} alt="First slide" />
                        <Carousel.Caption>
                            <h3 className={classes.text}>{item.name}</h3>
                            <button
                                onClick={() => choozeLevel(item.level)}
                                className={classes[item.btn]}
                            >
                                Выбрать
                            </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ChoozingCards;
