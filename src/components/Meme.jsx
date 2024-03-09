import React,{useEffect, useState} from 'react'

const Meme = () => {

  const [meme,setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemes,setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemes(data.data.memes) )
  }, [])
  

    function generateMeme(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prev =>({
         ...prev,
         randomImage:url   
        }))
    }
   

    function handleChange(event){
      const {name,value} = event.target
      setMeme(Prev => ({
        ...Prev,
          [name]:value
      }))
    }
  return (
    <main>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}

        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
        />
        <button 
            onClick={generateMeme}
            className="form--button"
        >
            Get a new meme image 🖼
        </button>
    </div>
    <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
</main>
  )
}

export default Meme