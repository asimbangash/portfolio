import React from 'react';
import './portfolio.css';
import img from '../../assets/portfolio7.png';
import img1 from '../../assets/portfolio9.png';
import img2 from '../../assets/portfolio8.png';
const portfolioProj = [
  {
    id:1,
    Image:img,
    title:"Task Manager",
    github:'https://github.com/asimbangash/Task-Manager',
    livedemo:'#'
  },
  {
    id:2,
    Image:img1,
    title:"Store API",
    github:'https://github.com/asimbangash/Store-API',
    livedemo:'#'
  },
  {
    id:3,
    Image:img2,
    title:"JWTBasic",
    github:'https://github.com/asimbangash/JWTBasic',
    livedemo:'#'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
             {
              portfolioProj.map(port => {
                  const {id , Image ,title,github,livedemo} = port;
                  
                  return(
                    <article className='portfolio_item' key={id}>
                    <div className='portfolio_item-img'>
                        <img src={Image} alt=""/>
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_btn'>
                        <a href={github} className='btn'>Github</a>
                        <a href={livedemo} className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                  )
              })
             }
            
        </div>
    </section>
  )
}

export default Portfolio