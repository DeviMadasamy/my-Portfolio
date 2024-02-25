import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>OORKALADEVI</span>
            </div>
            <div className="des">
                {/* 30 */}
                 fellow web wanderers! I'm DIVI, your resident frontend sorcerer, waving my coding wand to conjure up delightful digital experiences. With a cup of coffee in one hand and a keyboard in the other, I'm here to sprinkle some laughter and magic into the world of web development!
            </div>
            
            <a href="/OORKALADEVI.M(Resume).pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/picture.jpeg" alt="" />
                <div className="info">
                    <div>Frontend Developer</div>
                    <div>Chennai</div>
                    <div>02/02</div>
                    <div>Female</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home