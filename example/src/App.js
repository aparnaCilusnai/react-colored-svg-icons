import React, { Component } from 'react'
import {View} from 'react-native'
import Icon from 'material-svg-icons-react'

export default class App extends Component {
  render () {
    let temp=[
      'AIAnalytics',
      'VoiceMessage',
      'Activity',
      'Attachments', 
      'Bids',
      'Budget',
      'BunkerManagement',
      'Calendar',
      'Camera',
      'Chair',
      'Chat',
      'ChatBot',
      'CheckList',
      'CloseTicket',
      'CollaborationSuite',
      'Cubeic',
      'Design',
      'Doctor',
      'EMS',
      'Event',
      'Eventdata',
      'Expenses',
      'Fb',
      'FixTicket',
      'Groups',
      'HexaBee',
      'Hospital',
      'Instagram',
      'Link',
      'LinkedIn',
      'Location',
      'Meetings',
      'Notes',
      'Nurse',
      'Patient',
      'Planning',
      'Po',
      'Polls',
      'PrintMedia',
      'Projects',
      'Promotion',
      'Proposal',
      'Publishing',
      'PurchasenBid',
      'Pyramid',
      'Questions',
      'Quotation',
      'Remainder',
      'Sales',
      'Shapes',
      'Status',
      'Tags',
      'Target',
      'Tasks',
      'Ticket',
      'Twitter',
      'VideoCalling',
      'Wheel',
      'Workflow',
      'Workspace',
      'Youtube',
      ]
    return (
      <View>
        {temp.map((item,index)=> (
          <View style={{display:'flex',flexDirection:'row'}}>
          <Icon name={item} size='24px' color='grey' />
          ----{item}
          </View>
        ))}
         
      </View>
    )
  }
}
