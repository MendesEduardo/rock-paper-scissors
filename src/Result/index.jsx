

function Result({ playerChoice, computerChoice, result, setState }) {
  return (
    <section>
      <article className="res">
        <div>
          <div className={`${result === "You win" ? "winOrLose" : ""} `}>
            <div className={`pickedYour bordas ${playerChoice}`}>
              <img
                src={`/images/icon-${playerChoice}.svg`} alt=""
              />
            </div>
          </div>
          <p>
            Your picked
          </p>
        </div>

        <div>
          <div className={`${result === "You lose" ? "winOrLose" : ""} `}>
            <div className={`pickedHouse bordas ${computerChoice}`}>
              <img src={`/images/icon-${computerChoice}.svg`} alt=""
              />
            </div>
            <p>
              The house picked
            </p>
          </div>
        </div>
      </article>
      <article className="again">
        <p>{result}</p>
        <button onClick={() => setState(null)}>Play again</button>
      </article>
    </section>
  )
}

export default Result;