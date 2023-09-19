function App() {
  return (
    <>
      <div className="container">
        <div className="grid-container">
          <h1>Boa tarde, </h1>

          <div className="container-water">
            <p>%</p>
            <p>Beber água</p>
            <p>Meta: L</p>
          </div>

          <div className="container-meta">
            <p>Meta diária</p>
            <input type="range" name="" id="" />
            <p>Quantidade por timer</p>
            <input type="range" name="" id="" />
            <div className="set-time">
              <input type="text" className="hour" placeholder="" name="" id="" maxLength={2} />h
              <span>:</span>
              <input type="text" className="hour" placeholder="" name="" id="" maxLength={2} />m
            </div>
            <input type="button" value="Começar >" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
