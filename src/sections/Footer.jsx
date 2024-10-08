import { Link } from 'react-scroll'
import { socials, footer } from '../constants'

const Footer = () => {
  return (
    <>
    <div className='container flex max-lg:flex-col lg:flex-row sm:justify-between justify-between items-center m-22'>
<div className='flex items-center justify-between'>
<a className="flex-1 cursor-pointer z-2 " href='/'>
     <img src="/images/lecRo.svg" width={200} height={55} alt="logo" />
     <h1 className="mb-6 text-p4 h6 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-lg max-md:leading-12">
              Step into the Future.
            </h1>
</a>
</div>

<div className='flex items-center  justify-between max-lg:justify-center '>
    <ul className='flex flex-row gap-22  m-10'>
        {socials.map((item)=>(
            <li key={item.id} >
                <a href={item.url} target="_blank" className='flex flex-row gap-3 '>
                <img src={item.icon} alt={item.title} />
                <h5 className='text-gray font-semibold'>{item.title}</h5>
                </a>
            </li>
        ))}
    </ul>
</div>

<div className="flex flex-col items-center justify-between gap-3 cursor-pointer">
  {footer.map((item) => (
    <Link key={item.id} to={item.url} offset={-100} spy smooth>
      <h5 className="font-medium">{item.title}</h5>
    </Link>
  ))}
</div>
    </div>
  <div>
    <h4>2024. Lec-Ro. All Rights Reserved.</h4>
  </div>
    </>
  )
}

export default Footer