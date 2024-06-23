import { of } from 'rxjs';

export const elementRefSpy: ReturnType<jest.Mock> = {
  nativeElement: {
    contains: (value: boolean) => value
  }
};

export const activatedRouteSpy: ReturnType<jest.Mock> = {
  queryParams: of({})
};

export const routerSpy: ReturnType<jest.Mock> = {
  navigate: jest.fn().mockReset()
};

export const mouseEventSpy: ReturnType<jest.Mock> = {
  preventDefault: jest.fn()
};
