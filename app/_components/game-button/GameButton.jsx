import Link from 'next/link'

const ICON_SIZE = 64
const translateClass = 'transition-transform -translate-y-1 hover:-translate-y-2'

const GameButton = ({ text, link, IconComponent }) => {
  return (
    <Link
      className='flex-1 bg-accent rounded-md'
      href={link}
    >
      <div className={`${translateClass} bg-light flex flex-col items-center p-3 rounded-md shadow-2xl h-full`}>
        <IconComponent
          className='text-dark'
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
        <p className="text-dark text-center mt-2">{text}</p>
      </div>
    </Link>
  )
}

export { GameButton }
