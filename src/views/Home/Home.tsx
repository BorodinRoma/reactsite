import {Link} from "react-router-dom";
import './Home.css';
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <main className="Main">
            <Container className="container-fluid w-75 p-3">
                <Container className="container border border-4 border-dark rounded-5">
                    <Container className="text">
                        <h2 className="h2 text-center">О компании</h2>
                    </Container>
                    <Container className="text-center p-2">Наша компания работает с 2010 года, и за это время мы создали
                        бизнес-структуру,
                        которая работает как дорогие швейцарские часы. В чем секрет нашего успеха? Не только в
                        профессионализме
                        и большом опыте работы, но и, в первую очередь, в неподдельной любви к своему делу. К созданию
                        каждого
                        дизайн-проекта, на основе которого наши мастера производят отделочные работы, мы подходим
                        творчески.
                        Поэтому нам удаётся удовлетворять запросы даже самых взыскательных клиентов. Хотите узнать,
                        почему все
                        большее число клиентов предпочитает обращаться в нашу компанию? Тогда запасайтесь кофе и
                        аппетитными
                        булочками — и вперёд!
                    </Container>
                    <img src="https://i.pinimg.com/736x/da/c8/0f/dac80fbfa765803b4bca39cf7aa5b0b7.jpg" width="50%"
                         className="rounded mx-auto d-block rounded-pill border border-5 mb-3 mt-3" alt=""/>
                </Container>
            </Container>


            <div className="container-fluid">
                <h3 className="row_example_info">Варианты ремонта квартир</h3>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="offer-item ">
                                <div className="offer-caption">Косметический ремонт</div>
                                <div className="offer-image">
                                    <img className="img-responsive"
                                         src="https://mykaleidoscope.ru/uploads/posts/2021-03/1616758171_25-p-krutoi-interer-kvartiri-28.jpg"/>
                                </div>
                                <div className="offer-price">от 2 500 руб./кв. м</div>
                                <div className="offer-text">
                                    <ul>
                                        <li>Грунтовка стен</li>
                                        <li>Шпаклевка стен</li>
                                        <li>Покраска потолка</li>
                                        <li>Оклейка стен обоями</li>
                                        <li>Укладка ламината и плитки</li>
                                        <li>Монтаж панелей в ванной</li>
                                        <li>Установка сантехники</li>
                                        <li>Установка розеток и выключателей</li>
                                        <li>Установка дверей, наличников и плинтусов</li>
                                        <li>Уборка помещения</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="offer-item ">
                                <div className="offer-caption">Капитальный ремонт</div>
                                <div className="offer-image">
                                    <img className="img-responsive"
                                         src="https://manrule.ru/images/article/orig/2021/01/vse-o-remonte-odnokomnatnoj-kvartiry-60.jpg"/>
                                </div>
                                <div className="offer-price">от 3 500 руб./кв. м</div>
                                <div className="offer-text">
                                    <ul>
                                        <li>Дизайн-проект</li>
                                        <li>Демонтажные работы</li>
                                        <li>Монтаж перегородок</li>
                                        <li>Монтаж черновой сантехники</li>
                                        <li>Электромонтажные работы</li>
                                        <li>Штукатурные работы</li>
                                        <li>Выравнивание пола</li>
                                        <li>Плиточные работы</li>
                                        <li>Малярные работы</li>
                                        <li>Укладка ламината</li>
                                        <li>Покраска или оклейка стен обоями</li>
                                        <li>Монтаж натяжных потолков</li>
                                        <li>Установка чистовой сантехники</li>
                                        <li>Установка чистовой электрики</li>
                                        <li>Установка дверей, наличников и плинтусов</li>
                                        <li>Уборка помещения</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="offer-item ">
                                <div className="offer-caption">Дизайнерский ремонт</div>
                                <div className="offer-image">
                                    <img className="img-responsive"
                                         src="https://zhilfond-realt.ru/wp-content/uploads/c/d/c/cdcf138d6672ceca923a22a8699c61ea.jpeg"/>
                                </div>
                                <div className="offer-price">от 4 500 руб./кв. м</div>
                                <div className="offer-text">
                                    <ul>
                                        <li>Авторский дизайн-проект</li>
                                        <li>Демонтажные работы</li>
                                        <li>Монтаж перегородок</li>
                                        <li>Монтаж черновой сантехники</li>
                                        <li>Электромонтажные работы</li>
                                        <li>Штукатурные работы</li>
                                        <li>Выравнивание пола</li>
                                        <li>Монтаж потолков из ГКЛ</li>
                                        <li>Устройство декоративных ниш из ГКЛ</li>
                                        <li>Дополнительная шумоизоляция</li>
                                        <li>Плиточные работы</li>
                                        <li>Малярные работы</li>
                                        <li>Укладка паркетной доски</li>
                                        <li>Покраска или оклейка стен обоями</li>
                                        <li>Установка чистовой сантехники</li>
                                        <li>Установка чистовой электрики</li>
                                        <li>Установка дверей, наличников и плинтусов</li>
                                        <li>Уборка помещения</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home;