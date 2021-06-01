import React from 'react';
import styles from './Logo.module.css'
import { Label, initializeIcons, IStyleSet, ILabelStyles} from '@fluentui/react';
import VanillaSearchComponent from './VanillaSearchComponent';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Line } from "react-chartjs-2";

interface IAppState {
  showUsers: boolean;
  targetElement: any;
  isGraphVisible: boolean;
  textFieldValue: string | undefined;
  keyCount: number;
}

const users = ['Aaron Nakamura-Weiser', 'Aftab Hassan', 'Alex Hoff', 'Ann Ly', 
'Bella Li', 'Betty Siewert', 'Christopher Rahla', 'Eldon L. Vincent', 'Gavin Britto', 'Grant Hsu', 
'Hannah Jang', 'Ime Ntekpere', 'Jie (Laurie) Zhang', 'Kang Kai Chow', 'Keisuke Inomura', 'KiBeom Kwon', 
'Kimmie Feng', 'Maciej Fronczuk', 'Margaret Tarnawa', 'Marty Varela', 'Matt Green', 'Mauricio Laine', 'Michael Umeano', 
'Narendra kumar Sampath kumar', 'Natraj Jaganmohan', 'Neeraja Abhyankar', 'Sachin Nayak', 'Sam Byrne', 'Tao Guo', 
'Tessara Smith', 'Viswas Vanama', 'Wing Huang'];

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { 
    fontSize: 30,
    marginLeft: 70,
    marginTop: 50,
    color: 'lightslategray'
  },
};

const data = {
  labels: [
    "01/01/2019",
    "02/01/2019",
    "03/01/2019",
    "04/01/2019",
    "05/01/2019",
    "06/01/2019",
    "07/01/2019"
  ],
  //backgroundColor: ['rgba(255,0,0,1)'],
  //lineTension: 1,
  datasets: [
    {
      label: "Idea",
      fill: false,
      borderColor: "brown",
      borderWidth: 2,
      pointRadius: 2,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Structure",
      fill: false,
      borderColor: "rgba(0, 255, 0, 0.3)",
      borderWidth: 2,
      pointRadius: 2,
      data: [70, 32, 45, 65, 87, 92, 99]
    },
    {
      label: "Vocal",
      fill: false,
      borderColor: "seagreen",
      borderWidth: 2,
      pointRadius: 2,
      data: [135, 91, 125, 1, 2, 3, 139]
    },
    {
      label: "Gestures",
      fill: false,
      borderColor: "salmon",
      borderWidth: 2,
      pointRadius: 2,
      data: [135, 12, 23, 12, 143, 143, 1]
    },
    {
      label: "Nerves",
      fill: false,
      borderColor: "royalblue",
      borderWidth: 2,
      pointRadius: 2,
      data: [135, 91,  143, 125, 144, 143, 139]
    }
  ]
};

var options = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 10
    }
  },
  scales: {
    xAxes: [
      {
        ticks: { display: false }
      }
    ]
  }
};

class App extends React.Component<{}, IAppState> {

  private matches: string[] = [];

  constructor(props: any) {
    super(props);

    this.state = {
      showUsers: false,
      targetElement: undefined,
      isGraphVisible: true,
      textFieldValue: '',
      keyCount: 0
    }
  }

  public componentDidMount() {
    const textField = document.getElementById('searchTextField');
    if(textField) {
      textField.focus();
    }
  }

  public componentDidUpdate() {
    const textField = document.getElementById('searchTextField');
    if(textField) {
      textField.focus();
    }
  }

  public render() {
    initializeIcons();

    return (
        <>
          <div className={styles.App}>
            <div className={styles.logos}> 
              <div className={styles.cosmosLogo}>
                <Label styles={{"root":{color:"white", fontSize: "30px"}}}>Cosmos</Label>
              </div>  
              <div className={styles.generalEvaluatorLogo}>
                <Label styles={{"root":{color:"white", fontSize: "20px"}}}>General Evaluator</Label>
              </div>  
            </div>
            <SearchBox id={'searchTextField'} onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler} className={styles.textFieldStyles} placeholder="Search" />
          </div>

          {!this.state.isGraphVisible ? 
            <div>
            <VanillaSearchComponent onClickHandler={this.onClickHandlerOfSearchComponent} keyCount={this.state.keyCount} prefix={this.state.textFieldValue}/>
            </div> : 
          undefined}

          <div style={{position: 'fixed', width:'80%', height: '80%', margin: 'auto'}}>
            <Line data={data} options={options} />
          </div>
        </>
        );
  }

  private onClickHandlerOfSearchComponent = (ev: any, keyCountToSet: number) => {
    this.setState({
      showUsers: true,
      targetElement: ev.target,
      isGraphVisible: true,
      keyCount: keyCountToSet
    })
  }

  private onChangeHandler = (ev: any, newValue: string | undefined) => {
    this.setState({
      textFieldValue: newValue,
      targetElement: ev.target,
      keyCount: 0,
      isGraphVisible: newValue?.length===0?true:false
    })

    if(newValue) {
      this.matches = [];

      for(let i=0;i<users.length;i++) {
        const user = users[i].toLowerCase();
        if(user.indexOf(newValue) >= 0) {
            this.matches.push(users[i]);
        }
      } 
    }
  }

  private onKeyDownHandler = (ev: React.KeyboardEvent) => {
    if(ev.key === 'Enter') {
      this.setState({
        showUsers: true,
        targetElement: ev.target,
        isGraphVisible: true,
      })
    } else if(ev.key === 'ArrowUp') {
      const currentKeyCount = this.state.keyCount;
      this.setState({
        keyCount: currentKeyCount-1 >= 0 ? currentKeyCount-1 : 0
      }, ()=>{
      })
    } else if(ev.key === 'ArrowDown') {
      const currentKeyCount = this.state.keyCount;
      this.setState({
        keyCount: currentKeyCount + 1 <= this.matches.length-1 ? currentKeyCount + 1 : this.matches.length-1
      }, () => {
      })
    }
  }
}

export default App;
