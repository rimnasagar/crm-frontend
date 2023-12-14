import React from 'react'
import { Breadcrumb,BreadcrumbItem } from 'reactstrap'

const PageBreadcrumb = ({page}) => {
  return (
    <>
  
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">
        Home
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
     {page}
    </BreadcrumbItem>
  </Breadcrumb>
 
  
</>
  )
}

export default PageBreadcrumb