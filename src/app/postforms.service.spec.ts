import { TestBed } from '@angular/core/testing';

import { PostformsService } from './postforms.service';

describe('PostformsService', () => {
  let service: PostformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
