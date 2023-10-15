import Link from 'next/link'

const Page = ({ params }) => {
  return (
    <div>
      My Post : {params.slug[0]}{params.slug[1] == null ? "" : "/" + params.slug[1]}
      <br />
      <Link href="/">Ir a Inicio</Link>
    </div>
  )
}

export default Page
