import { PaginationComponent } from './pagination.component';
import { of } from 'rxjs';
import { NavigationExtras } from '@angular/router';
import { PAGE_NAME } from '../../core/constants/constants';
import { activatedRouteSpy, routerSpy } from '@mocks';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let activatedRoute = activatedRouteSpy;

  beforeEach(() => {
    component = new PaginationComponent(activatedRoute, routerSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should page be equal 1 when no params', () => {
    component.ngOnInit();
    expect(component.page).toBe(1);
  });

  it('should page be equal 16 when page in params value', () => {
    activatedRoute = {
      queryParams: of({ [PAGE_NAME]: 16 })
    };
    component = new PaginationComponent(activatedRoute, routerSpy);
    component.ngOnInit();
    expect(component.page).toBe(16);
  });

  it('should on change page update route', () => {
    const emit = jest.spyOn(routerSpy, 'navigate').mockReset();
    component.handlePageChange(3);
    expect(emit).toHaveBeenCalledWith([], expect.objectContaining<NavigationExtras>({
      queryParams: expect.objectContaining({ [PAGE_NAME]: 3 })
    }));
  });

  it('should on change page update route', () => {
    const emit = jest.spyOn(component.setPage, 'next').mockReset();
    component.handlePageChange(7);
    expect(emit).toHaveBeenCalledWith(7);
  });
});
