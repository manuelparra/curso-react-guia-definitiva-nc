import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <p>Chanchito Feliz</p> 
      <Link href="/chanchito">Chanchito Triste</Link>
      <br />
      <Link href="/chanchitos">Ir a chanchitos</Link>
    </div> 
  )
}

export default Home
