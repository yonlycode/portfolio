import React, { Component } from 'react'
import BlogCategory from "../../components/BlogCategory";
import BlogList from "../../components/BlogList";
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
