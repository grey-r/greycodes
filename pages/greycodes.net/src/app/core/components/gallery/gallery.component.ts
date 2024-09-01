import {
  AfterViewInit,
  Component,
  HostBinding,
  input,
  OnDestroy,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  /** base width in REM */
  public readonly baseWidth = input<number>(12);

  @HostBinding('attr.id')
  public readonly id = 'gallery-' + crypto.randomUUID();
  private readonly photoSwipeLightbox = signal<PhotoSwipeLightbox | undefined>(
    undefined
  );

  ngAfterViewInit(): void {
    const existingLightbox = this.photoSwipeLightbox();
    if (existingLightbox) {
      existingLightbox.destroy();
    }
    this.photoSwipeLightbox.set(
      new PhotoSwipeLightbox({
        gallery: `#${this.id}`,
        children: 'app-gallery-item > a[data-pswp-src]',
        pswpModule: () => import('photoswipe'),
      })
    );

    this.photoSwipeLightbox()?.init();
  }

  ngOnDestroy(): void {
    this.photoSwipeLightbox()?.destroy();
    this.photoSwipeLightbox.set(undefined);
  }
}
