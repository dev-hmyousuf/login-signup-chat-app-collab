import bgImage from '../assets/img/dark-background.png'
import avatar1 from '../assets/img/avatar-small-1.png'
import avatar2 from '../assets/img/avatar-small-2.png'
import avatar3 from '../assets/img/avatar-small-3.png'
import avatar4 from '../assets/img/avatar-small-4.png'
import yellowStar from '../assets/img/yellow-star.svg'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
        <section className="relative py-20 2xl:py-10 overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
          <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
            <img
              className="block w-full h-142 sm:h-full object-cover rounded-5xl"
              src={bgImage}
              alt=""
            />
            <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
              <div className="max-w-md mx-auto">
                <h4 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-8">
                  Sign up a new account
                </h4>
                <div className="md:flex mb-20">
                  <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-gray-600">
                    <svg
                      width={84}
                      height={10}
                      viewBox="0 0 84 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.25C0.585786 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585786 5.75 1 5.75L1 4.25ZM84 5.00001L76.5 0.669879L76.5 9.33013L84 5.00001ZM1 5.75L77.25 5.75001L77.25 4.25001L1 4.25L1 5.75Z"
                        fill="#FAFBFC"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-200">
                        We kindly request you to enter
                      your details.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-4 items-center">
                    <img
                      className="w-10 h-10"
                      src={avatar1}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 -ml-3"
                      src={avatar2}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 -ml-3"
                      src={avatar3}
                      alt=""
                    />
                    <img
                      className="w-10 h-10 -ml-3"
                      src={avatar4}
                      alt=""
                    />
                    <div className="flex -ml-3 items-center justify-center w-10 h-10 border-2 border-gray-900 bg-gray-50 rounded-full">
                      <span className="text-gray-900 font-medium">+5</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex items-center">
                        <img
                          className="mr-1"
                          src={yellowStar}
                          alt=""
                        />
                        <img
                          className="mr-1"
                          src="saturn-assets/images/sign-up/yellow-star.svg"
                          alt=""
                        />
                        <img
                          className="mr-1"
                          src="saturn-assets/images/sign-up/yellow-star.svg"
                          alt=""
                        />
                        <img
                          className="mr-1"
                          src="saturn-assets/images/sign-up/yellow-star.svg"
                          alt=""
                        />
                        <img
                          className="mr-2"
                          src="saturn-assets/images/sign-up/yellow-star.svg"
                          alt=""
                        />
                        <span className="font-semibold text-gray-50">5.0</span>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-50">
                      from 200+ reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="max-w-lg lg:pt-8 2xl:pt-24 lg:pb-8 mx-auto 2xl:mr-0">
            <h3 className="text-5xl sm:text-6xl text-gray-900 font-bold mb-4">
              Sign up your Account
            </h3>
            <p className="text-lg text-gray-500 mb-15">
              See our software in action with the demo version.
            </p>
            <div className="flex flex-wrap mb-6 items-center -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                <a
                  className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                  href="#"
                >
                  <FaGoogle />
                  <span className="ml-4 text-sm font-semibold text-gray-500">
                    Login with Google
                  </span>
                </a>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <a
                  className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                  href="#"
                >
                  <FaFacebook /> 
                  <span className="ml-4 text-sm font-semibold text-gray-500">
                    Login with Facebook
                  </span>
                </a>
              </div>
            </div>
            <div className="flex mb-6 items-center">
              <div className="w-full h-px bg-gray-300" />
              <span className="mx-4 text-sm font-semibold text-gray-500">
                Or
              </span>
              <div className="w-full h-px bg-gray-300" />
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor=""
                >
                  Name
                </label>
                <input
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type="text" name='name'
                  placeholder="Jhon Smith"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-1.5 text-sm text-gray-900 font-semibold"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type="email"
                  placeholder="pat@saturn.dev"
                />
              </div>
              <div className="mb-7">
                <div className="flex mb-1.5 items-center justify-between">
                  <label
                    className="block text-sm text-gray-900 font-semibold"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <a
                    className="inline-block text-xs font-semibold text-orange-900 hover:text-gray-900"
                    href="#"
                  >
                    Forget password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                    <img
                      src="saturn-assets/images/sign-up/icon-eye.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="flex mb-6 items-center">
                <input type="checkbox" defaultValue="" id="" />
                <label className="ml-2 text-xs text-gray-800" htmlFor="">
                  Agree all <Link to="/privacy" className="text-blue-500">Privacy Policy</Link> and <Link to="/agrrements" className="text-blue-500">Agreements</Link> .
                </label>
              </div>
              <button
                className="relative group block w-full mb-32 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                type="submit"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <span className="relative">Sign up</span>
              </button>
              <div className="text-center">
                <span className="text-xs font-semibold text-gray-900">
                  <span>Already have a account?</span>
                  <Link
                    className="inline-block ml-1 text-orange-900 hover:text-orange-700"
                    to="/login"
                  >
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
    </>
  )
}

export default Login

