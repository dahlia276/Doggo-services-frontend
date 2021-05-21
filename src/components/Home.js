import React from "react"

function Home () {
    return (
        <div>
        <div className="div1">
        <img className="img" src="/images/karsten-winegeart-tIWBJN8t7zE-unsplash.jpg"/>
            <h1 className="line1">No more kennels!</h1>
            <h1 className="line2">Get the best care for your</h1>
            <h1 className="line3">furry best friend!</h1>
            </div>
            <h3 className="title-center">How it works</h3>
            <div>
            <div className="circleBase circle1"></div>
                <p className="one">1</p>
                <p className="w1">Search</p>
                <hr className="hr-1"/>
            <div className="circleBase circle2"></div>
                <p className="two">2</p>
                <p className="w2">Connect</p>
                <hr className="hr-2"/>
                <div className="circleBase circle3"></div>
                <p className="three">3</p>
                <p className="w3">Relax</p>
            </div>
            <h3 className="title2">No worries!</h3>
            <div>
                <img className="img1" src="/images/brad-starkey-gTfWBUSEmPg-unsplash.jpg" />
                <p className="s1">Find sitters who will treat your dog like family</p>
                <img className="img2" src="/images/dane-deaner-n8JbWAB9Ypw-unsplash.jpg" />
                <p className="s2">Get to know your sitter</p>
                <img className="img3" src="/images/hanson-lu-J5feaur-y6I-unsplash.jpg" />
                <p className="s3">Get updates throughout the duration of the service</p>
            </div>
        </div>
    )
}

export default Home