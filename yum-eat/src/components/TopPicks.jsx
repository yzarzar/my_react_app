import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topPicks } from "../data/data";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

export default function TopPicks() {
  return (
    <>
      <h1
        className="py-2 text-2xl font-bold text-center text-orange-500"
      >
        Top Picks
      </h1>
      <div
        className="hidden lg:flex max-w[1520px] m-auto
        py-2 px-2"
      >
       <Splide options={{perPage:4,gap:'0.5rem',grag:'free', arrows:false}}>
            {
                topPicks.map((item)=>{
                    return (
                        
                        <SplideSlide key={item.id}>
                        <div className='relative rounded-3xl'>
                            <div className='absolute w-full h-full text-white rounded-3xl'>
                                <p className='px-2' >{item.title}</p>
                                <p className='px-2'>{item.price}</p>
                                <button className='absolute mx-2 text-white border-white border-dotted bottom-4'>Add To Cart</button>
                            </div>
                            <img 
                            className='h-[200px] w-full object-cover rounded-3xl cursor-pointer ease-out duratiion-300 hover:scale-105'
                            src={item.img}
                            alt={item.title}/>
                        </div>
                        </SplideSlide>
                    );
                })
            }
            </Splide>
      </div>
    </>
  );
}