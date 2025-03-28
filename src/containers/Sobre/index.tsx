import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Sou desenvolvedora front-end apaixonada por criar interfaces interativas e
      responsivas. Este projeto, desenvolvido em React, é uma recriação do
      GitHub. Nele, você pode explorar repositórios, visualizar informações e
      navegar de maneira intuitiva. Fui inspirada pela estrutura do GitHub para
      criar uma interface funcional e dinâmica, utilizando tecnologias como
      React, JavaScript e styled-components.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=deborasete&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=deborasete&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
