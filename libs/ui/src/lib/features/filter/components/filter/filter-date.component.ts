import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterWrapperComponent } from './filter-wrapper.component';
import { ActivatedRoute, Params, Router, RouterLink, RouterModule } from '@angular/router';
import { FilterDeleteButtonComponent } from './filter-delete-button.component';

@Component({
  selector: 'tm-ui-filter-date',
  standalone: true,
  imports: [CommonModule, FilterDeleteButtonComponent, RouterModule, RouterLink],
  styleUrls: ['./styles/filter-shared.scss', './filter-date.component.scss'],
  template: `
    <div class='itemContainer'>
      <button (click)='openDatepicker($event)' class='button'>
        <input class='input'
               (change)='handleSelectedValue($any($event.target).value)'
               type='date'
               [id]='itemId'
        >
        @if (value()) {
          {{ value()! | date:dateFormat }}
        } @else {
          {{ data.placeholder }}
        }
      </button>
      @if (value()) {
        <tm-ui-filter-delete-button (action)='clearValue()'></tm-ui-filter-delete-button>
      }
    </div>
  `
})
export class FilterDateComponent extends FilterWrapperComponent<Date> {
  @Input() itemId: string;
  public readonly dateFormat = 'dd/MM';

  constructor(
    public readonly _activatedRoute: ActivatedRoute,
    public readonly _router: Router
  ) {
    super(_activatedRoute, _router);
  }

  public openDatepicker(event: MouseEvent) {
    event.preventDefault();
    const inputElement = document.getElementById(this.itemId);
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      inputElement.showPicker();
    } catch (e) {
      console.error(e);
    }
  }

  public clearValue(): void {
    this.value.set(null);
    this.updateRoute(null);
  }

  public handleSelectedValue(item: Date | string): void {
    this.value.set(new Date(item));
    this.updateRoute(item.toString());
  }

  protected loadValueFromQueryParam(params: Params): Date | null {
    return params[this.data.name] ? new Date(params[this.data.name]) : null;
  }
}
