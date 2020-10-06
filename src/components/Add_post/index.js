import React from 'react'
import AddPostForm from './Add_Post_Form'
import TypedSection from './TypedSection'
import { Navigation } from '../Partials';
import './addpost.scss';

export default function index() {
    return (
        <div>
            <Navigation />
            <TypedSection/>
            <AddPostForm/>
        </div>
    )
}
