import React from 'react';
import styles from './Logo.module.css'
import { Label, initializeIcons, IStyleSet, ILabelStyles} from '@fluentui/react';
import PivotControl from './PivotControl';
import VanillaSearchComponent from './VanillaSearchComponent';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

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
                <Label styles={{"root":{color:"white", fontSize: "30px"}}}>Cosmosssss</Label>
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
          
          {this.state.textFieldValue?.length!==0 ? (<div style={{position: "absolute", top: 80, left: 100}}>
            <Label styles={labelStyles}>Showing feedback for {this.matches[this.state.keyCount]}</Label>
          </div>):(<div style={{position: "absolute", top: 80, left: 100}}>
            <Label styles={labelStyles}>Showing feedback for all speeches at Cosmos starting May 2020</Label>
          </div>)}

          {this.state.isGraphVisible ? (<div className={styles.pivotContainer}>
            <PivotControl keyCount={this.state.keyCount} user={this.matches[this.state.keyCount]}/>
          </div>):(<div className={styles.pivotContainerWithOpacity}>
            <PivotControl keyCount={this.state.keyCount} user={this.matches[this.state.keyCount]}/>
          </div>)}
          <div className={styles.ylegend}>
              Speech number
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
