import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <>
      <Header />
      <div className="error-page">
        <h1>404</h1>
        <p>Página não encontrada.</p>
        <Link href="/">Voltar.</Link>
      </div>
      <Footer />
    </>
  )
}
