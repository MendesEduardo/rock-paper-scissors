import React from 'react'

function Start({ play }) {
    return (
        <section>
            <main className='botoes'>
                <div className='row1'>
                    <button className='bordas rock picked' onClick={() => play('rock')}>
                        <img
                            src={`/images/icon-rock.svg`}
                            alt="icon Rock"
                        />
                    </button>
                </div>
                <div className='row2'>
                    <button className='bordas paper picked' onClick={() => play('paper')}>
                        <img
                            src={`/images/icon-paper.svg`}
                            alt="icon Paper"
                        />
                    </button>
                    <button className='bordas scissors picked' onClick={() => play('scissors')}>
                        <img
                            src={`/images/icon-scissors.svg`}
                            alt="icon Scissors"
                        />
                    </button>
                </div>
                <div className='row3'>
                    <button className='bordas lizard picked' onClick={() => play('lizard')}>
                        <img
                            src={`/images/icon-lizard.svg`}
                            alt="icon Lizard"
                        />
                    </button>
                    <button className='bordas spock picked' onClick={() => play('spock')}>
                        <img
                            src={`/images/icon-spock.svg`}
                            alt="icon Spock"
                        />
                    </button>
                </div>
            </main>
        </section>
    )
}

export default Start