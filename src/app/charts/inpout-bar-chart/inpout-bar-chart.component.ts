import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpout-bar-chart',
  templateUrl: './inpout-bar-chart.component.html',
  styleUrls: ['./inpout-bar-chart.component.scss']
})
export class InpoutBarChartComponent implements OnInit {

   productsName = ['مضافتی', 'پیارم', 'ربی' , 'زاهدی', 'کلیته' ];
   productsValue = ['2000', '15000', '1500' , '5500', '10500' ];

  //  ];
   saleData: any[]=[];

   setData(){
     for (const i in this.productsName) {
      this.saleData.push({
        name: this.productsName[i],
        value: this.productsValue[i]
      });

     }
   }
  //  saleData = [
  //   { name: 'mozafati', value: 105000 },
  //   { name: 'piarom', value: 55000 },
  //   { name: 'rabbi', value: 15000 },
  //   { name: 'zahedi', value: 150000 },
  //   { name: 'kaliteh', value: 20000 }
  // ];
  constructor() { }



  ngOnInit(): void {

    this.setData();
    console.log(this.saleData);
  }

}
