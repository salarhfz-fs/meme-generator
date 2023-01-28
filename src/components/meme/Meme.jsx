import './meme.scss'

function Meme({ memeUrl, topText, bottomText }) {
    if (memeUrl) {
        return (
            <main className='meme'>
                <div className="meme__img" style={{ backgroundImage: `url(${memeUrl})` }}>
                    <span className="meme__img__text meme__img__text__top">{topText}</span>
                    <span className="meme__img__text meme__img__text__bottom" >{bottomText}</span>
                </div>
            </main>
        )
    }
    return null
}

export default Meme
