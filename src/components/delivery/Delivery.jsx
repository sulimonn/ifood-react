import Groceries from '../../img/groceries.svg'
import Delivery_pic from '../../img/delivery.svg'
import Restaurants from '../../img/restaurants.svg'
import './Delivery.css'
const Delivery = () => {
  return (
    <section className="delivery">
      <div className="del__container">
        <h1>Доставим все что угодно</h1>
        <div className="why_coop">
          <div className="why_coop__column">
            <img src={Restaurants} />
            <h2>Лучшие рестораны вашего города</h2>
            <p>В нашем приложении — огромный выбор ресторанов. Закажите свою любимую еду или откройте для себя новые рестораны поблизости!</p>
          </div>
          <div className="why_coop__column">
            <img src={Groceries} />
            <h2>Быстрая доставка</h2>
            <p>Наш плюс — скорость. Закажите доставку в черте города и мы все доставим за считанные минуты.</p>
          </div>
          <div className="why_coop__column">
            <img src={Delivery_pic} />
            <h2>Доставка продуктов и не только</h2>
            <p>В нашем приложении есть все необходимое! От супермаркетов до небольших магазинов, от аптек до флористических бутиков — если нужный товар продается в вашем городе, мы доставим его вам!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery