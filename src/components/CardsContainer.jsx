import questions from '../data/questions'
import logo from '../assets/logo.png'

function CardsContainer () {
  return (
    <section className='container mx-auto max-w-7xl'>
      <div className='mt-8 flex flex-wrap justify-center gap-6'>
        {questions.map((question) => (
          <article
            key={question.name}
            className='flex w-80 lg:w-96 flex-col rounded-md bg-slate-800 p-5 pb-4'
          >
            <h3 className='mb-3 font-bold text-sky-500'>
              {question.name}
            </h3>
            <p className='mb-auto text-sm leading-6 text-slate-100'>
              {question.answer}
            </p>
            <footer className='mt-4 flex items-center justify-between'>
              <p className='text-sky-500/90'>OpenBootcamp</p>
              <img src={logo} alt='logo card' className='w-10' />
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CardsContainer
