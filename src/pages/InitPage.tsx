import { FC } from 'react';
import { Link } from 'react-router-dom';

const InitPage: FC = () => {
    return (
        <div className="init-page">
            <div className="init-page__cart">
                <div className="init-page__cart-title">
                    <span>Виселица</span>
                </div>
                <Link to={'/main'} className="init-page__cart-btn">
                    Starting
                </Link>
            </div>
        </div>
    );
};

export default InitPage;
