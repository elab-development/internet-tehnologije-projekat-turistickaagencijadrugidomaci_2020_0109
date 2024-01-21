import { TestBed } from '@angular/core/testing';

import { KupovinaKarataService } from './kupovina-karata.service';

describe('KupovinaKarataService', () => {
  let service: KupovinaKarataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KupovinaKarataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
