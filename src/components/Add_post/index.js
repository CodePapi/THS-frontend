import React from 'react'
import Add_Post_Form from './Add_Post_Form'
import Close_header from './close_header'
import TypedSection from './TypedSection'

export default function index() {
    return (
        <div style={{background:"#C72481"}}>
            <Close_header/>
            <TypedSection/>
            <Add_Post_Form/>
        </div>
    )
}
