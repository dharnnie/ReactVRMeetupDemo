import React from 'react';
import{
  Stylesheet,
  Text,
  VrButton,
} from 'react-vr'

class Button extends React.Component {
  constructor() {
    super();
    this.styles= Stylesheet.create({
      button:{
        margin:0.05,
        height:0.4,
        backgroundColor: 'red'
      },
      text:{
        fontSize:0.3,
        textAlign:'center'
      },
    });
  }
  render(){
    return(
      <VrButton
        style={this.styles.button}
        onClick={()=> this.props.callBack()}>
        <Text style={this.styles.text}>
          {this.props.text}
        </Text>
      </VrButton>
    )
  }
}
export default Button;
