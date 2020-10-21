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
      writeKey: 'JfehFIFlHHSrI0rIb3qJ1Aur1xlEXSgw',
      app: 'ATS Careers',
      verbose: false,
      sharedToken: {sub : {}, uta: {}, iat: 0, exp: 0}
    });
    GlobalVariables.riseAnalytics.initialize();  
  }
}
