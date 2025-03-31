import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

type ProjetoGitHub = {
  id: number
  name: string
  description: string | null
  html_url: string
}

const Projetos = () => {
  const [projetos, setProjetos] = useState<ProjetoGitHub[]>([])

  useEffect(() => {
    axios
      .get('https://api.github.com/users/deborasete/repos?per_page=100')
      .then((response) => {
        setProjetos(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar projetos do Github', error)
      })
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {projetos.length > 0 ? (
          projetos.map((projeto) => (
            <li key={projeto.id}>
              <Projeto
                titulo={projeto.name}
                descricao={projeto.description || ''}
                link={projeto.html_url}
              />
            </li>
          ))
        ) : (
          <p>Carregando projetos...</p>
        )}
      </Lista>
    </section>
  )
}

export default Projetos
