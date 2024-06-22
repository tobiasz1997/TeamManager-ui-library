import { LinkButtonComponent } from './link-button.component';

describe('LinkButtonComponent', () => {
  let component: LinkButtonComponent;

  beforeEach(() => {
    component = new LinkButtonComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on click emit action', () => {
    const emit = jest.spyOn(component.action, 'emit').mockReset();
    component.handleClick();

    expect(emit).toHaveBeenCalled();
  });

  it('should on click no emit action because disabled', () => {
    const emit = jest.spyOn(component.action, 'emit').mockReset();
    component.disabled = true;
    component.handleClick();

    expect(emit).not.toHaveBeenCalled();
  });
});
