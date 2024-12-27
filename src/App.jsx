import './App.css'

const product = [
  {
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.50,
    image: './assets/image/waffle.svg',
  },
  {
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.00
  },
  {
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.00
  },
  {
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.50
  },
  {
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.00
  },
  {
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.00
  },
  {
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.50
  },
  {
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.50
  },
  {
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.50
  },
];


export default function App() {
  return (
    <div className="user">
      {product.map(({ id , name , category , price , image}) => (
        <div key={id}>
          <h4>{category}</h4>
          <h3>{name}</h3>
          <p>{price}</p>
        <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  );
}