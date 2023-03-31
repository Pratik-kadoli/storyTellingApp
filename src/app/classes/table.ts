import { Table } from "src/app/Interfaces/table";

export class TableInfo {

    static dataSourceColumnDetailsArray: Table[] = [
        {
            "title": "Employee Name",
            "key": "emp-name",
            "type": "Text",
        },
        {
            "title": "Mobile No.",
            "key": "emp-mobile",
            "type": "Number",
        },
        {
            "title": "E-mail",
            "key": "emp-email",
            "type": "Text",
        },
        {
            "title": "Department",
            "key": "emp-dept",
            "type": "Text",
        },
        {
            "title": "Address",
            "key": "emp-address",
            "type": "Text",
        },
        {
            "title": "Action",
            "key": "actions",
            "type": "Action",
        }
    ]
}


