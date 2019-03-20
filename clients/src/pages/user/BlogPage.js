import React, { Component } from 'react'
import BlogBanner from "../../components/BlogBanner";
import BlogCategory from "../../components/BlogCategory";
import BlogList from "../../components/BlogList";
export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <BlogBanner/>
        <BlogCategory/>
        <BlogList/>
      </div>
    )
  }
}
