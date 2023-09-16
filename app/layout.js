import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  const bodyClassName = `${inter.className} bg-dark`

  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Galex Games',
  description: 'Games by Galex'
}

export default RootLayout
