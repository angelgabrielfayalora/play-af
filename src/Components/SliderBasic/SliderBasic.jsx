import React from 'react'
import Slider from 'react-slick'
import './SliderBasic.scss'

export default function SliderBasic() {


    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    }


    return (

        

        <div className="basic-slider-item" >
            <h2>title</h2>
            <Slider {...setting} >
                
                    <div className="basic-slider-item__list" >
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjE15I9rC3PFLoAAOYrz7iX5EJRzXJzG4POw&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjayeAxV6ctqRYJU4bpmMiPr55SaSXlO_og&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFaKwuuJUYr_6hbtYZaYlAj8u-0jT3744Ig&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEiGkszMcyFcwHJiPFao3qMlP0gFqgy-u8Q&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://p4.wallpaperbetter.com/wallpaper/921/691/828/ice-age-movies-hd-4k-wallpaper-preview.jpg')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgxYk6UJfZW7Onc6CrL6mWUgwVISivxqP6A&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOzwi4CHVXQRIRcOkT1SA8vkzMJSJE0Rmig&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15lSpP1fy8TxIvDOqAr1wSKjrUPIb9MKCDQ&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                    <div>
                        <div 
                            className="avatar"
                            style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjE15I9rC3PFLoAAOYrz7iX5EJRzXJzG4POw&usqp=CAU')`}}
                        />
                        <h2>title 1</h2>
                    </div>
                

            </Slider>
            
        </div>
        
    )
}
