import Head from 'next/head'
import { MdEmail } from 'react-icons/md'
import Navbar from '../../../components/Navbar/Navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function ThankYou() {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://us06web.zoom.us/j/81451214111')
      .then(() => {
        setCopySuccess('Link copied!');
        setTimeout(() => setCopySuccess(''), 3000); // Clear the message after 3 seconds
      })
      .catch(err => {
        setCopySuccess('Failed to copy');
      });
  };

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
          <h1 className="text-2xl font-bold text-center text-gray-900">Congratulation! you have successfully registered for Workshop</h1>
          <p className="mt-4 text-gray-700 text-center">
            Please save the below link and use the same to join on 22nd June at 11 AM.
          </p>
          <br/>
          <div className='m-2 flex flex-row items-center max-sm:flex-col '>
            <b>Link:</b>  
            <Link className="text-blue-500 ml-2" href="https://us06web.zoom.us/j/81451214111" target='_blank'>https://us06web.zoom.us/j/81451214111</Link>
          </div>
          <button 
            onClick={copyToClipboard} 
            className="mt-4 text-white bg-blue-500 rounded-lg px-4 py-1 hover:bg-blue-600"
          >
            Copy Link
          </button>
          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
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
