import Head from 'next/head'
import { MdEmail } from 'react-icons/md'
import Navbar from '../../../components/Navbar/Navbar'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="Thank you for your submission" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar course={false} homePage={true} redirectDM={true}/>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="bg-white p-8 rounded-lg  max-w-md w-full mx-4 animate-fadeIn flex flex-col items-center">
          <MdEmail className="text-8xl text-gray-700 mb-4 animate-slideUp" />
          <h1 className="text-6xl font-bold text-center text-gray-900">Thank You!</h1>
          <p className="mt-4 text-gray-700 text-center">
            Your submission has been received. We will get back to you soon.
          </p>
          <div className="mt-6 text-center">
            <a
              href="https://skillslash.com/liveclass/digital-marketing-master-course"
              className="text-[black] bg-[#F18350] rounded-lg px-6 py-4 hover:text-indigo-800 font-medium"
            >
              Return to Home
            </a>
          </div>
          <p className="mt-6 text-gray-700 text-center">
            Thank you, Keep Learning!
          </p>
        </div>
      </main>
    </>
  )
}
