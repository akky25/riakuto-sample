import { FC } from 'react';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router';
import { Divider } from 'semantic-ui-react';

import HomeButton from 'containers/molecules/HomeButton';
import AllCharacters from 'containers/templates/AllCharacters';
import SchoolCharacters from 'containers/templates/SchoolCharacters';

const Characters: FC<RouteComponentProps> = ({ match }) => (
  <>
    <header>
      <h1>『SLAM DUNK』登場人物</h1>
    </header>
    <Switch>
      <Route exact path={`${match.path}`}>
        <AllCharacters />
      </Route>
      <Route path={`${match.path}/:schoolCode`}>
        <SchoolCharacters />
      </Route>
      <Redirect to="/" />
    </Switch>
    <Divider hidden />
    <HomeButton />
  </>
);

export default Characters;
