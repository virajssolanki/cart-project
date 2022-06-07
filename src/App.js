import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Prodect from './components/Prodect';

function App() {
    const prodectList = []
    const [prodect, setProdect] = useState(prodectList)

    useEffect(() => {
        const timer = setTimeout(() => {
            setProdect([
                {
                    title: "Headphone",
                    image: "./images/2.jpeg",
                },
                {
                    title: "Camera",
                    image: "./images/1.jpeg",
                },
                {
                    title: "Watch",
                    image: "./images/3.jpeg",
                },
            ])
            console.log("hello")
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-red-100">
            <Header />
            <div className='container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 py-14'>
                {
                    prodect.map((x, id) => {
                        return (
                            <Prodect key={id} title={x.title} image={x.image} />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default App;
