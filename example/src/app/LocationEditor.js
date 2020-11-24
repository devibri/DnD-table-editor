import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiEditableTable from "mui-editable-table";

class LocationEditor extends Component {

  render() {
      const shouldBeReadOnly = function(rowData) {
          return rowData['title'] != 'Mrs';
      };

      const colSpec = [
          {title: 'Tag', fieldName: 'tag', inputType: "TextField", width: 200},
          {title: 'Name', fieldName: 'name', inputType: "TextField", width: 200},
          {title: 'Occupation', fieldName: 'occupation', inputType: "TextField", width: 300},
          {title: 'Status', fieldName: 'status', inputType: "SelectField", selectOptions: ["alive", "dead", "unconscious"], width: 200, defaultValue: 'alive'},
          {title: 'Information', fieldName: 'information', inputType: "TextField", width: 500}
      ];

      const rowData = [
         {
    "tag": "ToblinStonehill",
      "name": "Toblin Stonehill",
      "occupation": "Innkeeper",
      "status": "alive",
      "information": ["RedbrandHangout"]
    
  }
      ];

      const onChange = (dataTable) => {
          console.log(dataTable)
      };

      return (
      <MuiThemeProvider>
          <MuiEditableTable
              colSpec={colSpec}
              rowData={rowData}
              onChange={onChange}
              reorderable={true}
          />
      </MuiThemeProvider>
    );
  }
}

export default LocationEditor;
