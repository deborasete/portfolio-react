import { Card, LinkBotao } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: ProjetoProps) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={link} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
