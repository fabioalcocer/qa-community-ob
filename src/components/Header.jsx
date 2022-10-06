// eslint-disable-next-line import/no-absolute-path
import logo from '../assets/logo.png'

function Header () {
  return (
    <header className='w-full px-5 bg-slate-800 h-20 rounded-b-lg'>
      <nav className='max-w-7xl h-full container mx-auto flex items-center justify-between'>
        <img src={logo} alt='logo' className='w-10 h-10 md:w-14 md:h-14' />
        <h1 className='text-xl md:text-2xl text-slate-100'>Q&A OpenBootcamp</h1>
      </nav>
    </header>
  )
}

export default Header
