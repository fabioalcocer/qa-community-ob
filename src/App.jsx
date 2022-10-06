import CardsContainer from './components/CardsContainer'
import Header from './components/Header'

function App () {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Header />
      <main className='p-5'>
        <CardsContainer />
      </main>
    </div>
  )
}

export default App
