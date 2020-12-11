import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiEditableTable from "mui-editable-table";

class LocationEditor extends Component {

  render() {
      const shouldBeReadOnly = function(rowData) {
          return rowData['title'] != 'Mrs';
      };

      const colSpec = [
          {title: 'Tag', fieldName: 'tag', inputType: "TextField", width: 300},
          {title: 'Name', fieldName: 'name', inputType: "TextField", width: 300},
          {title: 'Known', fieldName: 'known', inputType: "Toggle", width: 100, defaultValue: false},
          {title: 'NPCs', fieldName: 'NPCs', inputType: "TextField", width: 500},
          {title: 'Party Is Here', fieldName: 'partyIsHere', inputType: "Toggle", width: 100},
          {title: "Visited", fieldName: 'visited', inputType: "Toggle", width: 100}
      ];

      const rowData = [
  {
    "tag": "StonehillInn", 
      "name": "The Stonehill Inn", 
      "known": true,
      "NPCs": ["ToblinStonehill", "Narth", "Elsa", "Lanar", "Trilena", "Pip", "Freda"],
      "region": "Phandalin",
      "partyIsHere": true,
      "visited": true
  },
  {
    "tag": "LionshieldCoster", 
      "name": "Lionshield Coster", 
      "known": true,
      "NPCs": ["LineneGraywind"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
  },
  {
    "tag": "BarthensProvisions", 
      "name": "Barthen's Provisions", 
      "known": true,
      "NPCs": ["ElmarBarthen", "Ander", "Thistle"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "TownmastersHall", 
      "name": "Townmaster's Hall", 
      "known": true,
      "NPCs": ["HarbinWester"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "ShrineOfLuck", 
      "name": "Shrine of Luck", 
      "known": true,
      "NPCs": ["SisterGaraele"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "SleepingGiantTapHouse", 
      "name": "Sleeping Giant tap house", 
      "known": true,
      "NPCs": ["Grista", "TheRedbrands"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "EdermathOrchard", 
      "name": "Edermath Orchard", 
      "known": true,
      "NPCs": ["DarenEdermath"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "TresendarManor", 
      "name": "Tresendar Manor", 
      "known": false,
      "NPCs": ["RedbrandMinions"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "OldOwlWell", 
      "name": "Old Owl Well", 
      "known": false,
      "NPCs": ["Hamun"],
      "region": "countryside",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "PhandalinMinersExchange", 
      "name": "Phandalin Miner's Exchange", 
      "known": true,
      "NPCs": ["HaliaThornton"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "AlderleafFarm", 
      "name": "Alderleaf Farm", 
      "known": true,
      "NPCs": ["QellineAlderleaf", "Carp"],
      "region": "Phandalin",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "Thundertree", 
      "name": "Thundertree", 
      "known": false,
      "NPCs": ["Reidoth"],
      "region": "Thundertree",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "AgathasLair", 
      "name": "Agatha's Lair", 
      "known": false,
      "NPCs": ["Agatha"],
      "region": "countryside",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "OrcCamp", 
      "name": "Orc Camp at Triboar Trail", 
      "known": true,
      "NPCs": [],
      "region": "countryside",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "CragmawCastle", 
      "name": "Cragmaw Castle", 
      "known": false,
      "NPCs": [],
      "region": "CragmawCastle",
      "partyIsHere": false,
      "visited": false
    
  },
  {
    "tag": "WaveEchoCave", 
      "name": "Wave Echo Cave", 
      "known": false,
      "NPCs": [],
      "region": "WaveEchoCave",
      "partyIsHere": false,
      "visited": false
     
  }
];

      const onChange = (dataTable) => {
          console.log(dataTable)
      };

      return (
        <div>
           
      <MuiThemeProvider>
          <MuiEditableTable
              colSpec={colSpec}
              rowData={rowData}
              onChange={onChange}
              reorderable={true}
          />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default LocationEditor;
