import { Component } from '@angular/core';
import { RiseAnalytics } from '@risepeopleinc/analytics_rise_npm';
import { analyticsMapTest } from './analytics-config';
import { GlobalVariables } from './global-variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testbed-analytics';

  ngOnInit() {

    GlobalVariables.riseAnalytics = new RiseAnalytics({
      env: 'test',
      mappingConfig: analyticsMapTest,
      client: 'segment',
      writeKey: 'nNskT0dbFga6r49a6ANXnx2omOQeQKYr',
      app: 'Colin Test',
      verbose: false,
      sharedToken: { sub: {}, uta: {}, iat: 0, exp: 0 }
    });
    GlobalVariables.riseAnalytics.initialize();
  }

  clicked() {
    console.log('clicked');

    const userA = {
      id: 1,
      email: "ann@rise.com",
      firstName: "Ann",
      lastName: "Chen",
      organization_id: 1,
      commented: true,
      status: "active"
    };

    GlobalVariables.riseAnalytics.track({
      eventName: "login_succeeded",
      data: { user: userA }
    }).catch((e) => console.log(e));
  }

}
