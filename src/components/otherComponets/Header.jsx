// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Header = () => {
  // const [open, setOpen] = useState(false);
  // const [heading, setHeading] = useState('');
  // const [subHeading, setSubHeading] = useState('');

  const carLinks = [
    { name: 'Fronx', link: 'maruti-fronx-price-in-hyderabad' },
    { name: 'Jimny', link: 'maruti-jimny-price-in-hyderabad' },
    { name: 'Grand Vitara', link: 'grand-vitara-on-road-price-in-hyderabad' },
    { name: 'XL6', link: 'nexa-xl6-on-road-price-in-hyderabad' },
    { name: 'Ciaz', link: 'nexa-ciaz-on-road-price-in-hyderabad' },
    { name: 'Baleno', link: 'new-maruti-baleno-price-in-hyderabad' },
    { name: 'Ignis', link: 'nexa-ignis-on-road-price-in-hyderabad' },
  ];
  return (
    <>
      <div className='h-20 flex justify-between px-2 items-center bg-black text-white'>
        <div>
          <img
            src='https://saboonexa.in/static/media/logo.0772b8f037b1936a399e.webp'
            alt='Nexa Logo'
            srcSet=''
            className='h-12'
          />
        </div>
        <div className='transition-all duration-100'>
          {carLinks.map((car, index) => (
            <Link className='p-4 hover:bg-gray-500  rounded-md  ' to={car.link}>
              {car.name}
            </Link>
          ))}
        </div>
        <div className='p-2 '>
          <ul className='flex  duration-500'>
            <li className='p-2 hover:bg-gray-500 rounded-md'>Services</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>More</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>
              {/* <AiOutlineMenu className='text-3xl py-auto ' /> */}
              Menu
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  // return (
  //   <div className='fixed isolate  z-10 w-full bg-black text-white  '>
  //     <nav className=' h-20  w-full '>
  //       <div className='flex justify-between items-center h-full font-medium'>
  //         <div className='z-50  flex w-full items-center justify-between md:w-auto   '>
  //           <Link to='/'>
  //             <img
  //               src="https://saboonexa.in/static/media/logo.0772b8f037b1936a399e.webp"
  //               alt='logo'
  //               className='h-12 px-2   md:cursor-pointer brightness-200 contrast-200'
  //             />
  //           </Link>
  //           {/* <div className='hidden md:block'>
  //             {links.map((link) => (
  //               <div>
  //                 <div className='group px-3 text-left md:cursor-pointer '>
  //                   <h1
  //                     className=' group flex items-center justify-between pr-2 md:pr-0'
  //                     onClick={() => {
  //                       heading !== link.name
  //                         ? setHeading(link.name)
  //                         : setHeading('');
  //                       setSubHeading('');
  //                     }}
  //                   >
  //                     {link.name}
  //                   </h1>
  //                   {link.submenu && (
  //                     <div>
  //                       <div className='absolute top-12 hidden  hover:md:block group-hover:md:block'>
  //                         <div className='py-3'>
  //                           <div className='absolute mx-6 mt-1 h-4 w-4 rotate-45 bg-[#02c6b7]'></div>
  //                         </div>
  //                         <div className='-ml-8 bg-[#02c6b7] px-4 py-3 '>
  //                           {link.sublinks.map((mysublinks) => (
  //                             <div>

  //                               {mysublinks.sublink.map((slink) => (
  //                                 <li className='my-2.5 text-sm  text-black'>
  //                                   <Link
  //                                     to={slink.link}
  //                                     className='hover:text-white'
  //                                   >
  //                                     {slink.name}
  //                                   </Link>
  //                                 </li>
  //                               ))}
  //                             </div>
  //                           ))}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>

  //                 <div
  //                   className={`${
  //                     heading === link.name ? 'md:hidden' : 'hidden'
  //                   }`}
  //                 >

  //                   {link.sublinks.map((slinks) => (
  //                     <div>
  //                       <div>
  //                         <h1
  //                           onClick={() =>
  //                             subHeading !== slinks.Head
  //                               ? setSubHeading(slinks.Head)
  //                               : setSubHeading('')
  //                           }
  //                           className='flex items-center justify-between  py-4 pl-7 pr-5 font-semibold md:pr-0'
  //                         >
  //                           {slinks.Head}

  //                           <span className='inline text-xl md:ml-2 md:mt-1'>
  //                             {subHeading === slinks.Head && <BiChevronDown />}
  //                           </span>
  //                         </h1>
  //                         <div
  //                           className={`${
  //                             subHeading === slinks.Head
  //                               ? 'md:hidden'
  //                               : 'hidden'
  //                           }`}
  //                         >
  //                           {slinks.sublink.map((slink) => (
  //                             <li className='py-3 pl-14'>
  //                               <Link to={slink.link}>{slink.name}</Link>
  //                             </li>
  //                           ))}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}
  //           <div>

  //           </div>
  //           <div
  //             className='p-3 text-3xl md:hidden md:p-5'
  //             onClick={() => setOpen(!open)}
  //           >
  //             {open ? <AiOutlineClose /> : <AiOutlineMenu />}
  //           </div>
  //         </div>
  //         <ul className='hidden items-center gap-2 uppercase md:flex '>
  //           <li>
  //             <Link to='/' className=' inline-block px-3 hover:text-indigo-500'>
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to='/about'
  //               className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
  //             >
  //               About Us
  //             </Link>
  //           </li>

  //           <li>
  //             <Link
  //               to='/tech'
  //               className=' inline-block px-3 hover:text-indigo-500'
  //             >
  //               Tech
  //             </Link>
  //           </li>
  //           {/* <li>
  //             <Link
  //               to='/news'
  //               className='py-4 px-3 inline-block hover:text-indigo-500'
  //             >
  //               News
  //             </Link>
  //           </li> */}
  //           <li>
  //             <Link
  //               to='/contact'
  //               className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
  //             >
  //               Contact Us
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to='/careers'
  //               className=' inline-block whitespace-nowrap px-3 hover:text-indigo-500'
  //             >
  //               Careers
  //             </Link>
  //           </li>
  //         </ul>

  //         {/* Mobile nav */}
  //         <ul
  //           className={`
  //       fixed bottom-0 top-0 w-full overflow-y-auto bg-indigo-100  py-24 pl-4 text-lg text-indigo-600 duration-500
  //       md:hidden ${open ? 'left-0' : 'left-[-100%]'}
  //       `}
  //         >
  //           <li>
  //             <Link
  //               to='/'
  //               className='inline-block px-3 py-5 hover:text-indigo-500'
  //               onClick={() => setOpen(!open)}
  //             >
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to='/about'
  //               className='inline-block whitespace-nowrap px-3 py-5 hover:text-indigo-500'
  //               onClick={() => setOpen(!open)}
  //             >
  //               About Us
  //             </Link>
  //           </li>
  //           {/* <NavLinks  /> */}
  //           {/* <div>
  //             {links.map((link) => (
  //               <div>
  //                 <div className='group px-3 text-left md:cursor-pointer '>
  //                   <h1
  //                     className='group flex items-center justify-between py-4 pr-2 md:pr-0'
  //                     onClick={() => {
  //                       heading !== link.name
  //                         ? setHeading(link.name)
  //                         : setHeading('');
  //                       setSubHeading('');
  //                     }}
  //                   >
  //                     {link.name}
  //                     <span className='inline text-xl md:hidden'>
  //                       {heading === link.name ? (
  //                         <BiChevronUp />
  //                       ) : (
  //                         <BiChevronDown />
  //                       )}
  //                     </span>
  //                     <span className='hidden text-xl group-hover:-mt-2  group-hover:rotate-180 md:ml-2 md:mt-1 md:block'>
  //                       <BiChevronDown />
  //                     </span>
  //                   </h1>
  //                   {link.submenu && (
  //                     <div>
  //                       <div className='absolute top-12 hidden hover:md:block group-hover:md:block'>
  //                         <div className='py-3'>
  //                           <div className='absolute left-3 mt-1 h-4   w-4 rotate-45 bg-indigo-800'></div>
  //                         </div>
  //                         <div
  //                           className='bg-indigo-800 p-5  '
  //                           onClick={() => setOpen(!open)}
  //                         >
  //                           {link.sublinks.map((mysublinks) => (
  //                             <div>
  //                               <h1 className='text-lg font-semibold text-green-300'>
  //                                 {mysublinks.Head}
  //                               </h1>
  //                               {mysublinks.sublink.map((slink) => (
  //                                 <li className='my-2.5 text-sm text-white'>
  //                                   <Link
  //                                     to={slink.link}
  //                                     className='hover:text-primary'
  //                                   >
  //                                     {slink.name}
  //                                   </Link>
  //                                 </li>
  //                               ))}
  //                             </div>
  //                           ))}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   )}
  //                 </div>

  //                 <div
  //                   className={`
  //           ${heading === link.name ? 'md:hidden' : 'hidden'}
  //         `}
  //                 >

  //                   {link.sublinks.map((slinks) => (
  //                       <div>
  //                         <div>
  //                         <div>
  //                           {slinks.sublink.map((slink) => (
  //                             <li className='py-3 pl-14'>
  //                               <Link
  //                                 className='flex'
  //                                 to={slink.link}
  //                                 onClick={() => setOpen(!open)}
  //                               >
  //                                 <div className='my-auto mr-2 h-2 w-2 rotate-45 bg-green-400'></div>
  //                                 <div>{slink.name}</div>{' '}
  //                               </Link>
  //                             </li>
  //                           ))}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </div>
  //               </div>
  //             ))}
  //           </div> */}

  //           <li>
  //             <Link
  //               to='/tech'
  //               className='inline-block px-3 py-5 hover:text-indigo-500'
  //               onClick={() => setOpen(!open)}
  //             >
  //               Tech
  //             </Link>
  //           </li>
  //           {/* <li>
  //             <Link
  //               to='/news'
  //               className='py-5 px-3 inline-block hover:text-indigo-500'
  //               onClick={() => setOpen(!open)}
  //             >
  //               News
  //             </Link>
  //           </li> */}
  //           <li>
  //             <Link
  //               to='/contact'
  //               className='inline-block px-3 py-5 hover:text-indigo-500'
  //               onClick={() => setOpen(!open)}
  //             >
  //               Contact Us
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to='/careers'
  //               className='inline-block whitespace-nowrap px-3 py-4 hover:text-indigo-500'
  //             >
  //               Careers
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default Header;
