import '../css/services.css';


const cardsData = [
  { id: 'card1', title: 'Card 1', backgroundColor: '#52B2CF' },
  { id: 'card2', title: 'Card 2', backgroundColor: '#E5A36F' },
  { id: 'card3', title: 'Card 3', backgroundColor: '#9CADCE' },
  { id: 'card4', title: 'Card 4', backgroundColor: '#D4AFB9' }
];

const CardList = () => {
  return (
    <div className="container">
      <ul id="cards">
        {cardsData.map((card, index) => (
          <li key={card.id} className="card" id={card.id} style={{ '--index': index + 1 }}>
            <div className="card-body" style={{ backgroundColor: card.backgroundColor }}>
              <h2>{card.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
