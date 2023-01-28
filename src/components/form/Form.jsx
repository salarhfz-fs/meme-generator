import './form.scss'

function Form({ dispatch, onMemeChange, setup, punchline }) {
    return (
        <form className="form">
            <section className="form__inputs">
                <input
                    type='text'
                    id='setup'
                    placeholder="Setup"
                    onChange={e => dispatch({ type: 'topText', payload: e.target.value })}
                    value={setup}
                />
                <input
                    type='text'
                    id='punchline'
                    placeholder='Punchline'
                    onChange={e => dispatch({ type: 'bottomText', payload: e.target.value })}
                    value={punchline}
                />
            </section>
            <button
                className="form__submit"
                onClick={e => {
                    e.preventDefault()
                    onMemeChange()
                }}>
                Get a new meme image  🖼
            </button>
        </form>
    )
}

export default Form
