import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  signal,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PAGE_NAME } from '../../core/constants/constants';

@Component({
  selector: 'tm-ui-pagination',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * @label itemCount
   * @description Number of all items.
   * @typeParam number
   * */
  @Input({ required: true }) itemCount: number;
  /**
   * @label page
   * @description Current page of elements.
   * @typeParam number
   * */
  @Input({ required: true }) page: number;
  /**
   * @label pageSize
   * @description Number of displayed items.
   * @typeParam number
   * */
  @Input({ required: true }) pageSize: number;
  /**
   * @label setPage
   * @description Action that return selected page.
   * @return function<number>
   * */
  @Output() setPage = new EventEmitter<number>();

  public numberOfPages = signal(0);

  private _destroy = new Subject<void>();

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .pipe(takeUntil(this._destroy))
      .subscribe(params => {
        this.page = params[PAGE_NAME] ? +params[PAGE_NAME] : 1;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemCount'] || changes['pageSize']) {
      this.numberOfPages.set(Math.ceil(this.itemCount / this.pageSize));
    }
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  public handlePageChange(page: number): void {
    this.updateRoute(page);
    this.setPage.next(page);
  }

  public updateRoute(page: number): void {
    void this._router.navigate(
      [],
      {
        relativeTo: this._activatedRoute,
        queryParams: { [PAGE_NAME]: page > 1 ? page : null },
        queryParamsHandling: 'merge'
      });
  };

}
