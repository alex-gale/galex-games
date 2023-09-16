import Link from 'next/link'

const translateClass = 'transition-transform -translate-y-1 hover:-translate-y-2'

const GameButton = ({ text, icon, link }) => {
  return (
    <Link
      className='bg-accent rounded-md'
      href={link}
    >
      <div className={`${translateClass} bg-light flex flex-col items-center p-3 rounded-md w-52 shadow-xl`}>
        <div className='icon w-16 h-16 bg-red' />
        <p className="text-center mt-2">{text}</p>
      </div>
    </Link>
  )
}

export { GameButton }
