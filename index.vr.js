import React from 'react';
import Button from './Button'
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Stylesheet,
  View,
  Model,
} from 'react-vr';

export default class ImisiVRMeetupDemo extends React.Component {
  constructor(){
    super();
    this.state = {
      cView:'panos/lombard-vr.jpg',
    }
  }
  nextView(view){
    this.setState({
      cView: view
    });
  }
  render() {
    return (
      <View>
        <Pano source={asset(this.state.cView)}/>
        <View onEnter={()=>this.nextView('panos/island-garden.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -6]}], }}>
              Island Garden
          </Text>
        </View>
        <View onEnter={()=>this.nextView('panos/winter-outdoor.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [0.5, 0],
              transform: [{translate: [0, 0, -6]}], }} >
              Winter Outdoor
          </Text>
        </View>
        <View onEnter={()=>this.nextView('panos/museum.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [-0.7, 2.5],//right - left, up -down
              transform: [{translate: [0, 0, -6]}], }} >
              Museum
          </Text>
        </View>
        <View onEnter={()=>this.nextView('panos/starry-sky.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [-0.7, 2],//right - left, up -down
              transform: [{translate: [0, 0, -6]}], }}>
              Starry Sky
          </Text>
        </View>

        <View onEnter={()=>this.nextView('panos/light-show.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [-0.7, 1.5],//right - left, up -down
              transform: [{translate: [0, 0, -6]}], }}>
              Light Show
          </Text>
        </View>
        <View onEnter={()=>this.nextView('panos/zion-vr.jpg')}>
          <Text style={{
              backgroundColor:'red',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.3,
              layoutOrigin: [0.5, 2.5],//right - left, up -down
              transform: [{translate: [0, 0, -6]}], }} >
              Zion VR
          </Text>
        </View>


        {/*<Model
          style={{
              transform: [
                {translate: [-25, 0, -70]}, {scale: 0.05 },
                {rotateY: -130},
                {rotateX: 20},
                {rotateZ: -10} ],
          }}
          source={{obj:asset('3d/suspension/Baller XXXL4_export.obj'), mtl:asset('3d/gate/Baller XXXL4_exports.mtl')}} lit={false}/>
          */}


      </View>
    );
  }
};

AppRegistry.registerComponent('ImisiVRMeetupDemo', () => ImisiVRMeetupDemo);
