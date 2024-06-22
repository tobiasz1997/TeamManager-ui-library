import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFilterItem } from '../../../../core/interfaces';
import { ActivatedRoute, Params, Router, RouterLink, RouterModule } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'tm-ui-filter-wrapper',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  template: ''
})
export abstract class FilterWrapperComponent<TItem = unknown> implements OnInit {
  @Input({ required: true }) data: IFilterItem;
  public value = signal<TItem | null>(null);
  private readonly PAGE_NAME: string = 'page';

  protected constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(take(1))
      .subscribe((params) => {
        this.value.set(this.loadValueFromQueryParam(params));
      });
  }

  public abstract clearValue(): void;

  public abstract handleSelectedValue(item: TItem): void;

  protected abstract loadValueFromQueryParam(params: Params): TItem | null;

  protected updateRoute(value: string | null): void {
    void this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { [this.data.name]: value, [this.PAGE_NAME]: null },
        queryParamsHandling: 'merge'
      });
  };
}
