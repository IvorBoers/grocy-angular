import { Pipe, PipeTransform } from '@angular/core';
import {FilesService} from "../masterdata/files/files-service";

@Pipe({
  name: 'grocyImage'
})
export class GrocyImagePipe implements PipeTransform {

  constructor(protected filesService: FilesService) {
  }
  transform(value: string, ...args: string[]): string {
    return this.filesService.toFileUrl(args[0], value);
  }

}
