import React, { useState } from "react";
function Games() {
  const [games, setgames] = useState([
    {
      title: "LittleBigPlanet PS Vita",
      platform: "PlayStation Vita",
      score: 9,
      genre: "Platformer",
      editors_choice: "Y",
    },
    {
      title: "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
      platform: "PlayStation Vita",
      score: 9,
      genre: "Platformer",
      editors_choice: "Y",
    },
    {
      title: "Resident Evil 6",
      platform: "Xbox 360",
      score: 7.9,
      genre: "Action, Adventure",
      editors_choice: "N",
    },
    {
      title: "Shad'O",
      platform: "PC",
      score: 7,
      genre: "Adventure",
      editors_choice: "N",
    },

    {
      title: "Splice: Tree of Life",
      platform: "iPad",
      score: 8.5,
      genre: "Puzzle",
      editors_choice: "N",
    },
    {
      title: "NHL 13",
      platform: "Xbox 360",
      score: 8.5,
      genre: "Sports",
      editors_choice: "N",
    },
    {
      title: "NHL 13",
      platform: "PlayStation 3",
      score: 8.5,
      genre: "Sports",
      editors_choice: "N",
    },
    {
      title: "Total War Battles: Shogun",
      platform: "Macintosh",
      score: 7,
      genre: "Strategy",
      editors_choice: "N",
    },
    {
      title: "Double Dragon: Neon",
      platform: "Xbox 360",
      score: 3,
      genre: "Fighting",
      editors_choice: "N",
    },
    {
      title: "Guild Wars 2",
      platform: "PC",
      score: 9,
      genre: "RPG",
      editors_choice: "Y",
    },
    {
      title: "Double Dragon: Neon",
      platform: "PlayStation 3",
      score: 3,
      genre: "Fighting",
      editors_choice: "N",
    },
    {
      title: "Total War Battles: Shogun",
      platform: "PC",
      score: 7,
      genre: "Strategy",
      editors_choice: "N",
    },
    {
      title: "Tekken Tag Tournament 2",
      platform: "PlayStation 3",
      score: 7.5,
      genre: "Fighting",
      editors_choice: "N",
    },
    {
      title: "Tekken Tag Tournament 2",
      platform: "Xbox 360",
      score: 7.5,
      genre: "Fighting",
      editors_choice: "N",
    },
    {
      title: "Wild Blood",
      platform: "iPhone",
      score: 7,
      genre: "",
      editors_choice: "N",
    },
    {
      title: "Mark of the Ninja",
      platform: "Xbox 360",
      score: 9,
      genre: "Action, Adventure",
      editors_choice: "Y",
    },
    {
      title: "Mark of the Ninja",
      platform: "PC",
      score: 9,
      genre: "Action, Adventure",
      editors_choice: "Y",
    },
    {
      title: "Home: A Unique Horror Adventure",
      platform: "Macintosh",
      score: 6.5,
      genre: "Adventure",
      editors_choice: "N",
    },
    {
      title: "Home: A Unique Horror Adventure",
      platform: "PC",
      score: 6.5,
      genre: "Adventure",
      editors_choice: "N",
    },
    {
      title: "Avengers Initiative",
      platform: "iPhone",
      score: 8,
      genre: "Action",
      editors_choice: "N",
    },
    {
      title: "Way of the Samurai 4",
      platform: "PlayStation 3",
      score: 5.5,
      genre: "Action, Adventure",
      editors_choice: "N",
    },
  ]);
  return (
    <>
      <div className="container my-3">
      <h2>Welcome to gaming world</h2>
        <div className="row">
          {games.map((element) => {
            return (
              <div className="col-md-4 my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    class="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title"> Title : {element.title}</h6>
                    <h6 className="card-title">
                      {" "}
                      Platform : {element.platform}
                    </h6>
                    <h6 className="card-title"> Score : {element.score}</h6>
                    <h6 className="card-title"> Genre : {element.genre}</h6>
                    <h6 className="card-title">
                      Editor's Choice: {element.editors_choice}
                    </h6>
                    <a href="#" className="btn btn-primary">
                      Play Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
