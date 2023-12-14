import React from 'react'
import { Container,Row,Col,Button } from 'reactstrap'
import TicketTable from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/DummyData.json'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'

const Dashboard = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col>
        <PageBreadcrumb page = "Dashboard" />
        </Col>
      </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button color="secondary" style={{'font-size':'2rem','padding':'10px 30px'}} >Add New Ticket</Button>
            </Col>
       </Row>
       <Row>
            <Col className='text-center mt-5 mb-2'>
              <div>Total Tickets    :50</div>
              <div>Pending Tickets  :5</div>

            </Col>
       </Row>
        <Row>
            <Col className='mt-2'>
              <div>Recently Added Tickets</div>
              <hr/>
            </Col>
       </Row>
       <Row>
            <Col className='recent-tickets'>
              <div><TicketTable tickets= {tickets}/></div>
              <hr/>
            </Col>
       </Row>
    </Container>



    </div>
  )
}

export default Dashboard