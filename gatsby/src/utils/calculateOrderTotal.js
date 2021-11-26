import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((total, singleOrder) => {
    const pizza = pizzas.find((p) => p.id === singleOrder.id);
    return total + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
