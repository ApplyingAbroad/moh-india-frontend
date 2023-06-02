import Gallery from '@/components/Gallery'
import React from 'react'
import MasterLayout from './_layout'

const GalleryPage = () => {
  return (
    <>
      <MasterLayout title='Gallery'>
        <Gallery />
      </MasterLayout>
    </>
  )
}

export default GalleryPage
