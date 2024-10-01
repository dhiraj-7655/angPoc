// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Sunburst from 'highcharts/modules/sunburst';

Sunburst(Highcharts);

@Component({
  selector: 'app-high-chart-sunburn',
  templateUrl: './high-chart-sunburn.component.html',
  styleUrls: ['./high-chart-sunburn.component.scss'],
})
export class HighChartSunburnComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts instance
  chartOptions: Highcharts.Options = {}; // Chart options

  ngOnInit(): void {
    const data = [
      /*Root Level*/ {
        id: '0.0',
        parent: '',
        name: 'North Star', // ROOT LEVEL Eg: main module
        color: '#AA3939',
      },
      {
        id: '1.1',
        parent: '0.0',
        name: 'Strategy',
        value: 2.259,
        color: '#B17457',
      },
      {
        id: '1.2',
        parent: '0.0',
        name: 'Operations/Execution',
        value: 2.258,
        color: '#8FD14F',
      },
      {
        id: '1.3',
        parent: '0.0',
        name: 'Technology',
        value: 2.257,
        color: '#7EACB5',
      },
      {
        id: '1.4',
        parent: '0.0',
        name: 'Innovation',
        value: 2.256,
      },
      {
        id: 'strategy_id_2.1',
        parent: '1.1',
        name: 'Enterprise Strategy Domain',
        value: 2,
      },
      {
        id: 'strategy_id_2.2',
        parent: '1.1',
        name: 'Culture',
        value: 2,
      },
      {
        id: 'strategy_id_2.3',
        parent: '1.1',
        name: 'Structure',
        value: 2,
      },
      {
        id: 'strategy_id_2.4',
        parent: '1.1',
        name: 'Governance Controls',
        value: 2,
      },
      {
        id: 'strategy_id_2.5',
        parent: '1.1',
        name: 'Compliance',
        value: 2,
      },
      {
        id: 'strategy_id_2.6',
        parent: '1.1',
        name: 'Finance',
        value: 2,
      },
      {
        id: 'strategy_id_2.7',
        parent: '1.1',
        name: 'Procurement',
        value: 2,
      },
      {
        id: 'strategy_id_2.8',
        parent: '1.1',
        name: 'Commercial',
        value: 2,
      }, ////////////////////// End Strategy //////////////////////////////
      {
        id: 'opr_exe_id_2.1',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Skills',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.2',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Portfolio Management',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.3',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Projects',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.4',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Management Tools (operations)',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.5',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Operations (IT) Process',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.6',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Information Lifecycle Management',
        value: 2,
      },
      {
        id: 'opr_exe_id_2.7',
        parent: '1.2' /*Operations/Execution*/,
        name: 'Business Process',
        value: 2,
      }, ///////////////////////// End Operations/Execution //////////////////////
      {
        id: 'tech_base_id_2.1',
        parent: '1.3' /*Technology*/,
        name: 'Technical Base',
        value: 2,
      },
      {
        id: 'tech_base_id_2.2',
        parent: '1.3' /*Technology*/,
        name: 'IT Applications',
        value: 2,
      },
      {
        id: 'tech_base_id_2.3',
        parent: '1.3' /*Technology*/,
        name: 'Architecture',
        value: 2,
      },
      {
        id: 'tech_base_id_2.4',
        parent: '1.3' /*Technology*/,
        name: 'DevOps',
        value: 2,
      },
      {
        id: 'tech_base_id_2.5',
        parent: '1.3' /*Technology*/,
        name: 'Security',
        value: 2,
      },
      {
        id: 'tech_base_id_2.6',
        parent: '1.3' /*Technology*/,
        name: 'Data',
        value: 2,
      },
      {
        id: 'tech_base_id_2.7',
        parent: '1.3' /*Technology*/,
        name: 'Network',
        value: 2,
      },
      {
        id: 'tech_base_id_2.8',
        parent: '1.3' /*Technology*/,
        name: 'API',
        value: 2,
      },
      {
        id: 'tech_base_id_2.9',
        parent: '1.3' /*Technology*/,
        name: 'Config Management',
        value: 2,
      },
      {
        id: 'tech_base_id_2.10',
        parent: '1.3' /*Technology*/,
        name: 'Code Development',
        value: 2,
      }, ///////////////////////////////// End Technology ///////////////////////
      {
        id: 'innovation_id_2.1',
        parent: '1.4' /*Innovation*/,
        name: 'IaaS',
        value: 2,
      },
      {
        id: 'innovation_id_2.2',
        parent: '1.4' /*Innovation*/,
        name: 'PaaS',
        value: 2,
      },
      {
        id: 'innovation_id_2.3',
        parent: '1.4' /*Innovation*/,
        name: 'STaaS',
        value: 2,
      },
      {
        id: 'innovation_id_2.4',
        parent: '1.4' /*Innovation*/,
        name: 'SaaS',
        value: 2,
      },
      {
        id: 'innovation_id_2.5',
        parent: '1.4' /*Innovation*/,
        name: 'Ipaas',
        value: 2,
      },
      {
        id: 'innovation_id_2.6',
        parent: '1.4' /*Innovation*/,
        name: 'AI',
        value: 2,
      },
      {
        id: 'innovation_id_2.7',
        parent: '1.4' /*Innovation*/,
        name: 'IOT',
        value: 2,
      }, ////////////////////// End Innovation //////////////////////////////
      
      // ----------------->Operations/Execution STARTED----------> 
      {
        id: 'opr_exe_lv_23.1',
        parent: 'opr_exe_id_2.1', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.2',
        parent: 'opr_exe_lv_23.1',
        name: 'Process',
        value: 2,
      },
      {
        id: 'opr_exe_lv_23.3',
        parent: 'op_level_thired_3.2',
        name: 'Technology',
        value: 5,
      }, /////// skill end
      {
        id: 'opr_exe_lv_24.1',
        parent: 'opr_exe_id_2.2', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.21',
        parent: 'opr_exe_lv_24.1',
        name: 'Process',
        value: 2,
      },
      {
        id: 'opr_exe_lv_23.3',
        parent: 'op_level_thired_3.21',
        name: 'Technology',
        value: 5,
      } , ////// Portfollio end
      {
        id: 'opr_exe_lv_24.22',
        parent: 'opr_exe_id_2.3', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.31',
        parent: 'opr_exe_lv_24.22',
        name: ' ',
        value: 6,
      },
      {
        id: 'opr_exe_lv_23.3',
        parent: 'op_level_thired_3.31',
        name: ' ',
        value: 6,
      } , ////// Project end
      {
        id: 'opr_exe_lv_24.23',
        parent: 'opr_exe_id_2.4', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.32',
        parent: 'opr_exe_lv_24.23',
        name: 'Process',
        value: 5,
      },
      {
        id: 'opr_exe_lv_23.3',
        parent: 'op_level_thired_3.32',
        name: 'Technology',
        value: 5,
      } , ////// Managment end
      {
        id: 'opr_exe_lv_24.24',
        parent: 'opr_exe_id_2.5', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.42',
        parent: 'opr_exe_lv_24.24',
        name: 'Process',
        value: 5,
      },
      {
        id: 'opr_exe_lv_23.3',
        parent: 'op_level_thired_3.42',
        name: 'Technology',
        value: 5,
      }, ////// Operations end
      {
        id: 'opr_exe_lv_24.25',
        parent: 'opr_exe_id_2.6', // level 2 id
        name: ' ',
        value: 23,
      },
      {
        id: 'op_level_thired_3.52',
        parent: 'opr_exe_lv_24.25',
        name: ' ',
        value: 52,
      },
      {
        id: 'opr_exe_lv_23.322',
        parent: 'op_level_thired_3.52',
        name: ' ',
        value: 52,
      }, ////// Information life cucle end
      {
        id: 'opr_exe_lv_24.27',
        parent: 'opr_exe_id_2.7', // level 2 id
        name: 'People',
        value: 2,
      },
      {
        id: 'op_level_thired_3.43',
        parent: 'opr_exe_lv_24.27',
        name: 'Process',
        value: 5,
      },
      {
        id: 'opr_exe_lv_23.322',
        parent: 'op_level_thired_3.43',
        name: 'Technology',
        value: 5,
      } ////// ----------------->Operations/Execution Bussiness process end
    ,
    {
      id: 'opr_exe_lv_23.112',
      parent: 'strategy_id_2.1', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.222',
      parent: 'opr_exe_lv_23.112',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3',
      parent: 'op_level_thired_3.222',
      name: 'Technology',
      value: 5,
    }, /////// skill end
    {
      id: 'opr_exe_lv_24.1121',
      parent: 'strategy_id_2.2', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.213',
      parent: 'opr_exe_lv_24.1121',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3',
      parent: 'op_level_thired_3.213',
      name: 'Technology',
      value: 5,
    } , ////// Portfollio end
    {
      id: 'opr_exe_lv_24.222',
      parent: 'strategy_id_2.3', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.312',
      parent: 'opr_exe_lv_24.222',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_23.3',
      parent: 'op_level_thired_3.312',
      name: ' ',
      value: 6,
    } , ////// Project end
    {
      id: 'opr_exe_lv_24.23663',
      parent: 'strategy_id_2.4', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.323313',
      parent: 'opr_exe_lv_24.23663',
      name: 'Process',
      value: 5,
    },
    {
      id: 'opr_exe_lv_23.3',
      parent: 'op_level_thired_3.323313',
      name: 'Technology',
      value: 5,
    } , ////// Managment end
    {
      id: 'opr_exe_lv_24.24e',
      parent: 'strategy_id_2.5', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.42e',
      parent: 'opr_exe_lv_24.24e',
      name: 'Process',
      value: 5,
    },
    {
      id: 'opr_exe_lv_23.3',
      parent: 'op_level_thired_3.42e',
      name: 'Technology',
      value: 5,
    }, ////// Operations end
    {
      id: 'opr_exe_lv_24.25s',
      parent: 'strategy_id_2.6', // level 2 id
      name: ' ',
      value: 23,
    },
    {
      id: 'op_level_thired_3.52s',
      parent: 'opr_exe_lv_24.25s',
      name: ' ',
      value: 52,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_3.52s',
      name: ' ',
      value: 52,
    }, ////// Information life cucle end
    {
      id: 'opr_exe_lv_24.27z',
      parent: 'strategy_id_2.7', // level 2 id
      name: ' ',
      value: 23,
    },
    {
      id: 'op_level_thired_3.43dd',
      parent: 'opr_exe_lv_24.27z',
      name: ' ',
      value: 53,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_3.43dd',
      name: ' ',
      value: 53,
    }
    , ////// Information life cucle end
    {
      id: 'opr_exe_lv_24.27ze',
      parent: 'strategy_id_2.8', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_3.43dde',
      parent: 'opr_exe_lv_24.27ze',
      name: ' ',
      value: 53,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_3.43dde',
      name: ' ',
      value: 53,
    }  ///////////////////////// -------->Strategy end-------------------------
    ,
    {
      id: 'opr_exe_lv_24.27z2',
      parent: 'innovation_id_2.1', // level 2 id
      name: ' ',
      value: 23,
    },
    {
      id: 'op_level_thired_3.43dd2',
      parent: 'opr_exe_lv_24.27z2',
      name: ' ',
      value: 53,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_3.43dd2',
      name: ' ',
      value: 53,
    }, //////////// lass end
    {
      id: 'opr_exe_lv_34.27z2',
      parent: 'innovation_id_2.2', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.43dd2',
      parent: 'opr_exe_lv_34.27z2',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.43dd2',
      name: 'Technology',
      value: 2,
    }, //////////// lass end
    {
      id: 'opr_exe_lv_34.27z2e',
      parent: 'innovation_id_2.3', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.43dd2f',
      parent: 'opr_exe_lv_34.27z2e',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322ww',
      parent: 'op_level_thired_2.43dd2f',
      name: 'Technology',
      value: 2,
    }
    , //////////// lass end
    {
      id: 'new_test_saas',
      parent: 'innovation_id_2.4', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.pqr',
      parent: 'new_test_saas',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.pqr',
      name: 'Technology',
      value: 2,
    }
    , //////////// lass end
    {
      id: 'opr_exe_lv_34.27v2',
      parent: 'innovation_id_2.5', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.43dd23',
      parent: 'opr_exe_lv_34.27v2',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.43dd23',
      name: 'Technology',
      value: 2,
    }
    , //////////// lass end
    {
      id: 'opr_exe_lv_34.27z2h',
      parent: 'innovation_id_2.6', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.43dd2aa',
      parent: 'opr_exe_lv_34.27z2h',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.43dd2aa',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_34.27z2hh',
      parent: 'innovation_id_2.7', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.43dd2aad',
      parent: 'opr_exe_lv_34.27z2hh',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.43dd2aad',
      name: 'Technology',
      value: 2,
    }, ////////////////////////// Innpvation end---------------
    
    {
      id: 'opr_exe_lv_34.27z2hhh',
      parent: 'tech_base_id_2.1', // level 2 id
      name: ' ',
      value: 23,
    },
    {
      id: 'op_level_thired_2.43dd2aadh',
      parent: 'opr_exe_lv_34.27z2hhh',
      name: ' ',
      value: 23,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.43dd2aadh',
      name: ' ',
      value: 23,
    }, ////////// technical base end
    {
      id: 'opr_exe_lv_34.51',
      parent: 'tech_base_id_2.2', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.33ww',
      parent: 'opr_exe_lv_34.51',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322',
      parent: 'op_level_thired_2.33ww',
      name: 'Technology',
      value: 2,
    }, ////////// technical base end
    {
      id: 'opr_exe_lv_34.51g',
      parent: 'tech_base_id_2.3', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.331wasa',
      parent: 'opr_exe_lv_34.51g',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.322f',
      parent: 'op_level_thired_2.331wasa',
      name: 'Technology',
      value: 2,
    },
    {
      id: 'opr_exe_lv_34.51er',
      parent: 'tech_base_id_2.4', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.331r',
      parent: 'opr_exe_lv_34.51er',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3222111r',
      parent: 'op_level_thired_2.331r',
      name: ' ',
      value: 6,
    }, ////////// technical base end
    {
      id: 'opr_exe_lv_34.51gdddd',
      parent: 'tech_base_id_2.5', // level 2 id
      name: ' ',
      value: 6,
    },
    {
      id: 'op_level_thired_2.331wasaas12',
      parent: 'opr_exe_lv_34.51gdddd',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_23.322f',
      parent: 'op_level_thired_2.331wasaas12',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_34.51ezeedsd',
      parent: 'tech_base_id_2.6', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.331vdw',
      parent: 'opr_exe_lv_34.51ezeedsd',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3222111',
      parent: 'op_level_thired_2.331vdw',
      name: 'Technology',
      value: 2,
    },
    {
      id: 'opr_exe_lv_34.51ezeedsde',
      parent: 'tech_base_id_2.7', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'op_level_thired_2.331vdwc',
      parent: 'opr_exe_lv_34.51ezeedsde',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3222111',
      parent: 'op_level_thired_2.331vdwc',
      name: 'Technology',
      value: 2,
    },
    {
      id: 'exp1',
      parent: 'tech_base_id_2.8', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'test12',
      parent: 'exp1',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_23.3222111',
      parent: 'test12',
      name: ' ',
      value: 6,
    }
    ,
    {
      id: 'exp12',
      parent: 'tech_base_id_2.9', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'test1222',
      parent: 'exp12',
      name: 'Process',
      value: 2,
    },
    {
      id: 'opr_exe_lv_23.3222111',
      parent: 'test1222',
      name: 'Technology',
      value: 2,
    }
    ,
    {
      id: 'exp1333',
      parent: 'tech_base_id_2.10', // level 2 id
      name: 'People',
      value: 2,
    },
    {
      id: 'test125',
      parent: 'exp1333',
      name: ' ',
      value: 6,
    },
    {
      id: 'opr_exe_lv_23.3222111',
      parent: 'test125',
      name: ' ',
      value: 6,
    }
    ];

    data.forEach((point: any) => {
      if (point.value > 5) {
        point.borderWidth = 0;
        point.color = '#cc66ff';
        // point.color = '#BFBFBF';
      } else {
        point.borderWidth = 1; // Keep border if     value <= 6
        // point.color = '#582A72';
      }
      // if(point.name == ' ') {
      //   point.color = '#cc66ff';
      // }
    });
    // Chart options
    this.chartOptions = {
      chart: {
        height: '100%',
      },
      colors: ['transparent'].concat(
        '#C68FE6',
        '#86D293',
        '#54C392',
        '#15B392' || []
      ),
      title: {
        text: 'Test Data',
      },
      subtitle: {},
      series: [
        {
          type: 'sunburst',
          data: data,
          name: 'Root',
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: 'pointer',
          // enableMouseTracking : true,

          dataLabels: {
            format: '{point.name}',
            filter: {
              property: 'innerArcLength',
              operator: '>',
              value: 16,
            },
          },
          levels: [
            {
              level: 1,
              color: '#00DFA2',
              dataLabels: {
                filter: {
                  property: 'outerArcLength',
                  operator: '>',
                  value: 64,
                },
              },
            },
            {
              level: 2,
              colorByPoint: true,
            },
            {
              level: 3,
              color: '#480032',
              colorVariation: {
                key: 'brightness',
                to: -0.5,
              },
            },
            {
              level: 4,
              color: '#00215E',
              colorVariation: {
                key: 'brightness',
                to: 0.5,
              },
            },
          ],
          levelIsConstant: false,
        },
      ],
      tooltip: {
        headerFormat: '',
        pointFormat: '<b style="color: red" >{point.value}</b>',
      },
    };
  }
}
