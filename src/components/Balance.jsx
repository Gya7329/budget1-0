import React from "react";
import { Grid, Segment, Statistic } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function Balance({title, value, color, size='tiny'}) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
              <DisplayBalance title='income' value='2500' color='green'/>
            <Statistic>
              <Statistic.Label size ={size}style={{ textAlign: "left" }}>
                {title}
              </Statistic.Label>
              <Statistic.Value>{value}</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
          <DisplayBalance title='expense' value='2322' color='red'/>
            <Statistic>
              <Statistic.Label style={{ textAlign: "left" }}>
                {title}
              </Statistic.Label>
              <Statistic.Value>{value}</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Balance;
