import React from 'react'
import Header from './components/header';
import Content from './components/content';
import Footer, { WrappedFooter } from './components/footer';
 
const obj = {
    pos: {},
    person: {
        name: "",
        age: 34,
        education: {}
    }
}

const deepClone = (obj) => {
return // clone obj
}

const copyObj = deepClone(obj);

export default function Main() {
    return (
        <div>
            <Header/>
            <Content/>
            <WrappedFooter list={[]} />
            <Footer />
        </div>
    )
}
