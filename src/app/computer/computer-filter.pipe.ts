import { Pipe, PipeTransform } from '@angular/core';
import { ComputerComponent } from './computer.component';
import {User} from '../user';
@Pipe({
  name: 'computerFilter'
})
export class ComputerFilterPipe implements PipeTransform {

  transform(employees:any[], username: string): any[] {
    if (!employees || !username) {
        return employees;
    }
  console.log("hjhj");
    return employees.filter(employee =>
        employee.username.toLowerCase().indexOf(username.toLowerCase()) !== -1);
}

}
