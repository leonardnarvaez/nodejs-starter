import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeeAttributes } from '../attributes';

class Employee extends Model implements EmployeeAttributes {
    public empId!: string;
    public eFirstName!: string;
    public eLastName!: string;
    public address!: string;
    public age!: number;
    public readonly dJoin!: Date;
    public dept!: string;
    public salary!: number;

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                empId: {
                    field: 'EmpID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                eFirstName: {
                    field: 'EFirstName',
                    type: DataTypes.STRING,
                },
                eLastName: {
                    field: 'ELastName',
                    type: DataTypes.STRING,
                },
                address: {
                    field: 'Address',
                    type: DataTypes.STRING,
                },
                age: {
                    field: 'Age',
                    type: DataTypes.INTEGER,
                },
                dJoin: {
                    field: 'D_Join',
                    type: DataTypes.DATE,
                },
                dept: {
                    field: 'Dept',
                    type: DataTypes.STRING,
                },
                salary: {
                    field: 'Salary',
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employee;
