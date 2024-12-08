import * as classes from './ChoozingCards.module.scss';
import { Carousel } from 'react-bootstrap';
import photo from '../../assets/images/bg-cart.png';
const ChoozingCards = () => {
    return (
        <div className="container">
            <Carousel className={classes.carousel}>
                <Carousel.Item>
                    <img className={classes.images} src={photo} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className={classes.text}>First slide label</h3>
                        <p className={classes.text}>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={classes.images} src={photo} alt="Second slide" />
                    <Carousel.Caption>
                        <h3 className={classes.text}>Second slide label</h3>
                        <p className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={classes.images} src={photo} alt="Third slide" />
                    <Carousel.Caption>
                        <h3 className={classes.text}>Third slide label</h3>
                        <p className={classes.text}>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ChoozingCards;
