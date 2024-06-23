import { FilterDateComponent } from './filter-date.component';
import { activatedRouteSpy, mouseEventSpy, routerSpy } from '@mocks';


describe('FilterDateComponent', () => {
  let component: FilterDateComponent;
  const dateMock = new Date(2024, 3, 3);

  beforeEach(async () => {
    component = new FilterDateComponent(activatedRouteSpy, routerSpy);
    component.data = {
      name: 'test',
      type: 'date',
      placeholder: 'test placeholder'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('open datepicker should work correctly', () => {
    const showPickerMock: ReturnType<jest.Mock> = { showPicker: jest.fn() };
    const htmlElementMock: ReturnType<jest.Mock> = jest.fn().mockReturnValue(showPickerMock);
    Object.defineProperty(global.document, 'getElementById', { value: htmlElementMock });

    const preventDefaultCall = jest.spyOn(mouseEventSpy, 'preventDefault');
    const showPickerCall = jest.spyOn(showPickerMock, 'showPicker');

    component.openDatepicker(mouseEventSpy);

    expect(preventDefaultCall).toHaveBeenCalled();
    expect(showPickerCall).toHaveBeenCalled();
  });

  it('clearValue should work correctly', () => {
    const routerCall = jest.spyOn(routerSpy, 'navigate');
    component.value.set(dateMock);

    component.clearValue();

    expect(component.value()).toBeNull();
    expect(routerCall).toHaveBeenCalled();
  });

  it('handleSelectedValue should work correctly', () => {
    const routerCall = jest.spyOn(routerSpy, 'navigate');

    component.handleSelectedValue(dateMock);

    expect(component.value()).toStrictEqual(dateMock);
    expect(routerCall).toHaveBeenCalled();
  });
});
