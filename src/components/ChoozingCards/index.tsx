import * as classes from './ChoozingCards.module.scss';
import { Carousel } from 'react-bootstrap';
import photo from '../../assets/images/bg-cart.png';
const carouselLvl = [
    { name: 'Низкая сложность', btn: 'easy' },
    { name: 'Cредняя сложность', btn: 'middle' },
    { name: 'Высокая сложность', btn: 'hard' },
];
const ChoozingCards = () => {
    return (
        <div className={classes.container}>
            <Carousel className={classes.carousel}>
                {carouselLvl.map((item, i) => (
                    <Carousel.Item>
                        <img className={classes.images} src={photo} alt="First slide" />
                        <Carousel.Caption>
                            <h3 className={classes.text}>{item.name}</h3>
                            <button className={classes[item.btn]}>Выбрать</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ChoozingCards;
