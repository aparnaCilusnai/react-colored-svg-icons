# react-colored-svg-icons

> colored svg icons for react
[![NPM](https://img.shields.io/npm/v/xampr-svg-icons.svg)](https://www.npmjs.com/package/react-colored-svg-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-colored-svg-icons
```

## Usage

```jsx
import React, { Component } from 'react'
import {View} from 'react-native'
import Icon from 'react-colored-svg-icons'

class Example extends Component {
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
          <Icon name={account} size='24px' color='grey' />
        ))}
         
      </View>
    )
  }
}

```

## License

MIT © [https://github.com/aparnaCilusnai/react-colored-svg-icons](https://github.com/https://github.com/aparnaCilusnai/react-colored-svg-icons)
