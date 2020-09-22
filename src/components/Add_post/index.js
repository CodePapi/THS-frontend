import React from 'react'
import AddPostForm from './Add_Post_Form'
import CloseHeader from './close_header'
import TypedSection from './TypedSection'

export default function index() {
    return (
        <div style={{background:"#C72481"}}>
            <CloseHeader/>
            <TypedSection/>
            <AddPostForm/>
        </div>
    )
}
