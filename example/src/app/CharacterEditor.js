import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiEditableTable from "mui-editable-table";
import {Link } from "react-router-dom";

class CharacterEditor extends Component {

  render() {
      const shouldBeReadOnly = function(rowData) {
          return rowData['title'] != 'Mrs';
      };

      const colSpec = [
          {title: 'Tag', fieldName: 'tag', inputType: "TextField", width: 200},
          {title: 'Name', fieldName: 'name', inputType: "TextField", width: 200},
          {title: 'Met', fieldName: 'met', inputType: "Toggle", width: 100},
          {title: 'Occupation', fieldName: 'occupation', inputType: "TextField", width: 300},
          {title: 'Status', fieldName: 'status', inputType: "SelectField", selectOptions: ["alive", "dead", "unconscious"], width: 100, defaultValue: 'alive'},
          {title: 'Information', fieldName: 'information', inputType: "TextField", width: 500}
      ];

      const rowData = [
         {
    "tag": "ToblinStonehill",
      "name": "Toblin Stonehill",
      "occupation": "Innkeeper",
      "status": "alive",
      "information": ["RedbrandHangout"],
      "met": true
    
  },
  {
    "tag": "ElmarBarthen",
    
      "name": "Elmar Barthen",
      "occupation": "Owns trading post",
      "status": "alive",
      "information": ["RedbrandShakedown"],
      "met": false
    
  },
  {
    "tag": "DarenEdermath",
      "name": "Daren Edermath",
      "occupation": "Retired adventurer",
      "faction": "Order of the Gauntlet",
      "status": "alive",
      "information": ["RedbrandHideoutLocation", "GetRidOfRedbrands", "DiggingOldOwlWell"],
      "met": false
    
  },
  {
    "tag": "LineneGraywind",  
      "name": "Linene Graywind",
      "occupation": "Runs trading post",
      "status": "alive",
      "information": [],
      "met": false
    
  }, 
  {
    "tag": "HaliaThornton",
      "name": "Halia Thorton",
      "occupation": "Runs Phandalin Miner's Exchange",
      "faction": "Zhentarim",
      "status": "alive",
      "information": ["GoblinCragmawCastle", "KillRedbrandLeader"],
      "met": false
    
  },  
  {
    "tag": "QellineAlderleaf",
      "name": "Qelline Alderleaf",
      "occupation": "Halfling farmer",
      "status": "alive",
      "information": ["ReidothLocation"], 
      "familyOf": "Mother of Carp",
      "friendOf": "Reidoth",
      "met": false
    
  },  
  {
   "tag": "SisterGaraele",
      "name": "Sister Garaele",
      "occupation": "Elf cleric of Tymora",
      "faction": "Harper",
      "status": "alive",
      "information": ["AskAgathaAboutBook"],
      "met": false
    
  },  
  {
   "tag": "HarbinWester",
    "name": "Harbin Wester",
    "occupation": "Townmaster of Phandalin",
    "status": "alive",
    "information": ["OrcsTriboarTrail", "TownmasterAndRedbrands"],
    "met": false
    
  },  
  {
   "tag": "SildarHallwinter",
    "name": "Sildar Hallwinter",
    "faction": "Lords' Alliance",
    "status": "alive",
    "information": ["MissingIarno"],
    "met": true
    
  }, 
  {
   "tag": "Narth",
    "name": "Narth",
    "occupation": "Farmer",
    "status": "alive",
    "information": ["SisterGaraeleExhausted"],
    "met": false
    
  },
  {
   "tag": "TheRedbrands",
    "name": "The Redbrands",
    "faction": "Redbrands",
    "status": "alive",
    "information": [],
    "met": false
    
  },
  {
   "tag": "Elsa",
    "name": "Elsa",
    "status": "alive",
    "information": [],
    "met": false
    
  },
  {
   "tag": "Lanar",
    "name": "Lanar",
    "status": "alive",
    "information": ["OrcsTriboarTrail"],
    "met": false
    
  },
  {
   "tag": "Trilena",
    "name": "Trilena",
    "status": "alive",
    "information": ["DendrarFamilyKidnapped"],
    "met": false
    
  },
  {
   "tag": "Pip",
    "name": "Pip",
    "status": "alive",
    "information": ["SecretTunnelKnowledge"], 
    "friendOf": "Carp",
    "met": false
    
  },
  {
   "tag": "Freda",
    "name": "Freda",
    "status": "alive",
    "information": ["RedbrandsAndHalia"],
    "met": false
    
  },
  {
   "tag": "Ander",
    "name": "Ander",
    "status": "alive",
    "information": [],
    "met": false
    
  },
  {
   "tag": "Thistle",
    "name": "Thistle",
    "status": "alive",
    "information": [],
    "met": false
    
  },
  {
   "tag": "Grista",
    "name": "Grista",
    "status": "alive",
    "information": [],
    "met": false
    
  },
  {
   "tag": "Carp",
    "name": "Carp",
    "status": "alive",
    "information": ["RedbrandHideoutLocation", "SecretTunnelLocation"],
    "familyOf": "Child of Qelline Alderleaf",
    "met": false
    
  },
  {
   "tag": "Agatha",
    "name": "Agatha the Banshee",
    "status": "alive",
    "information": ["AgathaInfo"],
    "met": false
    
  },
  {
   "tag": "Reidoth",
    "name": "Reidoth",
    "status": "alive",
    "information": ["GreenDragon"],
    "met": false
    
  },
  {
   "tag": "GundrenRockseeker",
    "name": "Gundren Rockseeker",
    "status": "alive",
    "information": ["WaveEchoCaveMap"],
    "met": false
    
  },
  {
   "tag": "Hamun",
    "name": "Hamun the Necromancer",
    "status": "alive",
    "information": ["HamunQuest", "FinishHamunQuest"],
    "met": false
    
  },
  {
   "tag": "RedbrandMinions",
    "name": "Goblin Droop and Bugbears",
    "status": "alive",
    "information": ["RedbrandMinionInfo"],
    "met": false
    
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

export default CharacterEditor;
