import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTU0NGZhYWQt/MTU0NGZhYWQt-MDZhZmJlMDMt-w3000._CB405104200_.jpg"
                alt="Amazon Home Page Banner"
            />

            {/* Product, id, title, price, rating, image */}
            {/* Product */}
            <div className="home_row">
                <Product
                    id={123455}
                    title="React js: Unmatched power for building fast and secure apps"
                    price={16.99}
                    image="https://m.media-amazon.com/images/I/61y3BEpqP0L._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />

                <Product
                    id={123455}
                    title="The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer"
                    price={24.49}
                    image="https://images-na.ssl-images-amazon.com/images/I/41sgpXr+sTL._SX348_BO1,204,203,200_.jpg"
                    rating={5}
                />
            </div>

            <div className="home_row">
                <Product
                    id={123455}
                    title="Yamaha HS5 Powered Studio Monitor"
                    price={199.99}
                    image="https://m.media-amazon.com/images/I/91OQWCG2g5L._AC_UY654_FMwebp_QL65_.jpg"
                    rating={5}
                />

                <Product
                    id={123455}
                    title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
                    price={329.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
                    rating={5}
                />

                <Product
                    id={123455}
                    title="Official Logo ReactJS React.js JavaScript Framework T-Shirt"
                    price={22.99}
                    image="https://m.media-amazon.com/images/I/718rODz+mFL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={5}
                />
            </div>

            <div className="home_row">
                <Product
                    id={123455}
                    title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
                    price={1799.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>


        </div>
    )
}

export default Home
