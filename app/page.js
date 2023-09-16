import games from './(games)/games'
import { GameButton } from './_components/game-button/GameButton'

const Home = () => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-row p-8 w-full max-w-4xl gap-4 flex-wrap">
        {games.map(({ title, link }) => (
          <GameButton
            key={link}
            link={link}
            text={title}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
