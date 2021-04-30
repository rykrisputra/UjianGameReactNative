import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Button } from 'react-native'
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons'
export default class App extends Component {
  
  constructor(props){
    super(props)

    this.state={
      gameState:[
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
       ],
      player:1,
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame=()=>{
    this.setState({gameState:
    [
     [0,0,0,0,0],
     [0,0,0,0,0],
     [0,0,1,0,0],
     [0,0,0,0,0],
     [0,0,0,0,0],
    ]
    })
  }

  gantiState() {
    this.setState({gameState:
      [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ]
    })
  }

  renderIcon = (row, col) =>{
    let value = this.state.gameState[row][col];
    if(value == 1){
      return  <Text style={styles.item}/>;
    }else{
      return<View/>;
    }
  }
  
  

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity   style={styles.border}>
          {this.renderIcon(0,0)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(0,1)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(0,2)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(0,3)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(0,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(1,0)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(1,1)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(1,2)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(1,3)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(1,4)}
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(2,0)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(2,1)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(2,2)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(2,3)}
        </TouchableOpacity>
        <TouchableOpacity style={styles.border}>
          {this.renderIcon(2,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(3,0)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(3,1)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(3,2)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(3,3)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(3,4)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(4,0)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(4,1)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(4,2)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(4,3)}
        </TouchableOpacity>
        <TouchableOpacity  style={styles.border}>
          {this.renderIcon(4,4)}
        </TouchableOpacity>
        </View>
        

        <TouchableOpacity style={styles.button}
        onPress={() => this.gantiState()}>
          <Text style={styles.text}>Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Right</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Down</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    marginTop: 10,
    
  },

  border: {
    backgroundColor: 'white',
    borderWidth: 2,
    height:70,
    margin: 1,
    width:70,
  },

  point:{
    color:'#000',
    fontSize:40
  },

  button: {
    alignItems: "center",
    backgroundColor: "lightgreen",
    marginTop: 20,
    marginHorizontal: 5,
    padding: 10,
  },

  text: {
    color: 'white',
    fontSize: 20
  },

  item: {
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  }

})

