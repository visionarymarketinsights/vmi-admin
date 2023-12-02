import React, { Component } from 'react'
import Search from '../components/Search'
import Testimonial from '../components/Testimonial'
import Clients from '../components/Clients'
import AboutHome from '../components/AboutHome'
import LatestReports from '../components/LatestReports'
import Insights from '../components/Insights'
import LatestPressRelease from '../components/LatestPressRelease'
import Services from '../components/Services'
import SEO from '../components/SEO'

export default function Home() {
  return (

    <section className="relative" >
      <SEO title={'Congruence Market Insights'} description={'Congruence Market Insights report gives an appropriate market research study of major industries like automotive, aerospace and defence, equipment and machinery, information and communications technology, semiconductors and more industry.'} keywords={'Market Research Reports, Industry Reports, Congruence Market Insights, Strategy and Stats, Business Consulting, Market Research Firm'} name='Congruence Market Research' type='article' />
      <Search />
      <Insights />
      <LatestReports />
      < LatestPressRelease />
      <Services />
      <Testimonial />
      <AboutHome />
      <Clients />
    </section >
  )
}
