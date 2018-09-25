import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";

export class ComponentPreviewer extends React.PureComponent<{
  components?: { [k: string]: React.ComponentClass };
}> {
  static defaultProps: ComponentPreviewer["props"] = {
    components: {}
  };

  render() {
    return (
      <div>
        <Link to="/">Go back home</Link>
        <Switch>
          {Object.keys(this.props.components).map(k => (
            <Route path={"/" + k} component={this.props.components[k]} />
          ))}
          <Route>
            <div>
              Click one of the links below to view an individual component:
              <ul>
                {Object.keys(this.props.components).map(k => (
                  <li>
                    <Link to={"/" + k}>{k}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}
