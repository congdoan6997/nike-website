import { useState } from 'react'

import { arrowRight } from '../assets/icons'

import { statistics } from '../constants'
import { shoes } from '../constants'
import { Button } from '../components'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(shoes[0].bigShoe)
  return (
    <section
      id="home"
      className="w-full  p-2
    flex xl:flex-row flex-col 
    justify-center max-container min-h-screen"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <span className="pr-10 xl:bg-white relative xl:whitespace-nowrap z-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray
        text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
          repudiandae quo culpa tempore cum, corporis sequi labore?
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div
          className="flex justify-start items-start 
        flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative xl:w-2/5 flex-1
      flex justify-center items-center xl:min-h-screen max-xl:py-40 
      bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />

        <div className="flex sm:gap-4 gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe.bigShoe}
                changeBigShoeImage={(img) => setBigShoeImage(img)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
