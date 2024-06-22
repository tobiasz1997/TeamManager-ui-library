import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../core/directives/click-outside.directive';
import { FilterWrapperComponent } from './filter-wrapper.component';
import { IOption } from '../../../../core/interfaces';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { FilterDeleteButtonComponent } from './filter-delete-button.component';

@Component({
  selector: 'tm-ui-filter-select',
  standalone: true,
  imports: [CommonModule, RouterModule, ClickOutsideDirective, FilterDeleteButtonComponent],
  styleUrls: ['./filter-select.component.scss', './styles/filter-shared.scss'],
  template: `
    <div class='itemContainer'
         tmUiClickOutside
         [isActive]='isDropdownVisible'
         (clickOutside)='isDropdownVisible = false'
    >
      <button class='button' (click)='isDropdownVisible = !isDropdownVisible'>
        @if (value()) {
          {{ value()!.label }}
        } @else {
          {{ data.placeholder }}
        }
      </button>
      @if (value()) {
        <tm-ui-filter-delete-button (action)='clearValue()'></tm-ui-filter-delete-button>
      }
      @if (isDropdownVisible && data.options) {
        <div class='select'>
          <ng-container *ngFor='let item of data.options'>
            <div class='select__item' (click)='handleSelectedValue(item)'>{{ item.label }}</div>
          </ng-container>
        </div>
      }
    </div>
  `
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FilterSelectComponent extends FilterWrapperComponent<IOption<any>> {
  public isDropdownVisible = false;

  constructor(
    public readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router
  ) {
    super(_activatedRoute, _router);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleSelectedValue(item: IOption<any>): void {
    this.value.set(item);
    this.updateRoute(item.value);
    this.isDropdownVisible = false;
  }

  public clearValue(): void {
    this.value.set(null);
    this.updateRoute(null);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected loadValueFromQueryParam(params: Params): IOption<any> | null {
    return this.data?.options?.find(x => x.value === params[this.data.name]) ?? null;
  }
}
