import { FilterSelectComponent } from './filter-select.component';
import { IOption } from '../../../../core/interfaces';
import { activatedRouteSpy, routerSpy } from '@mocks';

describe('FilterDateComponent', () => {
  let component: FilterSelectComponent;
  const dataMock: IOption<string>[] = [
    {
      label: '1', value: '1'
    },
    {
      label: '2', value: '2'
    }
  ];

  beforeEach(async () => {
    component = new FilterSelectComponent(activatedRouteSpy, routerSpy);
    component.data = {
      name: 'test',
      type: 'date',
      placeholder: 'test placeholder',
      options: dataMock
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clearValue should work correctly', () => {
    const routerCall = jest.spyOn(routerSpy, 'navigate');
    component.value.set(dataMock[0]);

    component.clearValue();

    expect(component.value()).toBeNull();
    expect(routerCall).toHaveBeenCalled();
  });

  it('handleSelectedValue should work correctly', () => {
    const routerCall = jest.spyOn(routerSpy, 'navigate');

    component.handleSelectedValue(dataMock[1]);

    expect(component.value()?.label).toBe(dataMock[1].label);
    expect(routerCall).toHaveBeenCalled();
  });
});
