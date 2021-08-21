
import './App.css';
import {Container, Statistic,Header, Segment, Grid, Icon,Form, Button} from 'semantic-ui-react'

function App() {
  return (
 <Container style={{height:'80vh'}}>
   <Header as='h1'>
Budget
   </Header>
   <Statistic size='small'>
<Statistic.Label>Your Balance : </Statistic.Label>

<Statistic.Value>23,000</Statistic.Value>
   </Statistic>
   <Segment textAlign='center'>

     <Grid columns={2} divided>
<Grid.Row>
  <Grid.Column>
    <Statistic size='tiny' color='green'>
    <Statistic.Label style={{textAlign:'left'}}>INCOMING:</Statistic.Label>
    <Statistic.Value>10,333</Statistic.Value>
    </Statistic>
    </Grid.Column>
  <Grid.Column>
    <Statistic size='tiny' color='red'>
    <Statistic.Label  style={{textAlign:'left'}} >EXPENSES:</Statistic.Label>
    <Statistic.Value>12,233</Statistic.Value>
    </Statistic>
    </Grid.Column>

</Grid.Row>

     </Grid>

   </Segment>
<Header as='h3'>History</Header>
<Segment color='red'>
<Grid columns={3} textAlign='right'>
<Grid.Row>
  <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
  <Grid.Column width={3} textAlign='right'>$10</Grid.Column>
  <Grid.Column width={3}><Icon name='edit' bordered/>
  <Icon name='trash' bordered/>
    
    
</Grid.Column>
</Grid.Row>


</Grid>

</Segment>
<Segment color='green'>
<Grid columns={3} textAlign='right'>
<Grid.Row>
  <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
  <Grid.Column width={3} textAlign='right'>$10</Grid.Column>
  <Grid.Column width={3}><Icon name='edit' bordered/>
  <Icon name='trash' bordered/>
    
    
</Grid.Column>
</Grid.Row>


</Grid>

</Segment>
{/* <Segment color='blue'>
<Grid columns={3} textAlign='right'>
<Grid.Row>
  <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
  <Grid.Column width={3} textAlign='right'>$10</Grid.Column>
  <Grid.Column width={3}><Icon name='edit' bordered/>
  <Icon name='trash' bordered color='red'/>
    
    
</Grid.Column>
</Grid.Row>


</Grid>

</Segment> */}

<Header as ='h3'>Add new transaction</Header>
<Form unstackable>
  <Form.Group>

    <Form.Input icon='tags' width={12} label='Decription' placeholder='New things'></Form.Input>
 <Form.Input width={4} label='Value' placeholder='100.00' icon='rupees' iconPosition='left'></Form.Input>
 
 
  </Form.Group>
<Button.Group style={{marginTop:'20px'}}>
<Button primary>Cancel  </Button>
  <Button.Or/>
  <Button primary>Ok  </Button>
</Button.Group>

</Form>



 </Container>
  )}

export default App;
