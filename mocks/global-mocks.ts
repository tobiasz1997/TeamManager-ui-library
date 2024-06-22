import { of } from 'rxjs';

export const elementRefMock: ReturnType<jest.Mock> = {
  nativeElement: {
    contains: (value: boolean) => value
  }
};

export const activatedRouteMock: ReturnType<jest.Mock> = {
  queryParams: of({})
};

export const routerMock: ReturnType<jest.Mock> = {
  navigate: jest.fn().mockReset()
};
