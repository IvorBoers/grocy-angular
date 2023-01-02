import { GrocyImagePipe } from './grocy-image-pipe.pipe';
import {inject, TestBed} from "@angular/core/testing";
import {FilesService} from "../masterdata/files/files-service";
import {BrowserModule} from "@angular/platform-browser";

describe('GrocyImagePipe', () => {
  beforeEach(() => {
    TestBed
        .configureTestingModule({
          imports: [
            BrowserModule
          ]
        });
  });

  it('create an instance', inject([FilesService], (filesService: FilesService) => {
    let pipe = new GrocyImagePipe(filesService);
    expect(pipe).toBeTruthy();
  }));
});
