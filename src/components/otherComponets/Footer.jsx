import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <footer className='text-white py-10 bg-[#0c0c0ce8] '>
    //   <div className='container mx-auto'>
    //     <div className=' w-full'>
    //       <img
    //         src='https://saboonexa.in/static/media/logo.0772b8f037b1936a399e.webp'
    //         alt=''
    //         srcSet=''
    //         className='mx-auto'
    //       />
    //     </div>
    //     <div className='border-y border-gray-500  my-10 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 '>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //     </div>
    //   </div>
    // </footer>
    <footer className='bg-black    py-10 text-white'>
      <div className='container mx-auto'>
        <div className=' w-full'>
          <img
            src='https://saboonexa.in/static/media/logo.0772b8f037b1936a399e.webp'
            alt=''
            srcSet=''
            className='mx-auto'
          />
        </div>
        <div className='grid w-full justify-center  border-y border-gray-500 my-5 lg:my-10 py-10 gap-4 text-center  md:grid-cols-4  md:gap-2 md:text-left '>
          <div className='flex flex-col lg:flex-row  justify-around'>
            <div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  XL6
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Ciaz
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Baleno
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Jimny
                </Link>
              </div>
            </div>
            <div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Ignis
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Grand Vitara
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Fornx
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row  justify-around'>
            <div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  About
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Carrers
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Book a service
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Finance
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Insurance
                </Link>
              </div>
            </div>

            {/*  <div className='pt-1 '>
              <Link to='solo'>Grand Vitara</Link>
            </div>
             <div className='pt-1 '>
              <Link to='solo'>Fornx</Link>
            </div>
             <div className='pt-1 '>
              <Link to='solo'>Jimny</Link>
            </div> */}
          </div>

          <div className='flex flex-col lg:flex-row  justify-between'>
            <div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Showrooms
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Workshops
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  TrueValue
                </Link>
              </div>
            </div>
            <div className=''>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Terms and Conditions
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  FAQ's
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  Annual Report
                </Link>
              </div>
              <div className='pt-1 '>
                <Link to='/' className='hover:text-red-600'>
                  CSR Policy
                </Link>
              </div>
            </div>
          </div>
          <div className=' gap-4 pt-3 lg:flex mx-auto justify-center'>
            <a
              href='https://wa.me/+919848898488'
              className=' hover:text-green-600 mb-2 mr-1 '
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 448 512'
                height='28'
                width='28'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'></path>
              </svg>
            </a>
            <a href='tel:9848898488' className='mb-2 mr-1 hover:text-blue-300'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 512 512'
                height='22'
                width='22'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'></path>
              </svg>
            </a>
            <a href='mailto:info@saboomaruti.in' className='mb-2 mr-1 hover:text-red-500'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 512 512'
                height='24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
              </svg>
            </a>
            <Link to='/offers' className='-ml-1 lg:m-0 hover:text-yellow-400 '>
              <svg
                fill='currentColor'
                height='28'
                viewBox='0 0 24 24'
                width='28'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-13h-6V4h6v3zm0 1h-6v6h6V8zm-3 9c-2.19 0-4-1.79-4-4s1.81-4 4-4 4 1.79 4 4-1.81 4-4 4zm0-7c-1.18 0-2.13.95-2.13 2.13S13.82 14 15 14s2.13-.95 2.13-2.13S16.18 10 15 10zm0 3c-.59 0-1.07-.48-1.07-1.07S14.41 10.86 15 10.86s1.07.48 1.07 1.07S15.59 13 15 13z' />
              </svg>
            </Link>
          </div>
          {/* <div className=''>
            <div className=' uppercase underline underline-offset-2'>
              Others websites
            </div>
             <div className='pt-1 '>
              <a
                href='https://saboomaruti.in/'
                target='_blank'
                rel='noreferrer'
              >
                SABOO ARENA
              </a>
            </div>
             <div className='pt-1 '>
              <a
                href='https://www.saboonexa.in/'
                target='_blank'
                rel='noreferrer'
              >
                SABOO NEXA
              </a>
            </div>
             <div className='pt-1 '>
              <a
                href='https://www.sabootruevalue.in/'
                target='_blank'
                rel='noreferrer'
              >
                SABOO TRUE VALUE
              </a>
            </div>
            <div className='pt-1 uppercase hover:text-red-600'>
              <Link to='login'>Dashboard</Link>
            </div>
          </div> */}
          {/* <div className=''>
            <div>
              <span className=' uppercase underline underline-offset-2'>
                Address
              </span>
              <br />
              RKS Motor - Saboo Towers, <br />
              6-3-905, Raj Bhavan Rd, Somajiguda,
              <br />
              Hyderabad, Telangana 500082
            </div>

            <div>
              <a
                href='mailto:info@saboomaruti.in'
                className='hover:text-red-600'
              >
                info@saboomaruti.in
              </a>
              <br />
              Tel:{' '}
              <a href='tel:+91 98488 98488' className='hover:text-red-600'>
                +91 98488 98488
              </a>
              <br />
            </div>
          </div> */}
        </div>
        <div className='flex md:flex-row flex-col justify-between text-xs'>
          <div className='flex gap-4 justify-center lg:justify-start pl-2'>
            <a
              className='mb-2 mr-2 hover:text-blue-300'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'></path>
              </svg>
            </a>
            <a
              className='mb-2 mr-2 hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'></path>
              </svg>
            </a>
            <a
              className='mb-2 mr-1 hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.3,12.9c-0.9,0-1.7,0-2.5,0c0-2.8,0-5.6,0-8.4c0.8,0,1.7,0,2.5,0c0,0.3,0,0.7,0,0.9C7.5,5.2,7.7,5,7.9,4.9&#10;    c1.3-1.1,3.5-0.9,4.5,0.5c0.4,0.6,0.6,1.3,0.6,2c0,1.8,0,3.6,0,5.5c0,0,0,0,0,0.1c-0.9,0-1.7,0-2.6,0c0-0.1,0-0.2,0-0.3&#10;    c0-1.4,0-2.7,0-4.1c0-0.3,0-0.6-0.1-0.9c-0.2-0.7-0.6-1-1.2-1C8.3,6.5,7.7,6.8,7.5,7.4c-0.1,0.3-0.2,0.7-0.2,1c0,1.4,0,2.8,0,4.2&#10;    C7.3,12.7,7.3,12.8,7.3,12.9z'
                ></path>
                <path d='M0.5,4.4c0.9,0,1.7,0,2.6,0c0,2.8,0,5.6,0,8.4c-0.9,0-1.7,0-2.6,0C0.5,10.1,0.5,7.3,0.5,4.4z'></path>
                <path d='M1.7,3.3c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C3.3,2.6,2.6,3.3,1.7,3.3z'></path>
              </svg>
            </a>
            <a
              className='mb-2  hover:text-blue-800'
              href='/'
              rel='noopener'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.9,16.1c0-2.5,0-4.9,0-7.4c-0.5,0-1.1,0-1.6,0c0-0.8,0-1.6,0-2.5c0.3,0,0.7,0,1,0c0.6,0,0.6,0,0.6-0.5c0-0.6,0-1.1,0-1.7&#10;      c0-1.3,0.9-2.4,2.2-2.6c0.6-0.1,1.2-0.1,1.8-0.1c0.6,0,1.1,0,1.7,0c0.1,0,0.2,0,0.2,0.1c0,0.8,0,1.6,0,2.5C8.7,4,8.6,4,8.5,4&#10;      C8,4,7.5,4,7.1,4C6.5,4,6.2,4.2,6.2,4.8c0,0.4,0,0.9,0,1.3c0,0.2,0.1,0.2,0.2,0.2c0.7,0,1.4,0,2.1,0c0.1,0,0.2,0,0.3,0&#10;      C8.7,7.1,8.6,7.9,8.5,8.8c-0.8,0-1.5,0-2.3,0c0,2.5,0,4.9,0,7.4C5.1,16.1,4,16.1,2.9,16.1z'
                ></path>
              </svg>
            </a>
            <a
              className='mb-2 hover:text-red-800 '
              href='https://www.pinterest.com/'
              rel='noreferrer'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 16 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z'></path>
              </svg>
            </a>
            <a
              className='mb-2 hover:text-red-800'
              href='https://www.youtube.com/channel/UCNYKL1eNu04KF-kMU423AuQ'
              rel='noreferrer'
              target='_blank'
            >
              <svg
                fill='currentColor'
                height='18'
                viewBox='0 0 18 16'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.2,12.9c-2-0.1-4.1-0.2-6.1-0.3c-0.6,0-1.1-0.1-1.6-0.5c-0.5-0.3-0.8-0.8-0.9-1.3C0.3,9.5,0.3,8.3,0.3,7&#10;         c0-1.4,0-2.7,0.2-4.1c0.1-0.6,0.2-1.1,0.6-1.6C1.5,1,1.9,0.8,2.4,0.7C3.6,0.5,4.8,0.4,6,0.4c2.8-0.1,5.6-0.1,8.4,0.1&#10;         c0.6,0,1.1,0.1,1.7,0.2c0.9,0.2,1.6,0.8,1.8,1.7C17.9,3.2,18,4,18.1,4.8c0.1,1.8,0.1,3.6-0.2,5.3c-0.1,0.5-0.2,1-0.5,1.4&#10;         c-0.4,0.5-0.8,0.8-1.4,0.9c-1.2,0.2-2.4,0.2-3.6,0.3C11.4,12.8,10.3,12.8,9.2,12.9C9.2,12.8,9.2,12.8,9.2,12.9z M7.4,9.2&#10;         c1.6-0.9,3.1-1.8,4.6-2.7C10.5,5.7,9,4.8,7.4,3.9C7.4,5.7,7.4,7.4,7.4,9.2z'
                ></path>
              </svg>
            </a>
          </div>
          <span className='pt-1 text-center lg:text-right'>© 2023 All Rights Reserved by RKS Motor Pvt Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
