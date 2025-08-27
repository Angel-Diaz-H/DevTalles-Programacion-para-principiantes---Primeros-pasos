export let employees: string[] = ['Angel', 'Aaron', 'Damián'];
let salaries: number[] = [1500, 2400, 3200];

for (let i:number = 0; i < employees.length; i++) {
    console.log(employees[i], 'tiene un salario de:', salaries[i]);
}