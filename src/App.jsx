import { useEffect, useReducer, useState } from 'react'

import { getRandomIntegerInRange } from './common/utils'
import Header from './components/header'
import Form from './components/form'
import Meme from './components/meme'

import './App.scss'

const initialState = {
  memes: [],
  currentMeme: null,
  topText: '',
  bottomText: ''
}

function reducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case 'memes':
      return { ...state, memes: payload }
    case 'currentMeme':
      return { ...state, currentMeme: payload }
    case 'topText':
      return { ...state, topText: payload }
    case 'bottomText':
      return { ...state, bottomText: payload }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes')
      const responseJson = await response.json();
      if (responseJson?.success) {
        dispatch({ type: 'memes', payload: responseJson.data?.memes })
      }
    }
    getMemes()
  }, [])

  useEffect(() => {
    updateMeme()
  }, [state.memes])

  function updateMeme() {
    const randomInteger = getRandomIntegerInRange(0, state.memes?.length - 1)
    dispatch({ type: 'currentMeme', payload: state.memes[randomInteger] })
  }

  return (
    <div className="container">
      <Header />
      <Form
        setup={state.topText}
        punchline={state.bottomText}
        dispatch={dispatch}
        onMemeChange={updateMeme}
      />
      <Meme
        topText={state.topText}
        bottomText={state.bottomText}
        memeUrl={state.currentMeme?.url}
      />
    </div>
  )
}

export default App
