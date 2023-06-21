import { db } from '../database/models';
import Employee from '../database/models/employee';

class EmployeeService {
    private static instance: EmployeeService;

    static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService();
        }
        return EmployeeService.instance;
    }

    findAll = async () => {
        const employees: Employee[] = await Employee.findAll({
            attributes: [
                'empId',
                'eFirstName',
                'eLastName',
                'address',
                'age',
                'dJoin',
                'dept',
                'salary',
            ],
        });
        return employees;
    };

    findById = async (empId: string) => {
        const existingEmployee: Employee | null = await Employee.findByPk(
            empId,
            {
                attributes: [
                    'empId',
                    'eFirstName',
                    'eLastName',
                    'address',
                    'age',
                    'dJoin',
                    'dept',
                    'salary',
                ],
            }
        );
        return existingEmployee;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property');
            }
            const employee = await Employee.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };

    update = async (empId: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingEmployee = await this.findById(empId);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await Employee.update(
                { ...object },
                {
                    where: { empId }, //shorthand
                }
            );

            existingEmployee = await this.findById(empId);
            return existingEmployee;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (empId: string) => {
        let existingEmployee = await this.findById(empId);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await existingEmployee.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default EmployeeService;
