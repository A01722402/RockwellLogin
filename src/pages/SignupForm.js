import Image from 'next/image';
import Link from 'next/link';
import { FaRegEnvelope, FaLock } from 'react-icons/fa';

export default function SignupForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <Link href="/MainForm">
                  <Image src="/RockwellLogo.svg" alt="Logo" width={150} height={100} />
              </Link>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-red-600 mb-2">Wecome to Rockwell !</h2>
              <div className="border-2 w-10 border-red-600 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2"/>
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2"/>
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2"/>
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <a href="#" className="border-red-600 text-red-600 border-2 px-12 py-2 rounded-full inline-block font-semibold hover:scale-110">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
