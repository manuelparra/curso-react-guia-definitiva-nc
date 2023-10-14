import Link from 'next/link'

const Page = ({ params }) => {
  return (
    <div>
      My Post : {params.id}
      <br />
      <Link href="/chanchitos">Ir a chanchitos</Link>
    </div>
  )
}

export default Page
