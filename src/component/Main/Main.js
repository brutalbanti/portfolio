import React, { useRef } from "react"
import SectionAbout from "./Section/SectionAbout"
import SectionHead from "./Section/SectionHead"
import SectionWorks from "./Section/SectionWorks"

const Main = (props) => {
    return (
        <main className="page">
            <SectionHead scrollToAbout={props.scrollToAbout}/>
            <SectionAbout scrollToSection={props.scrollToSection} scrollToAbout={props.scrollToAbout}/>
            <SectionWorks scrollToWorks={props.scrollToWorks}/>
        </main>
    )
}

export default Main