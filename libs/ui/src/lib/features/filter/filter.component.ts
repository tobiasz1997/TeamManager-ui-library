import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFilterItem } from '../../core/interfaces';
import { FilterDateComponent } from './components/filter/filter-date.component';
import { FilterSelectComponent } from './components/filter/filter-select.component';

@Component({
  selector: 'tm-ui-filter',
  standalone: true,
  imports: [CommonModule, FilterDateComponent, FilterSelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  /**
   * @label data
   * @description Filter array of all filter's objects.
   * @typeParam Array<IFilterItem>
   * @remarks
   * See {@link IFilterItem| FilterItem}.
   * */
  @Input({ required: true }) data: Array<IFilterItem>;
}
