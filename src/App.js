

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width="40px" height="40px" src="/img/logo.svg" alt="logo" />
            <div className="headerInfo">
              <h3 className="text-uppercase">REACT SNEAKERS</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width="18px" height="18px" src="/img/basket.svg" alt="basket" />
            <span>105 $</span>
          </li>
          <li>
            <img width="20px" height="20px" src="/img/user.svg" alt="logo" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          
        <div className="card">
          <img width={133} height={112} src="/img/sneackers/sneackers1.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>99 $</b>
            </div>
            <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/sneackers2.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>99 $</b>
            </div>
            <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/sneackers3.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>99 $</b>
            </div>
            <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneackers/sneackers4.jpg" alt="Sneakers" />
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>99 $</b>
            </div>
            <button className="button">
                <img src="/img/plus.svg" alt="Plus" />
              </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
