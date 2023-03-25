import React, { useState } from 'react';

const data = [
  {
    "_id": "64133046f98daab27cc5123c",
    "name": "Ayaan Pasha",
    "team": "B",
    "jno": 8,
    "age": 20,
    "height": 180,
    "weight": 55,
    "avatar": "https://example.com/avatar1.jpg",
    "position": { x: 150, y: 55 },
    "__v": 0
  },
  {
    "_id": "64133059f98daab27cc5123e",
    "name": "Yashwant Lalwani",
    "team": "A",
    "jno": 10,
    "age": 20,
    "height": 180,
    "weight": 55,
    "avatar": "https://example.com/avatar1.jpg",
    "position": { x: 0, y: 0 },
    "__v": 0
  },
  {
    "_id": "6413313b054345a7eb8a8c01",
    "name": "Jai Sood",
    "team": "A",
    "jno": 9,
    "age": 20,
    "height": 173,
    "weight": 72,
    "avatar": "https://example.com/avatar1.jpg",
    "position": { x: 0, y: 0 },
    "__v": 0
  }
];


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Soccer_Field_Transparant.svg/396px-Soccer_Field_Transparant.svg.png?20160729023054" alt="Football Grid" />
      {data.map((player) => (
        <img
          key={player._id} 
          src={player.avatar}
          alt={player.name}
          style={{
            position: 'absolute',
            left: player.position.x,
            top: player.position.y,
            cursor: 'pointer',
          }}
          onClick={() => handlePlayerClick(player)}
        />
      ))}

      {selectedPlayer && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedPlayer.name}</h2>
            <p>Team: {selectedPlayer.team}</p>
            <p>Jersey Number: {selectedPlayer.jno}</p>
            <p>Age: {selectedPlayer.age}</p>
            <p>Height: {selectedPlayer.height}</p>
            <p>Weight: {selectedPlayer.weight}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
