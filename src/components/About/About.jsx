import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function About() {
  return (
    <div className="about-page bg-gray-50 dark:bg-gray-900 min-h-screen p-6">

    {/* Hero Section */}
    <section className="hero bg-indigo-600 text-white text-center py-16 rounded-lg shadow-lg">
    <Link to="/" className="">
            <img src={logo} alt="logo" width={400} className="dark:invert mx-auto" />
          </Link>
      <h1 className="text-4xl font-semibold mb-4">About Us</h1>
      <p className="text-lg max-w-4xl mx-auto">
        We are a team of passionate professionals dedicated to providing the best solutions for your needs. Learn more about our story, mission, and values.
      </p>
    </section>
  
    {/* Mission Statement Section */}
    <section className="mission mt-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
        Our mission is to innovate, solve complex problems, and deliver impactful solutions that improve the lives of individuals and businesses. We strive for excellence in every project we undertake.
      </p>
    </section>
  
    {/* Team Section */}
    <section className="team mt-16">
      <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">Meet Our Team</h2>
      <div className="flex items-center justify-center gap-8">
        <div className="team-member text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Yogesh Baghel</h3>
          <p className="text-gray-600 dark:text-gray-400">Designer and Developer</p>
        </div>
        {/* <div className="team-member text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Jane Smith</h3>
          <p className="text-gray-600 dark:text-gray-400">Lead Developer</p>
        </div>
        <div className="team-member text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Alice Johnson</h3>
          <p className="text-gray-600 dark:text-gray-400">Marketing Director</p>
        </div> */}
      </div>
    </section>
  
    {/* Values Section */}
    <section className="values mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="value-item text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Innovation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We continuously strive to innovate and provide cutting-edge solutions to our clients.
          </p>
        </div>
        <div className="value-item text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Integrity</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We believe in being honest, transparent, and ethical in every interaction.
          </p>
        </div>
        <div className="value-item text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Collaboration</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We work together as a team and with our clients to achieve common goals.
          </p>
        </div>
      </div>
    </section>
  
    {/* Contact Section */}
    <section className="contact mt-16 bg-indigo-600 text-white py-12 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Get In Touch</h2>
      <p className="text-lg text-center max-w-2xl mx-auto mb-8">
        Have any questions? We'd love to hear from you! Reach out to us and we'll get back to you as soon as possible.
      </p>
      <div className="text-center">
        <a
          href="mailto:contact@ayquery.com"
          className="inline-block bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
        >
          Email Us
        </a>
      </div>
    </section>
  
  </div>
  
  )
}

export default About