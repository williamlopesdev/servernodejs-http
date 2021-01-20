import React from 'react'


const App = () => {

  // estado que recebr dados e mostrar na tela
  const [dados, setDados] = React.useState(null)

  
  async function handleClick({target}){
      
      const produtoResponse = await fetch(`http://localhost:1910/`)
      // trasformando objeto
      const produtoJson = await produtoResponse.json()

      
      //setDados(produtoJson)
      console.log(produtoJson)
  }


  return (
    <div>
        <button onClick={handleClick}>
              Smartphone
        </button>
        
        <button onClick={handleClick}>
              Notebook
        </button>
        
        
        {/* mesma coisa do de baixo, porem maior */}
        {/* {dados ? <Produto dados={dados}/> : null} */}

        {/* se existir dados, enviar para o componente 'Produto', se nao, não mostrar nada */}
    </div>
  )
}

export default App


