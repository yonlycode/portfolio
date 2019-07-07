import React, { Component } from 'react'
import BlogCategory from "../../Components/BlogCategory";
import BlogList from "../../Components/BlogList";
export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <BlogCategory/>
        <BlogList/>
      </div>
    )
  }
}
