import React, { useState } from 'react';
import './Pizzacard.css';
import PizzaImage from './Pizza.jpg'; // Импорт изображения

const Pizzacard = () => {
  const [quantity, setQuantity] = useState(1); // Количество
  const [diameter, setDiameter] = useState(null); // Диаметр: null для состояния "не выбран"

  // Цены для каждого диаметра
  const prices = {
    25: 550,
    30: 575,
    35: 600,
  };

  // Функции для изменения количества
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="pizzacard">
      <div className="badge">Хит сезона</div>
      <img
        src={PizzaImage} // Используем импортированное изображение
        alt="Пепперони"
        className="pizza-image"
      />
      <h3>Пепперони</h3>
      <p>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>

      {/* Выпадающий список для выбора диаметра */}
      <select
        className="diameter-select"
        value={diameter || ""} // Значение по умолчанию — пустая строка
        onChange={(e) => setDiameter(Number(e.target.value))} // Обновляем диаметр
      >
        <option value="" disabled>
          Диаметр
        </option>
        <option value="25">Диаметр 25 см</option>
        <option value="30">Диаметр 30 см</option>
        <option value="35">Диаметр 35 см</option>
      </select>

      {/* Отображение цены */}
      <p className="price">
        {diameter ? `${prices[diameter] * quantity} ₽` : `от ${prices[25]} ₽`}
      </p>

      {/* Управление количеством */}
      <div className="quantity-controls">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
        <button className="add-to-cart">🛒</button>
      </div>
    </div>
  );
};

export default Pizzacard;
