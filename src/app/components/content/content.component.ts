import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() fontWeight!: any;

  constructor() { }
  data = [{
    Questions: 'Raja Ltd. invited applications for issuing 50,000 Equity Shares of ₹ 10 each. The amount was payable as follow: 10 Marks On Application On Allotment On First and Final call - ₹ 3 per share, - ₹ 5 per share - Balance Applications for 70,000 shares were received. Allotment was made to all applicants on pro rata basis. Excess money received on application was adjusted towards sums due on allotment. Ramesh, who had applied for 700 shares, did not pay the allotment money and on his failure to pay the allotment money his shares were forfeited. Afterwards, the first and the final call was made. Adhar, who had been allotted 500 shares, did not pay the first and final call. His shares were also forfeited. Out of the forfeited shares 900 shares were reissued at ₹ 8 per share as fully paid-up. The reissued shares included all the shares of Ramesh. Pass necessary journal entries for the above transactions in the books of the company.',
    Marks: 10
  },
  {
    Questions: 'Raja Ltd. invited applications for issuing 50,000 Equity Shares of ₹ 10 each. The amount was payable as follow: 10 Marks On Application On Allotment On First and Final call - ₹ 3 per share, - ₹ 5 per share - Balance Applications for 70,000 shares were received. Allotment was made to all applicants on pro rata basis. Excess money received on application was adjusted towards sums due on allotment. Ramesh, who had applied for 700 shares, did not pay the allotment money and on his failure to pay the allotment money his shares were forfeited. Afterwards, the first and the final call was made. Adhar, who had been allotted 500 shares, did not pay the first and final call. His shares were also forfeited. Out of the forfeited shares 900 shares were reissued at ₹ 8 per share as fully paid-up. The reissued shares included all the shares of Ramesh. Pass necessary journal entries for the above transactions in the books of the company.',
    Marks: 10
  }, {
    Questions: "Calculate any three of the following ratios with the help of the following information:  Operating Ratio . Current Ratio. Gross Profit Ratio. Inventory Turnover Ratio.  Debt Equity RatioInformation: Equity Share Capital ₹ 5, 00, 000; 12% Debentures ₹ 6, 00, 000;9% Preference Share Capital ₹ 3, 00, 000; General Reserve ₹ 1, 00, 000; Revenue from Operations, ₹ 10, 00, 000; Opening Inventory ₹ 80, 000; Purchases ₹ 6, 00, 000; Wages, 1, 00, 000; Closing Inventory ₹ 1, 00, 000; Selling and distribution expenses ₹ 20, 000; Other current assets ₹ 5, 00, 000 and Current liabilities ₹ 3, 00, 000.",
    Marks: 15
  }, {
    Questions: 'If it is agreed that the capital of all the partners should be proportionate to the new profit sharing ratio, how will you work out the new capital of each partner? Give examples and state how necessary adjustments will be made.',
    Marks: 5

  }, {
    Questions: 'X Ltd. issued 80,00,000, 8% debentures of ₹ 100 each on 1st April, 2007. The terms of issue stated that the debentures were to be redeemed at a premium of 5% on 30th June, 2015. The company decided to transfer out of profits ₹ 10,00,000 to Debenture Redemption Reserve on 31st March, 2014 and ₹ 10,00,000 on 31st March, 2015.Pass the necessary Journal entries regarding the issue and redemption of debentures, without providing for either the interest or loss on issue of debentures.',
    Marks: 15
  }

  ]

  ngOnInit(): void {
  }

}
