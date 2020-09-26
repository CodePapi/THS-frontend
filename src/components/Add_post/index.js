import React from 'react'
import AddPostForm from './Add_Post_Form'
import CloseHeader from './close_header'
import TypedSection from './TypedSection'

export default function index() {
    return (
        <div >
            <CloseHeader/>
            <TypedSection/>
            <AddPostForm/>
        </div>
    )
}
