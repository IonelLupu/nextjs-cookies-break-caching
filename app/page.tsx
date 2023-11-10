// export const revalidate = 10

import { cookies } from 'next/headers'

export async function generateMetadata() {
  const response = await fetch(`http://localhost:3000/api/test`)

  return {
    title: "title here",
  }
}

export default async function Home() {
  // const cookiesStore = cookies() // refresh the page with and without this line and notice the logs

  const response = await fetch(`http://localhost:3000/api/test`)

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis dignissimos eligendi ex exercitationem, harum impedit inventore ipsa itaque magni minima nam natus omnis pariatur, provident quaerat repellendus similique voluptatum!
      </main>
  )
}
